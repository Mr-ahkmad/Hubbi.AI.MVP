import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/oy",
    description: "Boshlash uchun",
    features: [
      "1 ta mini-sayt",
      "Asosiy bloklar (profil, link, social)",
      "HUBBI AI watermark",
      "Mobil ko'rinish",
    ],
    cta: "Bepul boshlash",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/oy",
    description: "Bloggerlar uchun",
    features: [
      "3 ta mini-sayt",
      "Barcha bloklar (product, gallery, donation)",
      "Watermark olib tashlanadi",
      "Maxsus URL (hubbi.ai/yourname)",
      "Statistika va tahlil",
    ],
    cta: "Pro ni tanlash",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$24",
    period: "/oy",
    description: "Biznes egalari uchun",
    features: [
      "Cheksiz mini-saytlar",
      "To'lov integratsiyasi (Click, Payme)",
      "Buyurtmalar boshqaruvi",
      "Avtomatik javob berish",
      "Maxsus domen ulash",
      "Prioritetli qo'llab-quvvatlash",
    ],
    cta: "Business ni tanlash",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16"
    >
      <h2 className="text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Narxlar
      </h2>
      <p className="mt-3 text-center text-sm text-ink-muted">
        O'zingizga mos rejani tanlang. Istalgan vaqtda bekor qiling.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              plan.highlighted
                ? "border-accent-teal/50 bg-navy-card shadow-glow"
                : "border-navy-border bg-navy-card hover:border-accent-teal/30"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-teal px-3 py-1 text-[11px] font-semibold text-navy-base">
                Mashhur
              </span>
            )}

            <h3 className="font-serif text-xl font-semibold text-ink">
              {plan.name}
            </h3>
            <p className="mt-1 text-xs text-ink-muted">{plan.description}</p>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-3xl font-semibold text-ink">
                {plan.price}
              </span>
              <span className="text-sm text-ink-muted">{plan.period}</span>
            </div>

            <ul className="mt-5 flex-1 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                plan.highlighted
                  ? "bg-accent-teal text-navy-base shadow-glow hover:bg-accent-teal/90"
                  : "border border-navy-border text-ink hover:border-accent-teal/50 hover:text-accent-teal"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
