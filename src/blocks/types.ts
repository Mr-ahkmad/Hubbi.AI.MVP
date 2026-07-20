// HUBBI AI — Blok arxitekturasi data modeli (Bosqich B1)
// Hammasi shu sahifa ichki state'ida saqlanadi — baza hozir yo'q.

export type BlockType =
  | "profile"
  | "social"
  | "link"
  | "product"
  | "donation"
  | "text"
  | "gallery";

export type ProfileConfig = {
  avatar: string; // RASM: mijoz profil rasmi shu yerga
  name: string;
  bio: string;
};

export type SocialConfig = {
  instagram?: string;
  telegram?: string;
  whatsapp?: string;
};

export type LinkConfig = {
  label: string;
  href: string;
};

export type ProductConfig = {
  image: string; // RASM: mahsulot rasmi shu yerga
  title: string;
  price: string;
  description: string;
};

export type DonationConfig = {
  title: string;
  amounts: string[]; // ["10 000 so'm", "25 000 so'm", ...]
};

export type TextConfig = {
  content: string;
};

export type GalleryConfig = {
  images: string[]; // 2-4 ta rasm URL
};

export type BlockConfig =
  | ProfileConfig
  | SocialConfig
  | LinkConfig
  | ProductConfig
  | DonationConfig
  | TextConfig
  | GalleryConfig;

export interface Block {
  id: string;
  type: BlockType;
  order: number;
  config: BlockConfig;
}

// Yangi blok uchun demo-ma'lumot (placeholder) qaytaradi.
export function createBlock(type: BlockType, order: number): Block {
  const id = `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const base = { id, type, order };

  switch (type) {
    case "profile":
      return {
        ...base,
        config: {
          avatar:
            "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
          name: "Nозанин Beauty Salon",
          bio: "Toshkent, Chilonzor — soch, manikyur, kosmetologiya xizmatlari",
        } as ProfileConfig,
      };
    case "social":
      return {
        ...base,
        config: {
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          whatsapp: "https://wa.me/998901234567",
        } as SocialConfig,
      };
    case "link":
      return {
        ...base,
        config: {
          label: "Buyurtma berish",
          href: "#contact",
        } as LinkConfig,
      };
    case "product":
      return {
        ...base,
        config: {
          image:
            "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Soch turmagi",
          price: "150 000 so'm",
          description: "Model soch turmagi, bo'yash va stilist konsultatsiyasi.",
        } as ProductConfig,
      };
    case "donation":
      return {
        ...base,
        config: {
          title: "Meni qo'llab-quvvatlang",
          amounts: ["10 000 so'm", "25 000 so'm", "50 000 so'm"],
        } as DonationConfig,
      };
    case "text":
      return {
        ...base,
        config: {
          content:
            "Bu erkin matn bloki — portfolio, haqida yoki istalgan tavsif uchun foydalaning.",
        } as TextConfig,
      };
    case "gallery":
      return {
        ...base,
        config: {
          images: [
            "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
          ],
        } as GalleryConfig,
      };
  }
}

// Sahifa ochilganda ko'rinadigan boshlang'ich bloklar.
export function initialBlocks(): Block[] {
  return [
    { ...createBlock("profile", 0) },
    { ...createBlock("social", 1) },
    { ...createBlock("link", 2) },
  ];
}
