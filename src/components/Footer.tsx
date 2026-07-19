import { Phone, Clock, MapPin, Sparkles } from "lucide-react";
import type { Profile } from "../data/profile";

type Props = { profile: Profile };

export default function Footer({ profile }: Props) {
  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto mt-20 w-full max-w-5xl px-5 pb-10"
    >
      <div className="rounded-3xl border border-navy-border bg-navy-card p-6 shadow-soft sm:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              Aloqa
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-teal" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-teal" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              Ish vaqti
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
              <Clock className="h-4 w-4 text-accent-teal" />
              {profile.hours}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              Ijtimoiy
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent-teal"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent-teal"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent-teal"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Watermark — Free tarif uchun */}
        <div className="mt-8 flex items-center justify-center gap-1.5 border-t border-navy-border pt-5 text-xs text-ink-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent-teal/70" />
          <span>HUBBI AI orqali yaratilgan</span>
        </div>
      </div>
    </footer>
  );
}
