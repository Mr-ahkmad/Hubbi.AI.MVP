import type { TextConfig } from "./types";

export default function TextBlock({ config }: { config: TextConfig }) {
  return (
    <div className="rounded-3xl border border-navy-border bg-navy-card p-5 shadow-soft">
      <p className="text-sm leading-relaxed text-ink">{config.content}</p>
    </div>
  );
}
