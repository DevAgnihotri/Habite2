import { MessageSquare } from "lucide-react";
import { content } from "@/config/content";

export function CustomerReviews() {
  return <section className="section reviews-section"><div className="section-label"><span>05</span> CUSTOMER REVIEWS</div><div className="empty-reviews"><MessageSquare /><h2>{content.placeholders.reviews}</h2><p>No made-up praise. Real reviews will appear here.</p></div></section>;
}