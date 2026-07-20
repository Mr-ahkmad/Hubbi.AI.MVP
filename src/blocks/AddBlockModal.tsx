import { useEffect } from "react";
import { X } from "lucide-react";
import type { BlockType } from "./types";
import { blockOptions } from "./blockOptions";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (type: BlockType) => void;
};

// MARKAZIY MODAL — "Blok qo'shish"
export default function AddBlockModal({ open, onClose, onAdd }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Blok qo'shish"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-base/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal oynasi */}
      <div className="relative z-10 w-full max-w-md animate-floatIn rounded-3xl border border-navy-border bg-navy-card p-5 shadow-soft sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">
              Blok qo'shish
            </h2>
            <p className="mt-1 text-xs text-ink-muted">
              Saytingizni oddiy bloklar bilan yarating. Qo'shish uchun bosing.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Yopish"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {blockOptions.map(({ type, label, description, Icon }) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                onAdd(type);
                onClose();
              }}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-navy-border bg-navy-base/50 p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-teal/40 hover:bg-navy-base"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-teal/12 text-accent-teal ring-1 ring-accent-teal/25 transition-all duration-200 group-hover:bg-accent-teal/20">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium text-ink">{label}</span>
              <span className="text-[10px] leading-tight text-ink-muted">
                {description}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
