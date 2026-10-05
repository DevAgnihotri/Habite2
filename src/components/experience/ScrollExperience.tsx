import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollStory } from "@/hooks/useScrollStory";
import { ProductCanvas } from "./ProductCanvas";
import { StoryCard } from "./StoryCard";
import { FlavourSelector } from "./FlavourSelector";

export function ScrollExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  useScrollStory(rootRef, reducedMotion);

  return (
    <section id="home" ref={rootRef} className={`scroll-experience ${reducedMotion ? "reduced" : ""}`}>
      <div className="story-stage">
        <div className="story-kicker">{content.brand.tagline}</div>
        <h1 className="story-title title-one">MAKE EVERY<br />BITE COUNT.</h1>
        <h2 className="story-title title-two">FIND YOUR<br />FLAVOUR</h2>
        <h2 className="story-title title-three">HAPPY<br />SNACKING</h2>
        <ProductCanvas reducedMotion={reducedMotion} />

        <StoryCard className="origin-card" label="ORIGIN">
          <p>{content.product.origin}</p>
        </StoryCard>
        <StoryCard className="moringa-card" label="MORINGA">
          <p>{content.product.moringa}</p>
        </StoryCard>
        <StoryCard className="nutrition-card" label="NUTRITION · PER 100 G (APPROX.)">
          <div className="nutrition-table">{content.product.nutrition.map(([item, value]) => <div key={item}><span>{item}</span><strong>{value}</strong></div>)}</div>
          <small>Sample data — verify before launch.</small>
        </StoryCard>

        <div className="flavour-panel"><FlavourSelector /></div>
        <div className="final-actions">
          <Button size="lg">Shop Now <ArrowRight /></Button>
          <Button size="lg" variant="outline">Partner with Ha Bite</Button>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown /></div>
        <span className="story-index">01 / 01</span>
      </div>
    </section>
  );
}