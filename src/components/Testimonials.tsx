import { Star, Quote } from "lucide-react";
import type { Testimonial } from "../data/profile";

type Props = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: Props) {
  return (
    <section className="relative z-10 mx-auto mt-16 w-full max-w-5xl px-5">
      <h2 className="text-center font-serif text-2xl font-semibold text-ink sm:text-3xl">
        Mijozlar fikri
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="relative flex flex-col rounded-3xl border border-navy-border bg-navy-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/30"
          >
            <Quote className="absolute right-5 top-5 h-6 w-6 text-accent-teal/20" />

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < t.rating
                      ? "fill-accent-teal text-accent-teal"
                      : "text-navy-border"
                  }`}
                />
              ))}
            </div>

            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
              "{t.text}"
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-purple/15 text-sm font-semibold text-accent-purple ring-1 ring-accent-purple/30">
                {t.initials}
              </span>
              <span className="text-sm font-medium text-ink">{t.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
