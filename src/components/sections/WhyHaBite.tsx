import { Leaf, ShieldCheck, Sparkles, WheatOff } from "lucide-react";
import { content } from "@/config/content";

const icons = { leaf: Leaf, spark: Sparkles, shield: ShieldCheck, grain: WheatOff };

export function WhyHaBite() {
  return (
    <section className="section why-section">
      <div className="section-label"><span>02</span> WHY HA BITE</div>
      <h2>GOODNESS IN<br />EVERY BITE.</h2>
      <div className="benefit-grid">{content.product.benefits.map(([icon, label]) => { const Icon = icons[icon]; return <div className="benefit" key={label}><Icon /><span>{label}</span></div>; })}</div>
    </section>
  );
}