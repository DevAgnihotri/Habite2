import { content } from "@/config/content";

export function FlavourSelector() {
  return <div className="flavour-selector"><span className="flavour-active">{content.product.flavour}</span>{content.product.otherFlavours.map((item) => <span className="flavour-soon" key={item}>{item}</span>)}</div>;
}