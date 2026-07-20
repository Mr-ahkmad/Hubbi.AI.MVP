import type { Block } from "./types";
import ProfileBlock from "./ProfileBlock";
import SocialBlock from "./SocialBlock";
import LinkBlock from "./LinkBlock";
import ProductBlock from "./ProductBlock";
import DonationBlock from "./DonationBlock";
import TextBlock from "./TextBlock";
import GalleryBlock from "./GalleryBlock";

type Props = { block: Block };

// Blok turiga qarab tegishli komponentga render qiladi.
export default function BlockRenderer({ block }: Props) {
  switch (block.type) {
    case "profile":
      return <ProfileBlock config={block.config as any} />;
    case "social":
      return <SocialBlock config={block.config as any} />;
    case "link":
      return <LinkBlock config={block.config as any} />;
    case "product":
      return <ProductBlock config={block.config as any} />;
    case "donation":
      return <DonationBlock config={block.config as any} />;
    case "text":
      return <TextBlock config={block.config as any} />;
    case "gallery":
      return <GalleryBlock config={block.config as any} />;
    default:
      return null;
  }
}
