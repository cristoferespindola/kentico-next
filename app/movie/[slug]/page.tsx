import { notFound } from "next/navigation"
import {
  getMoviesBySlug,
  getAllMoviesSlug,
  getActorsByCodenames,
} from "../../../lib/kontent"
import { RichText } from "../../../components/RichText"
import ActorGrid from "../../../components/actors/ActorGrid"
import Section from "../../../components/ui/Section"
import Image from "next/image"

export async function generateStaticParams() {
  const slugs = await getAllMoviesSlug()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function MoviePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const movie = await getMoviesBySlug(slug)

  if (!movie) return notFound()

  const actorCodenames = movie.elements.stars?.value || []
  const actors = await getActorsByCodenames(actorCodenames)

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-8 space-y-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            {movie.elements.poster?.value?.[0] && (
              <Image
                src={movie.elements.poster.value[0].url}
                alt={movie.elements.title.value}
                width={300}
                height={450}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {movie.elements.title.value}
            </h1>

            {movie.elements.released?.value && (
              <p className="text-lg text-gray-300">
                Released:{" "}
                {new Date(movie.elements.released.value).toLocaleDateString()}
              </p>
            )}

            {movie.elements.length?.value && (
              <p className="text-lg text-gray-300">
                Duration: {movie.elements.length.value} minutes
              </p>
            )}

            {movie.elements.category?.value && (
              <div className="flex flex-wrap gap-2">
                {movie.elements.category.value.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {movie.elements.plot?.value && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Plot</h2>
                <RichText richText={movie.elements.plot} />
              </div>
            )}
          </div>
        </div>

        {actors.length > 0 && (
          <Section title="Cast">
            <ActorGrid actors={actors} showLink={false} />
          </Section>
        )}
      </main>
    </div>
  )
}
