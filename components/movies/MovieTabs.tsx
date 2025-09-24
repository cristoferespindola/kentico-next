import Tabs from "../ui/Tabs"
import { getMovieCategories, getMovies } from "../../lib/kontent"
import MovieGrid from "./MovieGrid"

export default async function MovieTabs() {
  const categories = await getMovieCategories()
  const { items: allMovies } = await getMovies()


  const tabs = [
    {
      id: 'all',
      label: 'All Popular',
      icon: (
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      content: <MovieGrid movies={allMovies} />
    },
    ...categories.map((category) => ({
      id: category.codename,
      label: category.name,
      icon: (
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
        </svg>
      ),
      content: (
        <div>
          <p className="text-gray-500 mb-4">
            Filmes da categoria <em className="font-semibold text-gray-800">{category.name}</em>
          </p>
          <MovieGrid 
            movies={allMovies.filter(movie => 
              movie.elements.category?.value?.some(cat => cat.name === category.name)
            )} 
          />
        </div>
      )
    }))
  ]

  return <Tabs tabs={tabs} defaultTab="all" />
}
