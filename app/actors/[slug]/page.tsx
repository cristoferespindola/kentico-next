import { notFound } from "next/navigation"
import {
  getActorBySlug,
  getMoviesByActor,
  getAllActorsSlug,
} from "../../../lib/kontent"
import MovieGrid from "../../../components/movies/MovieGrid"
import Section from "../../../components/ui/Section"
import Image from "next/image"

export async function generateStaticParams() {
  const slugs = await getAllActorsSlug()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function ActorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const actor = await getActorBySlug(slug)

  if (!actor) return notFound()

  const { items: movies } = await getMoviesByActor(actor.system.codename)

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-8 space-y-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            {actor.elements.photo?.value?.[0] && (
              <Image
                src={actor.elements.photo.value[0].url}
                alt={`${actor.elements.firstName.value} ${actor.elements.lastName.value}`}
                width={300}
                height={450}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {actor.elements.firstName.value} {actor.elements.lastName.value}
            </h1>

            {actor.elements.born?.value && (
              <p className="text-lg text-gray-300">
                Born: {new Date(actor.elements.born.value).toLocaleDateString()}
              </p>
            )}

            {actor.elements.nationality?.value?.[0] && (
              <p className="text-lg text-gray-300">
                Nationality: {actor.elements.nationality.value[0].name}
              </p>
            )}
          </div>
        </div>

        {/* Movies Section */}
        {movies.length > 0 && (
          <Section
            title={`Movies starring ${actor.elements.firstName.value} ${actor.elements.lastName.value}`}
          >
            <MovieGrid movies={movies} />
          </Section>
        )}
      </main>
    </div>
  )
}
