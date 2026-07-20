import { ArrowUpRight } from "lucide-react";

const examples = [
  {
    name: " Beauty Salon",
    type: "Go'zallik saloni",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "IELTS Pro Academy",
    type: "IELTS repetitor",
    image:
      "https://images.pexels.com/photos/5905705/pexels-photo-5905705.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Urban Style Store",
    type: "Kiyim do'koni",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Examples() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16">
      <h2 className="text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Namunalar
      </h2>
      <p className="mt-3 text-center text-sm text-ink-muted">
        HUBBI AI orqali yaratilgan haqiqiy mini-saytlar
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {examples.map((ex) => (
          <article
            key={ex.name}
            className="group overflow-hidden rounded-3xl border border-navy-border bg-navy-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/40 hover:shadow-glow"
          >
            {/* RASM: demo mini-sayt skrinshoti shu yerga */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={ex.image}
                alt={ex.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-accent-purple/20 px-2.5 py-1 text-[11px] font-medium text-accent-purple ring-1 ring-accent-purple/30 backdrop-blur">
                {ex.type}
              </span>
            </div>
            <div className="flex items-center justify-between p-5">
              <h3 className="font-serif text-lg font-semibold text-ink">
                {ex.name}
              </h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-all duration-200 group-hover:border-accent-teal/50 group-hover:text-accent-teal">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
