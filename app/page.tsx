import { getMoviesBySlug, getMoviesTrending } from "../lib/kontent"
import MovieGrid from "../components/movies/MovieGrid"
import Hero from "../components/ui/Hero"
import Categories from "../components/movies/Categories"
import Section from "../components/ui/Section"
import Navigation from "../components/Navigation"

const currentMovie = "monsters-inc"

export default async function HomePage() {
  const { items: trendingMovies } = await getMoviesTrending(currentMovie)
  const currentMovieItem = await getMoviesBySlug(currentMovie)

  return (
    <>
    <Navigation />
    <div className="min-h-screen -mt-20">
      <Hero movie={currentMovieItem} />
      <main className="bg-tertiary text-primary -mt-2 relative z-10 pt-10 md:pt-20">
        <div className="max-w-[1920px] mx-auto px-8 py-8 space-y-10">
          <Section title="Trending Movies">
            <MovieGrid movies={trendingMovies} />
          </Section>
          <Section title="Browse by Category">
            <Categories />
          </Section>
        </div>
      </main>
    </div>
    </>
  )
}
