import { getMovies } from '../lib/kontent';
import MovieCard from '../components/MovieCard';

export default async function HomePage() {
  const { items } = await getMovies();

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Movies</h1>
      <div className="grid grid-auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 && <p>No movies yet.</p>}
        {items.map((a) => (
          // <article key={a.system.id} className="card">
          //   <h2><Link href={`/${a.elements.seoname.value}`}>{a.elements.title.value}</Link></h2>
          //   <p>{a.elements.summary?.value ?? ''}</p>
          //   <small>Slug: <code>{a.elements.seoname.value}</code></small>
          // </article>
          <MovieCard key={a.system.id} {...a.elements} />
        ))}
      </div>
    </section>
  );
}
