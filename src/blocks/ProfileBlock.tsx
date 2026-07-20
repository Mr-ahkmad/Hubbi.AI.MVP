import { MapPin } from "lucide-react";
import type { ProfileConfig } from "./types";

export default function ProfileBlock({ config }: { config: ProfileConfig }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* RASM: mijoz profil rasmi / logotipi shu yerga */}
      <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-navy-border shadow-glow sm:h-28 sm:w-28">
        <img
          src={config.avatar}
          alt={config.name}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">
        {config.name}
      </h1>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
        {config.bio}
      </p>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
        <MapPin className="h-3.5 w-3.5 text-accent-teal" />
        <span>Toshkent, Chilonzor</span>
      </div>
    </div>
  );
}
