import { getMoviesBySlug, getMoviesTrending, getMovies } from "../lib/kontent"
import MovieGrid from "../components/movies/MovieGrid"
import Hero from "../components/ui/Hero"
import Categories from "../components/movies/Categories"
import Section from "../components/ui/Section"

const currentMovie = "monsters-inc"

export default async function HomePage() {
  const { items: trendingMovies } = await getMoviesTrending(currentMovie)
  const currentMovieItem = await getMoviesBySlug(currentMovie)

  return (
    <div className="min-h-screen">
      <Hero movie={currentMovieItem} />
      <main className="bg-black text-white -mt-2 relative z-10 pt-20">
        <div className="max-w-[1920px] mx-auto px-4 py-8 space-y-10 px-8">
          <Section title="Trending Movies">
            <MovieGrid movies={trendingMovies} />
          </Section>          
          <Section title="Browse by Category">
            <Categories />
          </Section>
        </div>
      </main>
    </div>
  )
}
