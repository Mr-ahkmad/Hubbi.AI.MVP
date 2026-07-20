import { Instagram, Send, MessageCircle } from "lucide-react";
import type { SocialConfig } from "./types";

export default function SocialBlock({ config }: { config: SocialConfig }) {
  const items = [
    {
      href: config.instagram,
      label: "Instagram",
      Icon: Instagram,
      hover: "hover:text-pink-400 hover:border-pink-400/40",
    },
    {
      href: config.telegram,
      label: "Telegram",
      Icon: Send,
      hover: "hover:text-sky-400 hover:border-sky-400/40",
    },
    {
      href: config.whatsapp,
      label: "WhatsApp",
      Icon: MessageCircle,
      hover: "hover:text-emerald-400 hover:border-emerald-400/40",
    },
  ].filter((i) => i.href);

  return (
    <div className="flex items-center justify-center gap-3">
      {items.map(({ href, label, Icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-navy-border bg-navy-card text-ink-muted transition-all duration-200 hover:-translate-y-0.5 ${hover}`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
