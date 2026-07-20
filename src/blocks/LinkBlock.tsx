import { ArrowRight } from "lucide-react";
import type { LinkConfig } from "./types";

export default function LinkBlock({ config }: { config: LinkConfig }) {
  return (
    <a
      href={config.href}
      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-teal px-5 py-3.5 text-sm font-semibold text-navy-base shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-teal/90"
    >
      {config.label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
