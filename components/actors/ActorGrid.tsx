import { ActorItem } from "../../lib/types"
import ActorCard from "./ActorCard"

type Props = {
  actors: ActorItem[]
  showLink?: boolean
}

export default function ActorGrid({ actors, showLink = true }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {actors.map((actor) => (
        <ActorCard key={actor.system.id} actor={actor} showLink={showLink} />
      ))}
    </div>
  )
}
