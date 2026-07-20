import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-32 pb-20 text-center sm:pt-40">
      <div className="animate-floatIn">
        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-1.5 rounded-full border border-navy-border bg-navy-card/60 px-3 py-1 text-xs text-ink-muted backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent-teal" />
          <span>AI bilan mini-sayt konstruktori</span>
        </div>

        <h1 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          O'z mini-saytingizni{" "}
          <span className="text-accent-teal">10 soniyada</span> yarating
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Linktree o'rnini bosuvchi zamonaviy platforma — sochingizni
          boshqaring, soting va mijozlar bilan bog'laning, bitta joyda.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-2xl bg-accent-teal px-7 py-4 text-base font-semibold text-navy-base shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-teal/90"
          >
            Bepul boshlash
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-4 text-xs text-ink-muted sm:text-sm">
          1000+ biznes va blogger foydalanmoqda
        </p>
      </div>
    </section>
  );
}
