import { Instagram, Youtube } from "lucide-react";
import { content } from "@/config/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <Logo className="footer-logo" />
        <p className="footer-statement">MAKE EVERY<br />BITE COUNT.</p>
        <nav aria-label="Footer navigation">
          {content.navigation.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}
        </nav>
      </div>
      <div className="footer-meta">
        <span>{content.placeholders.fssai}</span>
        <span>© 2026 HA BITE</span>
        <div><a href="#instagram" aria-label="Instagram"><Instagram /></a><a href="#youtube" aria-label="YouTube"><Youtube /></a></div>
      </div>
    </footer>
  );
}