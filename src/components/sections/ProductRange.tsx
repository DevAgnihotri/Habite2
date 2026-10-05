import { ArrowUpRight } from "lucide-react";
import pack from "@/assets/brand/product-pack.webp.asset.json";
import { content } from "@/config/content";

export function ProductRange() {
  return (
    <section className="section range-section">
      <div className="section-label"><span>03</span> EXPLORE OUR RANGE</div>
      <div className="range-head"><h2>ONE GOOD BITE.<br />MORE TO COME.</h2><p>Our first flavour leads the way. The next chapter is still roasting.</p></div>
      <article className="range-product"><img src={pack.url} alt="Ha Bite roasted makhana tube" /><div><span>01 / MAKHANA</span><h3>{content.product.flavour}</h3><p>{content.product.weight}</p></div><ArrowUpRight /></article>
      <div className="coming-strip"><span>MORE FLAVOURS</span><strong>COMING SOON</strong></div>
    </section>
  );
}