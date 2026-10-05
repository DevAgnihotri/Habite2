import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return <section className="newsletter"><p className="eyebrow">THE GOOD STUFF, OCCASIONALLY</p><h2>JOIN THE<br />BITE CLUB.</h2><form onSubmit={(event) => event.preventDefault()}><label htmlFor="email">EMAIL ADDRESS</label><input id="email" type="email" placeholder="you@example.com" aria-label="Email address" /><Button type="submit" size="icon" aria-label="Join newsletter"><ArrowRight /></Button></form></section>;
}