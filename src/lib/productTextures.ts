import frontLabel from "@/assets/textures/label-front.webp.asset.json";
import backLabel from "@/assets/textures/label-back.webp.asset.json";

// Replace either URL here when final flat label artwork is supplied.
export const productTextures = {
  // Lovable-hosted asset URLs are unavailable on standalone Vercel deployments.
  // Set these to deployable paths when the final label files are added.
  front: frontLabel.url.startsWith("/__l5e/") ? undefined : frontLabel.url,
  back: backLabel.url.startsWith("/__l5e/") ? undefined : backLabel.url,
} as const;