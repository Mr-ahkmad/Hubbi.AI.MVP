// Bitta demo mini-sayt uchun namuna kontent.
// Keyinchalik har bir mijoz uchun shu obyektni almashtirib ishlatiladi.

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string; // RASM: xizmat rasmi shu yerga (Pexels stock)
};

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating: number;
  initials: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string; // RASM: mijoz logotipi / profil rasmi shu yerga
  ctaLabel: string;
  ctaHref: string;
  location: string;
  hours: string;
  phone: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  services: ServiceItem[];
  testimonials: Testimonial[];
};

export const profile: Profile = {
  name: "Nозанин Beauty Salon",
  bio: "Toshkent, Chilonzor — soch, manikyur, kosmetologiya xizmatlari",
  avatar:
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
  ctaLabel: "Buyurtma berish",
  ctaHref: "#contact",
  location: "Toshkent, Chilonzor tumani",
  hours: "Har kuni 9:00–20:00",
  phone: "+998 90 123 45 67",
  instagram: "https://instagram.com",
  telegram: "https://t.me",
  whatsapp: "https://wa.me/998901234567",
  services: [
    {
      id: "hair",
      title: "Soch turmagi",
      description: "Model soch turmagi, bo'yash va stilist konsultatsiyasi.",
      price: "150 000 so'm",
      image:
        "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "manicure",
      title: "Manikyur",
      description: "Klassik va gel-lak manikyur, parlar bilan ishlov berish.",
      price: "80 000 so'm",
      image:
        "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "facial",
      title: "Yuz tozalash",
      description: "Chuqur yuz tozalash, namlovchi va tiriklantiruvchi parvarish.",
      price: "200 000 so'm",
      image:
        "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Malika Karimova",
      text: "Juda zo'r xizmat! Soch turmagim ajoyib chiqdi, usta diqqat bilan ishladi.",
      rating: 5,
      initials: "MK",
    },
    {
      id: "t2",
      name: "Dilnoza Yusupova",
      text: "Manikyur uchun minnatdorman — toza, tez va chiroyli. Tavsiya qilaman.",
      rating: 5,
      initials: "DY",
    },
    {
      id: "t3",
      name: "Gulnora Toshmatova",
      text: "Yuz tozalashdan keyin yuzim yumshoq va toza bo'ldi. Rahmat!",
      rating: 5,
      initials: "GT",
    },
  ],
};
