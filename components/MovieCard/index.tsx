import { Movie } from "../../lib/types";
import Image from "next/image";

export default function MovieCard({ ...movie }: Movie) {
  return (
    <div className="group cursor-pointer">
      <a
        href={`/movie/${movie.seoname.value}`}
        className="block"
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-surface shadow-md transition-transform duration-300 group-hover:scale-105">
          {movie.poster?.value?.[0]?.url ? (
            <Image
              src={movie.poster.value[0].url}
              alt={movie.title.value}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-surface-variant text-on-surface">
              <span className="text-sm">Sem imagem</span>
            </div>
          )}
        </div>
        
        <div className="mt-3">
          <h4 className="text-lg font-semibold text-primary group-hover:text-primary transition-colors duration-200">
            {movie.title.value}
          </h4>
          {movie.plot?.value && (
            <p className="mt-1 text-sm text-on-surface opacity-70 line-clamp-2">
              {movie.plot.value.replace(/<[^>]*>/g, '')} 
            </p>
          )}
        </div>
      </a>
    </div>
  );
}
