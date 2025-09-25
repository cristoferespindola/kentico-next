import { getMovies } from "../../../lib/kontent"
import MovieGrid from "../../../components/movies/MovieGrid"
import Section from "../../../components/ui/Section"
import Container from "../../../components/ui/Container"

export default async function MoviesPage() {
  const { items: movies } = await getMovies()

  return (
    <Container>
      <Section title="All Movies">
        <MovieGrid movies={movies} />
      </Section>
    </Container>
  )
}
