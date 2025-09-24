import MovieCard from "./MovieCard"
import { Movie } from "../../lib/types"

export default function MovieCardProxy(props: Movie) {
  return <MovieCard {...props} />
}
