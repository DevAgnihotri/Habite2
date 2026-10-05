import { useEffect, type RefObject } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const STORY_PROGRESS_EVENT = "ha-bite-story-progress";

export function useScrollStory(rootRef: RefObject<HTMLElement | null>, reducedMotion: boolean) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.35,
      onUpdate: ({ progress }) => {
        root.style.setProperty("--story-progress", String(progress));
        window.dispatchEvent(new CustomEvent(STORY_PROGRESS_EVENT, { detail: progress }));
      },
    });

    return () => {
      trigger.kill();
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, rootRef]);
}