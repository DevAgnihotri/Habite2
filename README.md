# Ha Bite Launch

You are building PHASE 1 of the official website for "Ha Bite" (ह Bite), an emerging Indian
makhana snack brand. Read /reference/Ha_Bite_Brief.pdf first for brand rules, and watch
/reference/obsidian.mp4 – it is the EXACT interaction style I want. Study it frame by frame.
I have given u a logo image.
THE REFERENCE (what the video does):
- A massive bold sans-serif headline sits over a centred hero object at load. As the user
  scrolls, the headline fades to a faint ghost outline.
- The hero object ROTATES like a turntable, zooms in/out and pans, all scrubbed by scroll
  (not time-based).
- Small, dark rectangular info cards (tiny caps label + short paragraph) slide in at the
  left/right edges at different scroll points while the object turns.
- Mid-scroll, a second giant headline overlaps the object ("FIND YOUR ARTIST" in the video).
- Ultra-minimal fixed top bar: tiny caps text on the left, centre and right, plus a menu icon.
- Smooth inertial scrolling, light neutral background, lots of whitespace, premium feel.

OUR VERSION:
Hero object = the Ha Bite cylindrical snack tube ("Roasted Makhana – Tikka + Moringa Fusion",
50 g). Use /assets/box.jpeg for the label artwork (crop the front label and the back label
into separate textures; if I later supply flat label PNGs, they must drop in with a one-line
change). Build the tube in Three.js/react-three-fiber as a CylinderGeometry with a green lid,
a metal base rim, soft studio lighting and a subtle contact shadow. Map the front label to
the front half and the back label to the back half so a full 360° rotation shows both.
Do NOT use a generic stock model.

Background: warm cream (#F4EEDC) with very soft blurred green leaf shapes and a faint paper
grain, echoing the packaging photo. Dark info cards use deep green/charcoal with cream text.

SCROLL CHOREOGRAPHY (pin the canvas; scrub with GSAP ScrollTrigger + Lenis):
0%    Hero. Giant headline "MAKE EVERY BITE COUNT." in heavy condensed sans, charcoal, partly
      overlapping the tube (text in front of the lower half, behind the lid, so it feels
      layered). Small handwritten tagline "Small Bites. Big Goodness." Scroll cue.
10%   Headline fades to a ghost outline and slides up. Tube rotates ~90° and scales up.
      Card (right): label "ORIGIN" – 2 lines about roasted makhana (fox nut) as a light snack.
30%   Camera pushes toward the lid/top. Card (left): "MORINGA" – short text on the moringa blend.
50%   Tube has rotated to the back label. Card (right): "NUTRITION · PER 100 G (APPROX.)" with
      a neat table from the pack (energy, protein, carbs, fibre, fat, sodium). Mark as sample
      data to be verified.
65%   Giant second headline overlapping the tube: "FIND YOUR FLAVOUR". A flavour selector appears:
      Tikka + Moringa (active). Other flavours show as "Coming soon" ghost chips – don't
      invent real flavours or prices.
80%   Tube returns to front, centres, headline "HAPPY SNACKING" ghosted behind it, with a
      primary "Shop Now" button (deep green, golden hover) and a secondary "Partner with Ha Bite".
100%  Unpin and transition into normal-flow sections (below).

HEADER (fixed, tiny caps, letter-spaced, like the video):
 left "HA BITE ©" | centre "VOLUME 01 – MAKHANA" | right "SMALL BITES & BIG GOODNESS" | menu icon
 Use the logo (/assets/logo.jpeg, proportions unchanged, no TM) in the menu overlay and footer.
 Menu overlay: Home, Shop, About Us, Partner with Ha Bite, Contact – full-screen cream panel.

SECTIONS AFTER THE PINNED HERO (normal scroll, restrained motion, fade/translate only):
 1. Featured Product card (tube image, name, net weight, "Add to Cart" visual only for now)
 2. Why Ha Bite – 4 icon points from the pack: Rich in Moringa Nutrients, High Protein,
    No Preservatives, Gluten Free
 3. Explore Our Range (single product + "more coming soon")
 4. Brand Story (use only text from the brief; do NOT invent founder details)
 5. Customer Reviews – an empty-state placeholder component, no fake reviews
 6. Newsletter sign-up
 7. Footer with logo, links, social icons, FSSAI placeholder "[FSSAI No. – to be added]"
 Floating WhatsApp button with a placeholder number constant in one config file.

DESIGN SYSTEM:
 Palette: deep green #1F4A1E, cream #F4EEDC, golden yellow #E2B23A, charcoal #1C1C1A.
 Fonts: heavy condensed grotesk for headlines (e.g. Anton or Archivo Black), clean sans for body
 (Inter), a handwritten accent (e.g. Caveat) for taglines, and Noto Serif Devanagari for the "ह".
 Clean, youthful, modern Indian snack brand. No clutter, no stock imagery.

PERFORMANCE & QUALITY:
 - Mobile-first (Android + iPhone). On small screens simplify: smaller headline, cards become
   bottom sheets, reduce shadow/post-processing cost.
 - Lazy-load the 3D canvas, compress textures (WebP), target 60fps, Lighthouse perf > 85 on mobile.
 - Respect prefers-reduced-motion: show a static tube and stacked cards instead of scrubbing.
 - Show a lightweight loader with the logo while textures load.

RULES:
 Never add a TM symbol. Never invent prices, certifications, reviews, founder info or health
 claims; use clearly labelled placeholders in one /config/content.ts file.

PROCESS:
 1) First produce a short implementation plan and the component/file structure, and wait
    for my approval. 2) Then build. 3) Run the app in the browser, record a short walkthrough
    scrolling top to bottom on desktop AND a mobile viewport, and list anything that doesn't
    match the reference video.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/535c303b-ef73-4214-b447-4ab5c2a23dd9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
