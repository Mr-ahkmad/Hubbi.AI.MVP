import { Clock, ShieldCheck, BadgeCheck } from "lucide-react";

// "Nega biz" bo'limi — 3 ta qisqa ustunlik.
const reasons = [
  {
    Icon: Clock,
    title: "Tez javob beramiz",
    text: "So'rovlarga 15 daqiqadan kechiktirmay javob beramiz.",
  },
  {
    Icon: ShieldCheck,
    title: "Ishonchli to'lov",
    text: "Onlayn va naqd to'lov, aniq narx va hisob.",
  },
  {
    Icon: BadgeCheck,
    title: "Sifat kafolati",
    text: "Har bir xizmat sertifikatlangan mutaxassis tomonidan.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative z-10 mx-auto mt-16 w-full max-w-5xl px-5">
      <h2 className="text-center font-serif text-2xl font-semibold text-ink sm:text-3xl">
        Nega bizni tanlashadi
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {reasons.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-navy-border bg-navy-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/30"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-teal/12 text-accent-teal ring-1 ring-accent-teal/25">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
