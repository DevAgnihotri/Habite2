import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { MenuOverlay } from "./MenuOverlay";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="brand-marquee" aria-hidden="true">
        <div className="brand-marquee-track">
          {Array.from({ length: 2 }).map((_, copy) => (
            <span key={copy} className="brand-marquee-seq">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i}>
                  <strong>{content.brand.name} ©</strong>
                  <em>ह</em>
                  {content.brand.tagline}
                  <em>ह</em>
                  {content.brand.line}
                  <em>ह</em>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <header className="site-header">
        <a href="#home" className="site-mark">HA BITE ©</a>
        <span>{content.brand.volume}</span>
        <span>{content.brand.line}</span>
        <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}