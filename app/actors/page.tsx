import { getActors } from "../../lib/kontent"
import Link from "next/link"
import Image from "next/image"
import Section from "../../components/ui/Section"

export default async function ActorsPage() {
  const { items: actors } = await getActors()

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-[1920px] mx-auto px-8 py-8 space-y-10">
        <Section title="All Actors">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {actors.map((actor) => (
              <Link
                key={actor.system.id}
                href={`/actors/${actor.elements.url.value}`}
                className="group"
              >
                <div className="space-y-3">
                  {actor.elements.photo?.value?.[0] && (
                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                      <Image
                        src={actor.elements.photo.value[0].url}
                        alt={`${actor.elements.firstName.value} ${actor.elements.lastName.value}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="font-semibold text-sm md:text-base group-hover:text-blue-400 transition-colors">
                      {actor.elements.firstName.value}{" "}
                      {actor.elements.lastName.value}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
    </div>
  )
}
