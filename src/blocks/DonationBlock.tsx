import { Heart } from "lucide-react";
import type { DonationConfig } from "./types";

export default function DonationBlock({ config }: { config: DonationConfig }) {
  return (
    <div className="rounded-3xl border border-navy-border bg-navy-card p-5 text-center shadow-soft">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-teal/12 text-accent-teal ring-1 ring-accent-teal/25">
        <Heart className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
        {config.title}
      </h3>
      <p className="mt-1 text-xs text-ink-muted">Miqdorni tanlang</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {config.amounts.map((amt) => (
          <button
            key={amt}
            type="button"
            className="rounded-2xl border border-navy-border px-3 py-2.5 text-xs font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-teal/50 hover:text-accent-teal"
          >
            {amt}
          </button>
        ))}
      </div>
    </div>
  );
}
