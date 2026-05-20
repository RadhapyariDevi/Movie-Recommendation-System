export default function GenreBadge({ name }) {
  return (
    <span
      className="
        px-3 py-1
        rounded-full
        text-xs
        border border-sand/25
        bg-wine/40
        text-sand
      "
    >
      {name}
    </span>
  );
}