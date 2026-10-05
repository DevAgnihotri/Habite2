import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { Logo } from "./Logo";

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-top">
        <Logo className="menu-logo" />
        <Button variant="ghost" size="icon" aria-label="Close menu" onClick={onClose}>
          <X />
        </Button>
      </div>
      <nav aria-label="Main navigation">
        {content.navigation.map((item, index) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={onClose}>
            <span>0{index + 1}</span>{item}
          </a>
        ))}
      </nav>
      <p>{content.brand.tagline}</p>
    </div>
  );
}