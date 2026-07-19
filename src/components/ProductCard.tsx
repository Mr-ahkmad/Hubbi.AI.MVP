import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "../data/profile";

type Props = {
  service: ServiceItem;
};

export default function ProductCard({ service }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-navy-border bg-navy-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/40 hover:shadow-glow">
      {/* RASM: xizmat rasmi shu yerga */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent-purple/20 px-2.5 py-1 text-[11px] font-medium text-accent-purple ring-1 ring-accent-purple/30 backdrop-blur">
          Xizmat
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {service.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold text-accent-teal">
            {service.price}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-navy-border px-3 py-1.5 text-xs font-medium text-ink transition-all duration-200 hover:border-accent-teal/50 hover:text-accent-teal"
          >
            Batafsil
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
