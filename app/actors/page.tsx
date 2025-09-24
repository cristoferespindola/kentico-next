import { getActors } from "../../lib/kontent"
import Section from "../../components/ui/Section"
import ActorCard from "../../components/actors/ActorCard"
import Container from "../../components/ui/Container"

export default async function ActorsPage() {
  const { items: actors } = await getActors()

  return (
    <Container>
      <Section title="All Actors">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {actors.map((actor) => (
            <ActorCard key={actor.system.id} actor={actor} showLink={true} />
          ))}
        </div>
      </Section>
    </Container>
  )
}
