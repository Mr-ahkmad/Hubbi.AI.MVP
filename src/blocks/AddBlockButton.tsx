import { Plus } from "lucide-react";

type Props = {
  onClick: () => void;
};

// Pastda markazda katta doira "+" tugma — mssg.me uslubida, HUBBI brendida.
export default function AddBlockButton({ onClick }: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        aria-label="Blok qo'shish"
        className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-teal text-navy-base shadow-glow transition-all duration-200 hover:scale-105 hover:bg-accent-teal/90 focus:outline-none focus:ring-4 focus:ring-accent-teal/30"
      >
        <Plus className="h-7 w-7" strokeWidth={2.5} />
      </button>
    </div>
  );
}
