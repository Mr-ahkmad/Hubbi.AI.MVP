import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

type Props = { children: ReactNode };

// Telefon ko'rinishidagi ramka — butun builder ekrani markazda.
export default function PhoneFrame({ children }: Props) {
  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center">
      {/* Yuqori brend belgi */}
      <div className="w-full max-w-5xl px-5 pt-5">
        <div className="flex items-center justify-center gap-2 text-xs text-ink-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent-teal/70" />
          <span>
            HUBBI<span className="text-accent-teal">.AI</span> Builder — Demo
          </span>
        </div>
      </div>

      {/* Telefon ramkasi */}
      <div className="relative mt-5 w-full max-w-[420px] flex-1">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-navy-border bg-navy-base shadow-soft">
          {/* Notch */}
          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-navy-border" />

          {/* Sahifa kontenti — scrolllanadigan */}
          <div className="max-h-[calc(100vh-220px)] min-h-[60vh] overflow-y-auto px-5 pb-28 pt-5">
            {children}
          </div>
        </div>
      </div>

      {/* Pastki bo'shliq — "+" tugma uchun */}
      <div className="h-24 w-full" />
    </div>
  );
}
