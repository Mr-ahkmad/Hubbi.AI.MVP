import { Sparkles, Mail, Instagram, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  const socials = [
    { href: "#", label: "Instagram", Icon: Instagram },
    { href: "#", label: "Telegram", Icon: Send },
    { href: "#", label: "WhatsApp", Icon: MessageCircle },
  ];

  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-5 py-12">
      <div className="rounded-3xl border border-navy-border bg-navy-card p-8 shadow-soft">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Logo + tavsif */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent-teal/15 text-accent-teal ring-1 ring-accent-teal/30">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-serif text-lg font-semibold tracking-wide text-ink">
                HUBBI<span className="text-accent-teal">.AI</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Kichik biznes va bloggerlar uchun zamonaviy mini-sayt
              konstruktori. mssg.me o'rnini bosuvchi, lekin ancha kuchli.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-serif text-base font-semibold text-ink">
              Aloqa
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-teal" />
                <a
                  href="mailto:hello@hubbi.ai"
                  className="transition-colors hover:text-accent-teal"
                >
                  hello@hubbi.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Ijtimoiy */}
          <div>
            <h3 className="font-serif text-base font-semibold text-ink">
              Ijtimoiy tarmoqlar
            </h3>
            <div className="mt-3 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border bg-navy-base text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-teal/40 hover:text-accent-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-border pt-5 text-center text-xs text-ink-muted">
          © 2026 HUBBI AI. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
