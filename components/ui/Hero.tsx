import { MovieItem } from "../../lib/types"
import PageBackground from "./PageBackground"
import Button from "./Button"
import { RiArrowRightSLine } from "@remixicon/react"

type Props = {
  movie?: MovieItem | null
}

export default function Hero({ movie }: Props) {
  if (!movie) return null

  const title = movie.elements.title.value
  const plot = movie.elements.plot?.value ?? ""
  const slug = movie.elements.seoname.value

  return (
    <section className="relative overflow-hidden h-[85vh] min-h-[600px] z-0">
      <PageBackground />
      <div className="relative h-full flex items-end pb-20 px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {plot && (
            <p
              className="max-w-2xl text-white/90 mb-6 text-lg drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: plot }}
            />
          )}
          <div className="flex gap-3">
            <Button
              href={`/movie/${slug}`}
              variant="secondary"
              size="large"
              icon={<RiArrowRightSLine />}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
