import { useState, useCallback } from "react";
import PhoneFrame from "./blocks/PhoneFrame";
import BlockWrapper from "./blocks/BlockWrapper";
import AddBlockButton from "./blocks/AddBlockButton";
import AddBlockModal from "./blocks/AddBlockModal";
import { initialBlocks, createBlock, type Block, type BlockType } from "./blocks/types";

export default function App() {
  const [blocks, setBlocks] = useState<Block[]>(() => initialBlocks());
  const [modalOpen, setModalOpen] = useState(false);

  const addBlock = useCallback((type: BlockType) => {
    setBlocks((prev) => {
      const nextOrder = prev.length ? Math.max(...prev.map((b) => b.order)) + 1 : 0;
      return [...prev, createBlock(type, nextOrder)];
    });
  }, []);

  const deleteBlock = useCallback((id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <PhoneFrame>
        <div className="flex flex-col gap-5">
          {blocks.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-navy-border bg-navy-card/40 p-10 text-center">
              <p className="text-sm text-ink-muted">
                Sahifa bo'sh. Pastdagi "+" tugma orqali birinchi blokingizni
                qo'shing.
              </p>
            </div>
          ) : (
            blocks.map((block) => (
              <BlockWrapper key={block.id} block={block} onDelete={deleteBlock} />
            ))
          )}
        </div>
      </PhoneFrame>

      <AddBlockButton onClick={() => setModalOpen(true)} />
      <AddBlockModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addBlock}
      />
    </div>
  );
}
