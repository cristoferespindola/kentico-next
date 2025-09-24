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
import { Heading, Paragraph } from "../../../components/ui/Typography"
import Container from "../../../components/ui/Container"

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
    <Container>
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
          <Heading weight="bold" size="4xl">
            {movie.elements.title.value}
          </Heading>

          {movie.elements.released?.value && (
            <Paragraph size="lg">
              Released:{" "}
              {new Date(movie.elements.released.value).toLocaleDateString()}
            </Paragraph>
          )}

          {movie.elements.length?.value && (
            <Paragraph size="lg">
              Duration: {movie.elements.length.value} minutes
            </Paragraph>
          )}

          {movie.elements.category?.value && (
            <div className="flex flex-wrap gap-2">
              {movie.elements.category.value.map((category, index) => (
                <Paragraph
                  key={index}
                  className="px-3 py-1 bg-blue-600 text-white rounded-full"
                  size="sm"
                >
                  {category.name}
                </Paragraph>
              ))}
            </div>
          )}

          {movie.elements.plot?.value && (
            <div className="mt-6">
              <Heading weight="semibold" size="2xl" className="mb-3">
                Plot
              </Heading>
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
    </Container>
  )
}
