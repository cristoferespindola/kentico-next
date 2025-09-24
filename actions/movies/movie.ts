import { getMovies } from "../../lib/kontent"
import { Movie } from "../../lib/types"

export async function getMoviesAction(): Promise<Movie[]> {
  const { items } = await getMovies()

  if (!items) return []

  const movies = items.map((item) => item.elements)

  return movies
}
