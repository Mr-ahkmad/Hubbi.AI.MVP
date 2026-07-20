import { Sparkles } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-navy-border/60 bg-navy-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent-teal/15 text-accent-teal ring-1 ring-accent-teal/30">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide text-ink">
            HUBBI<span className="text-accent-teal">.AI</span>
          </span>
        </a>

        {/* O'ng havolalar */}
        <div className="flex items-center gap-2 sm:gap-5">
          <a
            href="#pricing"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:inline"
          >
            Narxlar
          </a>
          <a
            href="#"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Kirish
          </a>
          <a
            href="#"
            className="rounded-full bg-accent-teal px-4 py-2 text-sm font-semibold text-navy-base shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-teal/90"
          >
            Bepul boshlash
          </a>
        </div>
      </div>
    </nav>
  );
}
