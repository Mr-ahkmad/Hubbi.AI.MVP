import { PenTool, Store } from "lucide-react";

const audiences = [
  {
    Icon: PenTool,
    title: "Bloggerlar va ekspertlar",
    text: "Kontentingizni bitta havola orqali tarqating — ijtimoiy tarmoqlar, portfolio, hamkorlik va daromad bitta saytda.",
  },
  {
    Icon: Store,
    title: "Kichik biznes egalari",
    text: "Xizmatlaringizni ko'rsating, narxlarni joylashtiring va mijozlardan to'g'ridan-to'g'ri xabar va buyurtma oling.",
  },
];

export default function Audiences() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16">
      <h2 className="text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Kimlar uchun
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {audiences.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="flex gap-4 rounded-3xl border border-navy-border bg-navy-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/30"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-teal/12 text-accent-teal ring-1 ring-accent-teal/25">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
