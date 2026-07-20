import { useState, useRef, useEffect } from "react";
import { MoreVertical, Pencil, Copy, Trash2 } from "lucide-react";
import type { Block } from "./types";
import BlockRenderer from "./BlockRenderer";

type Props = {
  block: Block;
  onDelete: (id: string) => void;
};

// Hover'da uch nuqta menyu chiqaradi; "O'chirish" ishlaydi,
// "Tahrirlash" va "Nusxalash" hozir faqat ko'rinish uchun.
export default function BlockWrapper({ block, onDelete }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <div className="group relative animate-floatIn">
      <BlockRenderer block={block} />

      {/* Hover aksent ramka */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-200 group-hover:rounded-3xl group-hover:ring-accent-teal/30" />

      {/* Uch nuqta menyu tugmasi — hover'da ko'rinadi */}
      <div
        ref={menuRef}
        className="absolute right-2 top-2 z-20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <button
          type="button"
          aria-label="Blok amallari"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-border bg-navy-card/95 text-ink-muted backdrop-blur transition-colors hover:text-ink"
        >
          <MoreVertical className="h-4 w-4" />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-10 w-36 overflow-hidden rounded-2xl border border-navy-border bg-navy-card shadow-soft">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-xs text-ink-muted transition-colors hover:bg-navy-base hover:text-ink"
            >
              <Pencil className="h-3.5 w-3.5" />
              Tahrirlash
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-xs text-ink-muted transition-colors hover:bg-navy-base hover:text-ink"
            >
              <Copy className="h-3.5 w-3.5" />
              Nusxalash
            </button>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onDelete(block.id);
              }}
              className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-xs text-red-400 transition-colors hover:bg-navy-base hover:text-red-300"
            >
              <Trash2 className="h-3.5 w-3.5" />
              O'chirish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
