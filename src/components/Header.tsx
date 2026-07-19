import { Sparkles } from "lucide-react";

// HUBBI AI brend watermark — Free tarif uchun kichik belgi.
export default function Header() {
  return (
    <header className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-6 sm:pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent-teal/15 text-accent-teal ring-1 ring-accent-teal/30">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide text-ink">
            HUBBI<span className="text-accent-teal">.AI</span>
          </span>
        </div>
        <span className="rounded-full border border-navy-border px-3 py-1 text-xs text-ink-muted">
          Demo
        </span>
      </div>
    </header>
  );
}
