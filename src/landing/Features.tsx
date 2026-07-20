import { LayoutTemplate, MessagesSquare, ShoppingBag } from "lucide-react";

const features = [
  {
    Icon: LayoutTemplate,
    title: "Sayt yarating",
    text: "Matn yozing, AI sizga sayt quradi — bloklar bilan, kod bilmasdan.",
  },
  {
    Icon: MessagesSquare,
    title: "Xabarlarni boshqaring",
    text: "Barcha messenjer bitta joyda — Instagram, Telegram, WhatsApp.",
  },
  {
    Icon: ShoppingBag,
    title: "Soting",
    text: "Mahsulotingizni to'g'ridan-to'g'ri saytdan soting, to'lov bilan.",
  },
];

export default function Features() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16">
      <h2 className="text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Nima qiladi
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {features.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-navy-border bg-navy-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/30"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-teal/12 text-accent-teal ring-1 ring-accent-teal/25">
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
