import { notFound } from "next/navigation"
import {
  getActorBySlug,
  getMoviesByActor,
  getAllActorsSlug,
} from "../../../lib/kontent"
import MovieGrid from "../../../components/movies/MovieGrid"
import Section from "../../../components/ui/Section"
import Image from "next/image"
import { Heading, Paragraph } from "../../../components/ui/Typography"
import Container from "../../../components/ui/Container"

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
    <Container>
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
          <Heading weight="bold" size="4xl">
            {actor.elements.firstName.value} {actor.elements.lastName.value}
          </Heading>

          {actor.elements.born?.value && (
            <Paragraph size="lg">
              Born: {new Date(actor.elements.born.value).toLocaleDateString()}
            </Paragraph>
          )}

          {actor.elements.nationality?.value?.[0] && (
            <Paragraph size="lg">
              Nationality: {actor.elements.nationality.value[0].name}
            </Paragraph>
          )}
        </div>
      </div>

      {movies.length > 0 && (
        <Section
          title={`Movies starring ${actor.elements.firstName.value} ${actor.elements.lastName.value}`}
        >
          <MovieGrid movies={movies} />
        </Section>
      )}
    </Container>
  )
}
