import { content } from "@/config/content";

export function BrandIntro() {
  return (
    <section className="brand-intro" aria-label={content.brand.name}>
      <span className="brand-intro-mark">ह</span>
      <div className="brand-intro-name">
        HA BITE<span className="brand-intro-copyright">©</span>
      </div>
      <p className="brand-intro-tagline">{content.brand.tagline}</p>
    </section>
  );
}
