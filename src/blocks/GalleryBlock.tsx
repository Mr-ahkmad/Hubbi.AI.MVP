import type { GalleryConfig } from "./types";

export default function GalleryBlock({ config }: { config: GalleryConfig }) {
  const count = config.images.length;
  // 2 rasm -> 2 ustun, 3 rasm -> 3 ustun, 4 rasm -> 2x2 grid
  const cols =
    count === 2 ? "grid-cols-2" : count === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <div className={`grid ${cols} gap-2`}>
      {config.images.map((src, i) => (
        <div
          key={i}
          className="aspect-square overflow-hidden rounded-2xl border border-navy-border"
        >
          {/* RASM: galereya rasmi shu yerga */}
          <img
            src={src}
            alt={`Galereya ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
