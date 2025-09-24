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

function getStaticClient() {
  return new DeliveryClient({
    environmentId: envId ?? "",
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
  const client = getStaticClient()
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

export async function getActorsByCodenames(codenames: string[]): Promise<ActorItem[]> {
  if (codenames.length === 0) return []
  
  const client = await getClient()
  const response = await client
    .items<ActorItem>()
    .type("actor")
    .inFilter("system.codename", codenames)
    .toPromise()

  return response.data.items
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

export async function getActorBySlug(slug: string): Promise<ActorItem | null> {
  const client = await getClient()
  const response = await client
    .items<ActorItem>()
    .type("actor")
    .equalsFilter("elements.url", slug)
    .limitParameter(1)
    .toPromise()

  return response.data.items[0] ?? null
}

export async function getMoviesByActor(actorCodename: string) {
  const client = await getClient()
  const response = await client
    .items<MovieItem>()
    .type("movie")
    .containsFilter("elements.stars", [actorCodename])
    .toPromise()

  return { items: response.data.items }
}

export async function getAllActorsSlug(): Promise<string[]> {
  const client = getStaticClient()
  const response = await client
    .items<ActorItem>()
    .type("actor")
    .elementsParameter(["url"])
    .toPromise()

  return response.data.items
    .map((i) => i.elements.url.value)
    .filter(Boolean)
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
