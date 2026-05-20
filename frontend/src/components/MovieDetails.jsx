import MoviePoster from "./MoviePoster";
import GenreBadge from "./GenreBadge";

export default function MovieDetail({ movie }) {
  if (!movie) return null;

  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : null;

  return (
    <div
      className="
        relative overflow-hidden rounded-3xl
        border border-sand/20
        bg-linear-to-br from-wine/30 to-earth/10
        backdrop-blur-md
      "
    >
      {/* Backdrop */}
      {movie.backdrop_path && (
        <div className="absolute inset-0 opacity-20">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8">
        
        {/* MoviePoster */}
        <div className="shrink-0">
          <MoviePoster
            src={movie.poster_url}
            alt={movie.title}
            className="
              w-55 h-82.5
              rounded-2xl
              shadow-2xl
              border border-sand/20
            "
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          
          {/* Title */}
          <h1
            className="
              text-4xl md:text-5xl
              font-black text-snow
              leading-tight mb-3
            "
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {movie.title}
          </h1>


          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-5">
            {movie.genres?.map((genre) => (
              <GenreBadge
                key={genre.id}
                name={genre.name}
              />
            ))}

            {movie.release_date && (
              <GenreBadge
                name={movie.release_date.slice(0, 4)}
              />
            )}
          </div>

          {/* Overview */}
          <p
            className="
              text-snow/75
              leading-relaxed
              text-[15px]
              max-w-3xl
              mb-8
            "
          >
            {movie.overview || "No overview available."}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            
            {/* Rating */}
            <div>
              <p className="text-3xl font-bold text-snow">
                ★ {movie.vote_average?.toFixed(1)}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-sand">
                TMDB Rating
              </p>
            </div>

            {/* Votes */}
            <div>
              <p className="text-3xl font-bold text-snow">
                {movie.vote_count
                  ? `${Math.round(movie.vote_count / 1000)}K`
                  : "N/A"}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-sand">
                Votes
              </p>
            </div>

            {/* Popularity */}
            <div>
              <p className="text-3xl font-bold text-snow">
                {movie.popularity
                  ? Math.round(movie.popularity)
                  : "N/A"}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-sand">
                Popularity
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}