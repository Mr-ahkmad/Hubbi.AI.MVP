import { MapPin } from "lucide-react";
import type { Profile } from "../data/profile";
import SocialBar from "./SocialBar";

type Props = { profile: Profile };

export default function ProfileCard({ profile }: Props) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-10 text-center sm:pt-14">
      <div className="animate-floatIn">
        {/* RASM: mijoz profil rasmi / logotipi shu yerga */}
        <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-navy-border shadow-glow sm:h-32 sm:w-32">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <h1 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {profile.name}
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
          {profile.bio}
        </p>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-muted">
          <MapPin className="h-3.5 w-3.5 text-accent-teal" />
          <span>{profile.location}</span>
        </div>

        <div className="mt-5 flex justify-center">
          <SocialBar
            instagram={profile.instagram}
            telegram={profile.telegram}
            whatsapp={profile.whatsapp}
          />
        </div>
      </div>
    </section>
  );
}
