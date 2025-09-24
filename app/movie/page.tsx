import { getMovies } from "../../lib/kontent"
import MovieGrid from "../../components/movies/MovieGrid"
import Section from "../../components/ui/Section"

export default async function MoviesPage() {
  const { items: movies } = await getMovies()

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-[1920px] mx-auto px-8 py-8 space-y-10">
        <Section title="All Movies">
          <MovieGrid movies={movies} />
        </Section>
      </main>
    </div>
  )
}
