import { ActorItem } from "../../lib/types"
import Link from "next/link"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { Paragraph } from "../ui/Typography"

type Props = {
  actor: ActorItem
  showLink?: boolean
}

export default function ActorCard({ actor, showLink = true }: Props) {
  return (
    <Link
      key={actor.system.id}
      href={showLink ? `/actors/${actor.elements.url.value}` : ""}
      className={twMerge("group", !showLink && "cursor-default")}
    >
      <div className="space-y-3">
        {actor.elements.photo?.value?.[0] && (
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
            <Image
              src={actor.elements.photo.value[0].url}
              alt={`${actor.elements.firstName.value} ${actor.elements.lastName.value}`}
              fill
              className={twMerge(
                "object-cover transition-transform transform-gpu origin-center [will-change:transform] group-hover:scale-105",
                !showLink && "cursor-default group-hover:scale-100"
              )}
            />
          </div>
        )}
        <div className="text-center">
          <Paragraph
            weight="semibold"
            className={twMerge(
              "group-hover:text-blue-400 transition-colors",
              !showLink && "cursor-default group-hover:text-primary"
            )}
          >
            {actor.elements.firstName.value} {actor.elements.lastName.value}
          </Paragraph>
        </div>
      </div>
    </Link>
  )
}
