import { getMovieCategories, getMovies } from "../../lib/kontent"
import Tabs from "../ui/Tabs"
import MovieGrid from "./MovieGrid"

export default async function Categories() {
  const categories = await getMovieCategories()
  const { items: allMovies } = await getMovies()

  const tabs = [
    {
      id: "all",
      label: "All Popular",
      content: (
        <MovieGrid
          movies={allMovies.slice(0, 5)}
          count={allMovies.length}
          href="/movies"
        />
      ),
    },
    ...categories.map((category) => ({
      id: category.codename,
      label: category.name,
      content: (
        <MovieGrid
          movies={allMovies
            .filter((movie) =>
              movie.elements.category?.value?.some(
                (cat) => cat.name === category.name
              )
            )
            .slice(0, 5)}
          href={`/movies?category=${category.codename}`}
        />
      ),
    })),
  ]

  return (
    <div className="flex flex-wrap gap-2">
      <Tabs tabs={tabs} defaultTab="all" />
    </div>
  )
}
