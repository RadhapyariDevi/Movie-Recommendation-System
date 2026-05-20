import MoviePoster from "./MoviePoster";

function RecCard({ movie, title, score, rank }) {

  return (
    <div
      className="
        flex items-center gap-3
        py-3
        border-b border-sand/10
        last:border-0
      "
    >

      {/* Rank */}
      <span
        className="
          text-[11px]
          text-sand/40
          w-4
          text-right
          font-mono
        "
      >
        {rank}
      </span>

      {/* Poster */}
      <MoviePoster
        src={movie?.poster_url}
        alt={movie?.title || title}
        className="
          w-10 h-14
          rounded-md
          object-cover
          flex-shrink-0
        "
      />

      {/* Info */}
      <div className="flex-1 min-w-0">

        <p className="text-[13px] font-medium text-snow truncate">
          {movie?.title || title}
        </p>

        <p className="text-[11px] text-sand">
          {movie?.release_date?.slice(0, 4) || "Unknown"}
        </p>

      </div>

      {/* Score */}
      {score !== undefined && (
        <span
          className="
            font-serif
            text-[13px]
            font-bold
            text-sand
            ml-auto
            flex-shrink-0
          "
        >
          {Math.round(score * 100)}%
        </span>
      )}

    </div>
  );
}

export default RecCard;