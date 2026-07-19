import { ArrowRight } from "lucide-react";

type Props = {
  label: string;
  href: string;
};

// Katta, ko'zga tashlanadigan CTA tugma — teal fonda.
export default function LinkButton({ label, href }: Props) {
  return (
    <section className="relative z-10 mx-auto mt-8 w-full max-w-5xl px-5">
      <a
        href={href}
        className="group mx-auto flex max-w-md items-center justify-center gap-2 rounded-2xl bg-accent-teal px-6 py-4 text-base font-semibold text-navy-base shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-teal/90 focus:outline-none focus:ring-2 focus:ring-accent-teal/60 focus:ring-offset-2 focus:ring-offset-navy-base"
      >
        {label}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </section>
  );
}
