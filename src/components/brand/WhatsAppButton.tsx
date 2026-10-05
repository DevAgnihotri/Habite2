import { MessageCircle } from "lucide-react";
import { content } from "@/config/content";

export function WhatsAppButton() {
  return (
    <a className="whatsapp" href={`https://wa.me/${content.placeholders.whatsappNumber}`} aria-label="Chat with Ha Bite on WhatsApp" target="_blank" rel="noreferrer">
      <MessageCircle />
    </a>
  );
}