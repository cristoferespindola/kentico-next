import {
  DeliveryClient,
  camelCasePropertyNameResolver,
} from "@kontent-ai/delivery-sdk"
import { draftMode } from "next/headers"
import { ActorItem, MovieItem } from "./types"

const envId = process.env.KONTENT_ENVIRONMENT_ID
if (!envId) {
  console.warn("KONTENT_ENVIRONMENT_ID is not set")
}

async function getClient() {
  const previewKey = process.env.KONTENT_PREVIEW_API_KEY
  const isPreview = (await draftMode())?.isEnabled ?? false

  return new DeliveryClient({
    environmentId: envId ?? "",
    previewApiKey: previewKey,
    defaultQueryConfig: {
      usePreviewMode: isPreview,
    },
    propertyNameResolver: camelCasePropertyNameResolver,
  })
}

export async function getMovies(count = 50) {
  const client = await getClient()
  const response = await client
    .items<MovieItem>()
    .type("movie")
    .orderByAscending("elements.title")
    .toPromise()

  return { items: response.data.items }
}

export async function getMoviesTrending(ignore: string) {
  const client = await getClient()
  const response = await client
    .items<MovieItem>()
    .type("movie")
    .orderByAscending("elements.title")
    .notEqualsFilter("elements.seoname", ignore)
    .limitParameter(5)
    .toPromise()

  return { items: response.data.items }
}

export async function getAllMoviesSlug(): Promise<string[]> {
  const client = await getClient()
  const response = await client
    .items<MovieItem>()
    .type("movie")
    .elementsParameter(["seoname"])
    .toPromise()

  return response.data.items
    .map((i) => i.elements.seoname.value)
    .filter(Boolean)
}

export async function getMoviesBySlug(slug: string): Promise<MovieItem | null> {
  const client = await getClient()
  const response = await client
    .items<MovieItem>()
    .type("movie")
    .equalsFilter("elements.seoname", slug)
    .limitParameter(1)
    .toPromise()

  return response.data.items[0] ?? null
}

export async function getActors() {
  const client = await getClient()
  const response = await client
    .items<ActorItem>()
    .type("actor")
    .orderByAscending("elements.name")
    .toPromise()

  return { items: response.data.items }
}

export async function getMovieCategories() {
  const client = await getClient()

  const moviesResponse = await client
    .items<MovieItem>()
    .type("movie")
    .elementsParameter(["category"])
    .toPromise()

  const categories = new Set<string>()
  moviesResponse.data.items.forEach((movie) => {
    if (movie.elements.category?.value) {
      movie.elements.category.value.forEach((category) => {
        categories.add(category.name)
      })
    }
  })

  return Array.from(categories).map((name) => ({
    codename: name.toLowerCase().replace(/\s+/g, "-"),
    name: name,
    count: 0,
  }))
}
