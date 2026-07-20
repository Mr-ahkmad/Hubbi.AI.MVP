import {
  User,
  Share2,
  Link as LinkIcon,
  ShoppingBag,
  Heart,
  Type,
  Images,
  type LucideIcon,
} from "lucide-react";
import type { BlockType } from "./types";

export type BlockOption = {
  type: BlockType;
  label: string;
  description: string;
  Icon: LucideIcon;
};

// "Blok qo'shish" modalidagi 7 ta variant.
export const blockOptions: BlockOption[] = [
  {
    type: "profile",
    label: "Profil",
    description: "Rasm, ism, bio",
    Icon: User,
  },
  {
    type: "social",
    label: "Ijtimoiy",
    description: "Instagram, TG, WA",
    Icon: Share2,
  },
  {
    type: "link",
    label: "Havola",
    description: "Tugma-havola",
    Icon: LinkIcon,
  },
  {
    type: "product",
    label: "Mahsulot",
    description: "Rasm, narx, tavsif",
    Icon: ShoppingBag,
  },
  {
    type: "donation",
    label: "Donation",
    description: "Qo'llab-quvvatlash",
    Icon: Heart,
  },
  {
    type: "text",
    label: "Matn",
    description: "Erkin matn bloki",
    Icon: Type,
  },
  {
    type: "gallery",
    label: "Galereya",
    description: "2-4 ta rasm grid",
    Icon: Images,
  },
];
