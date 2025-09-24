import Link from "next/link"
import { Movie } from "../../lib/types"
import Image from "next/image"
import { Heading, Paragraph } from "../ui/Typography"

type Props = Movie & {
  className?: string
  showPlot?: boolean
  showTitle?: boolean
}

export default function MovieCard({
  className,
  showPlot = true,
  showTitle = true,
  ...movie
}: Props) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <Link href={`/movie/${movie.seoname.value}`} className="block">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-surface shadow-md transition-transform duration-300 group-hover:scale-105">
          {movie.poster?.value?.[0]?.url ? (
            <Image
              src={movie.poster.value[0].url}
              alt={movie.title.value}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-surface-variant text-on-surface">
              <Paragraph size="sm">Sem imagem</Paragraph>
            </div>
          )}
        </div>

        <div className="mt-3">
          {showTitle && (
            <Heading
              level={4}
              className="text-primary group-hover:text-primary transition-colors duration-200"
              weight="semibold"
              size="lg"
            >
              {movie.title.value}
            </Heading>
          )}
          {showPlot && movie.plot?.value && (
            <Paragraph className="mt-1 text-on-surface opacity-70 line-clamp-2">
              {movie.plot.value.replace(/<[^>]*>/g, "")}
            </Paragraph>
          )}
        </div>
      </Link>
    </div>
  )
}
