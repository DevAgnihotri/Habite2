import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import pack from "@/assets/brand/product-pack.webp.asset.json";
import { content } from "@/config/content";

export function FeaturedProduct() {
  return (
    <section id="shop" className="section featured-section">
      <div className="section-label"><span>01</span> FEATURED PRODUCT</div>
      <div className="featured-grid">
        <div className="product-image-wrap"><img src={pack.url} alt="Ha Bite Roasted Makhana Tikka and Moringa Fusion, 50 gram tube" /></div>
        <div className="product-copy">
          <p className="eyebrow">ROASTED MAKHANA · {content.product.weight}</p>
          <h2>{content.product.name}</h2>
          <p className="script">{content.product.flavour}</p>
          <p>{content.story}</p>
          <Button size="lg" title={content.placeholders.commerce}>Add to Cart <ShoppingBag /></Button>
          <small>{content.placeholders.commerce}</small>
        </div>
      </div>
    </section>
  );
}