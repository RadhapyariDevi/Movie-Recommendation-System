const TMDB_IMG = "https://image.tmdb.org/t/p/w500";

export default function Poster({ src, alt, className = "" }) {
  return src ? (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
    />
  ) : (
    <div
      className={`
        bg-linear-to-br
        from-wine to-earth
        flex items-center justify-center
        ${className}
      `}
    >
      <span className="text-4xl opacity-40">🎬</span>
    </div>
  );
}