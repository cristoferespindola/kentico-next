import { notFound } from 'next/navigation';
import { getMoviesBySlug } from '../../../lib/kontent';
import { RichText } from '../../../components/RichText';


export default async function MoviePage({ params }: { params: { slug: string } }) {
  const article = await getMoviesBySlug(params.slug);
  if (!article) return notFound();

  return (
    <article>
      <h1>{article.elements.title.value}</h1>
        <p><em>{article.elements.plot?.value ?? ''}</em></p>
      {/* <RichText richText={article.elements.plot ?? ''} /> */}
    </article>
  );
}
