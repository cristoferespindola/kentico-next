import MovieCard from "./MovieCard"
import { MovieItem } from "../../lib/types"
import Button from "../ui/Button"

type Props = {
  movies: MovieItem[]
  count?: number
  href?: string
}

export default function MovieGrid({ movies, count, href }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.system.id}
            showPlot={false}
            showTitle={false}
            {...movie.elements}
          />
        ))}
      </div>

      {count && count > movies.length && href && (
        <div className="text-center mt-4 w-auto ml-auto">
          <Button href={href} variant="secondary">
            View All
          </Button>
        </div>
      )}
    </div>
  )
}
