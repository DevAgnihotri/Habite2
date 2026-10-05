import { content } from "@/config/content";

export function BrandStory() {
  return (
    <section id="about-us" className="section story-section">
      <div className="section-label"><span>04</span> BRAND STORY</div>
      <div className="story-layout"><p className="script">Small bites.<br />Big goodness.</p><h2>{content.story}</h2></div>
    </section>
  );
}