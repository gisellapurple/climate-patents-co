# Climate Patent Collective — Visual Design Brief

For Claude Code (or any agent or designer) implementing the site. All copy lives in `/copy/` as markdown. This brief covers the visual and interaction system that the copy gets dressed in.

---

## 1. Context

Climate Patent Collective is a patent agency built for climate tech founders. Founded by Alex Flake (ex-Fenwick & West) in 2022. The site replaces an aging Squarespace presence with a custom build.

Voice of the writing is founder-friendly, mission-forward, with a little edge. The visual system has to do the same work without leaning on any of the usual defaults.

The site has roughly 27 pages: homepage, about, 7 service pages, 11 industry pages, 5 case studies (plus overview), pricing, contact, and a partners/investors page.

---

## 2. Aesthetic position

The closest emotional reference is a well-designed editorial product. Magazine-like restraint. Considered typography. Generous whitespace. A single confident accent color. Intentional structure.

Sits closer to IDEO (editorial restraint, work as the star) than to Superside (modern SaaS polish).

The visual system needs to dodge three defaults at once:
- Law-firm cues (dark navy, marble columns, gold accents)
- Climate-startup cues (green-on-green, leaves, sunset photography)
- AI-coded SaaS cues (gradient meshes, blob backgrounds, glassmorphism)

### Reference sites

**ideo.com** — The primary aesthetic reference. Editorial restraint, generous whitespace, photography only where it earns its place, strong typography. The rotating-word hero treatment ("Human-centered design / breakthroughs / futures...") is something we're borrowing.

**pitchdeckcreators.com** — Take one specific move: the numbered chapter structure (1.0, 1.1, 2.0...) running down the page as the organizational skeleton. Translated for us as § 01, § 01.1, § 02. The dark-mode aesthetic and the brutalist edge of that site are not the direction.

**superside.com** — Acknowledged but not the direction. The polish of modern SaaS marketing is what we're trying to avoid.

---

## 3. Color system

```
Cream (background)              #FAF6EE
Near-black (text)               #1A1A1A
Burnt orange (accent)           #B85A2B
Sage green (topo lines only)    #5A6F50 @ 12–18% opacity
```

Burnt orange is the only accent. It carries primary CTAs, the rotating word in the hero, the "+" in stat numerals, link hovers, and section markers when they want to step forward.

Sage green appears in exactly one place: the topographic line work used as atmospheric background texture. It never touches type, CTAs, icons, or surface fills.

No other colors anywhere. Industry pages do not get their own colors. Case study pages do not get their own colors. The whole site is cream, near-black, and burnt orange. Restraint is the design system.

Dark mode is not part of v1. Stay light.

---

## 4. Typography system

```
Display    Tiempos Headline (paid)
           Fallback: Instrument Serif (Google Fonts) until license is in place

Body       Inter (Google Fonts)
Mono       JetBrains Mono (Google Fonts)
```

Two weights per face: regular (400) and medium (500). No bold (700+). The type does the work.

### Type scale (desktop, scales responsively down)

```
H1 hero          72–96px Tiempos      line-height 1.05    letter-spacing -0.02em
H1 page          48–56px Tiempos      line-height 1.1
H2               32–40px Tiempos      line-height 1.15
H3               22–26px Tiempos      line-height 1.2
Body large       18–19px Inter        line-height 1.55
Body             16px Inter           line-height 1.6
Body small       14px Inter           line-height 1.55
Mono label       11–12px JetBrains Mono   letter-spacing 0.01–0.02em
Stat numeral     56–80px Tiempos      line-height 1
```

### Treatment rules

- Display italics carry emphasis. The rotating word in the hero is italic. Occasional pull quotes use display italic.
- Monospace is reserved for section markers, technical labels, file dates, and stat captions. Never body copy.
- No all-caps treatment. Even monospace labels stay sentence case.
- Section markers always sit with a thin horizontal rule running off to the right of the label.

---

## 5. Visual language: lines

Lines are the only consistent visual element across the site. Two languages, used differently and never in the same composition.

### Engineering lines

Precise, single-weight (1–1.5px), geometric, near-black. Used for:
- Custom illustrations on industry pages (see §6)
- Editorial diagrams within case studies and service pages
- Section dividers and hairline rules at 0.5px

The aesthetic reference is not USPTO patent drawings. Those feel too literal and too DIY. Think contemporary editorial line illustration: Linear's marketing site, NYT explainer graphics, Stripe Climate brand work. Confident, technical, designed.

### Topographic lines

Organic, repeating, sage green at 12–18% opacity, hairline weight. Used for:
- Atmospheric background texture on the homepage hero
- The "For Investors & Accelerators" page
- The case studies overview page

Never on industry pages, service pages, or anywhere it would compete with engineering line illustrations.

Topographic lines should feel like contour lines on a topo map. Wavy, parallel-ish, varying amplitude. They should read as atmospheric texture, not as a featured element. If a visitor notices them, the opacity is too high.

---

## 6. Industry illustrations

Each industry page gets a custom engineering-line illustration of its dominant technology:

```
Energy storage              Battery cell stack in cross-section
Carbon capture              DAC contactor with sorbent flow
Solar                       Tandem solar cell in cross-section
Hydrogen                    Electrolyzer stack
Sustainable transportation  EV powertrain or charging connector
Sustainable agriculture     Precision ag sensor in soil profile
Sustainable aviation        SAF process flow or hydrogen turbine
Green buildings             Heat pump in section
Circular economy            Chemical recycling reactor
Geothermal                  EGS wellbore in geological section
Climate AI & software       Data flow as line diagram
```

Each illustration:
- Sits in the upper-right area of its industry page, sized substantially enough to anchor the page
- Single-weight near-black line on cream
- No fills, no color, no internal labels (the page title is the label)
- Stylized but recognizable to someone in the field

These are the most significant design investment in the project. For launch, commission the six priority industries first: energy storage, carbon capture, solar, hydrogen, sustainable agriculture, sustainable transportation. The remaining five industries can launch with no illustration and receive theirs in a v1.1 update.

These illustrations should be commissioned from a real illustrator who can do this work. Do not generate them with an AI image tool. The DIY tell would undercut the entire visual system.

---

## 7. Layout principles

- Generous whitespace by default. The site should breathe.
- Editorial composition. Asymmetry where it helps the content. Grids where they help. Neither for its own sake.
- Hairline dividers (0.5px) for section breaks, not heavier rules or background shifts.
- Section markers (`§ 01`, `§ 01.1`, `§ 02`) anchor major sections of the homepage and case study pages. Other pages use a single section marker at the top.
- Content max-width should respect readability. Body copy columns at 60–70 characters wide. Avoid full-bleed body text.
- Mobile is a careful responsive collapse. Sidebars stack, illustrations scale down, type drops to its responsive scale. No hamburger nightmares.

---

## 8. Specific design moves

### Section markers

Format: `§ 01 / climate tech, patented` in JetBrains Mono at 12px, near-black at 50% opacity, with a 0.5px hairline running off to the right. Used as the chapter device on the homepage and case study pages. Other pages use a single marker at the top introducing the page.

### Rotating word hero

The homepage H1 reads "Patents built for [X]." where X rotates through climate verticals. Words to cycle through:
- climate founders
- battery teams
- carbon companies
- hydrogen pioneers
- DAC engineers
- ocean tech teams

Cycle: roughly 3 seconds per word. Each word is italic burnt orange. Fade in / fade out, not slide.

### Stats bar

Sits directly under the hero on the homepage. A 0.5px hairline above and below. Format:

```
[Mono label]                     [Mono label]
Patents prosecuted               Climate startups served
100+ since 2023                  40+ and growing
```

Numerals in Tiempos at 56–72px. The "+" is burnt orange. Stat label in JetBrains Mono at 11px. Stat suffix ("since 2023", "and growing") in Inter at 13–14px.

### CTAs

Primary CTA: burnt orange fill (`#B85A2B`), cream text (`#FAF6EE`), squared rectangle with a 4px corner radius. Not a pill. The slight squareness reads more technical and editorial.

Secondary CTA: text link with a single right-arrow. No underline by default. A 0.5px hairline underline appears on hover.

Tertiary CTAs (within prose): underlined on hover only, burnt orange color shift.

### Logo treatment

Plain wordmark in Tiempos: "Climate Patent Collective." Propose two or three treatments at build time. Test a version with a hairline divider between "Patent" and "Collective" as a subtle mark. No icon mark unless one earns its place.

### Case study cards

On the homepage and the case studies index, cards are flat: cream background, 0.5px hairline border, no shadow, no fill. Card content is type and a small amount of metadata: sector, stage at engagement, outcome line. Hover state is a 1px burnt-orange hairline on the bottom edge of the card.

### Industry grid

On the industries overview page, industries appear as a grid of plain cards: industry name in Tiempos, one-line subhead in Inter, a small mono filing date or stat. Hover reveals a thin line that travels along the top edge of the card in burnt orange.

### Footer

Quiet. Tiempos logo, four columns of links in Inter at 14px, a copyright line, an email address. No social icons unless you want LinkedIn alone. No newsletter signup (we're not doing ongoing content).

---

## 9. Interactive principles

- Subtle animation. The rotating word in the hero is the largest piece of motion on the site.
- Stat counters can count up once when scrolled into view. Not on every page view.
- Section markers can fade in as the page scrolls past their anchor.
- Hover states are restrained: hairline appearances, slight color shifts, no transforms or scale effects.
- Page transitions are simple fades or no transition at all.

### Things to actively avoid

- Parallax of any kind
- Scroll-jacked sections
- Fade-in-on-scroll for every element
- Gradient meshes, blurry blob backgrounds
- Glassmorphism, neumorphism, frosted-glass effects
- 3D abstract shapes, isometric illustrations
- Lottie animations (they read AI-coded right now)
- Background videos
- Mouse-following cursor effects

---

## 10. Photography

Team portraits only, on the About page. Five portraits: Alex Flake, Mehrad Yaghmai, Robert Sachs, Danielle Dubno (and a fifth slot if needed).

Style direction:
- Editorial, not corporate
- Muted color or black-and-white
- Three-quarter or environmental framing, not centered headshots
- Neutral backgrounds: cream wall, concrete, wood, soft daylight
- The aesthetic reference is The New Yorker contributor portraits or Verve magazine staff photos

No other photography across the site. No climate stock imagery. No founder photos on case study pages. The client logos do that work.

---

## 11. Accessibility and performance

- WCAG AA contrast minimums. Burnt orange `#B85A2B` on cream `#FAF6EE` passes AA for large text. For body-size text on cream, use near-black `#1A1A1A`.
- Don't shrink type below 11px anywhere. Mono labels at 11–12px is the floor.
- All nav and CTAs keyboard-navigable. Focus states visible (a 1px burnt orange outline is fine).
- Lazy-load industry illustrations and team portraits.
- Aim for sub-second First Contentful Paint. The site is content-heavy but should feel fast.
- Reduce motion preferences respected. Users with `prefers-reduced-motion: reduce` get the rotating word as a static word (the first one in the cycle), and stat counters appear at their final value with no count-up.

---

## 12. Stack and implementation notes

The copy lives in `/copy/` as markdown. Recommended stack:

- **Astro** is the natural fit. Handles markdown content natively, supports the typography and motion needs, builds to static HTML, runs fast.
- **Next.js** also works if dynamic features are desired later.
- Avoid heavy SPA frameworks. There's no application logic here, just content.

### Fonts
Self-host where possible. Google Fonts with `font-display: swap` is acceptable. Tiempos requires a license. Ship with Instrument Serif as the fallback until the Tiempos license is in place. The site should never show a flash of unstyled text.

### Industry illustrations
Treat each as an SVG asset imported per page. The illustrations will be commissioned and delivered separately. Pages should gracefully launch without them and absorb them when they arrive.

### Hosting
Vercel, Netlify, or Cloudflare Pages. Static export is fine.

### Forms
Contact form goes to a single email address (`alex@climatepatents.co`) for now. Use a simple form service (Formspree, Web3Forms) rather than building a backend.

### Analytics
Plausible or Fathom. Not Google Analytics.

---

## 13. File and page structure

The copy directory mirrors the URL structure:

```
/copy/
  00-homepage.md
  01-about.md
  05-for-partners.md
  06-pricing.md
  07-contact.md
  services/
    00-overview.md          → /services
    01-patent-strategy.md   → /services/patent-strategy
    ...
  industries/
    00-overview.md          → /industries
    01-energy-storage.md    → /industries/energy-storage
    ...
  case-studies/
    00-overview.md          → /case-studies
    01-aquaporo.md          → /case-studies/aquaporo
    02-bikeon.md            → /case-studies/bikeon
    03-kawa.md              → /case-studies/kawa
    04-scaled-carbon.md     → /case-studies/scaled-carbon
    05-ulysses.md           → /case-studies/ulysses
    99-template.md          (reference template, not a public page)
```

Each markdown file contains the URL, meta title, meta description, and the page copy with section markers indicated. Translate those structural markers into real layout decisions during build.

---

## 14. What to avoid (the cliché list)

- Anything green except the topographic line work at sub-20% opacity
- Stock photography of windmills, solar farms at sunset, hands holding seedlings, polar bears, factories belching steam
- Gradient meshes, blurry blob backgrounds, glassmorphism, neumorphism
- 3D abstract shapes, isometric illustrations, geometric "innovation" graphics (lightbulbs, gears, infinity loops)
- Dark navy + gold palette (big law default)
- Bright primary green (every other climate brand)
- Pill-shaped CTAs (consumer SaaS default)
- AI-style hero illustrations
- Scroll-jacked sections, parallax effects, fade-in-on-scroll cascades
- Section dividers heavier than 0.5px
- Background video
- "Get a quote" calculator widgets
- Live chat bubbles
- Cookie banners that hijack the viewport. A small unobtrusive banner is fine if legally required.

---

## 15. Decisions still open

These are the things this brief doesn't resolve. Decide them during build by trying options:

- Exact logo treatment (test two or three)
- Exact spacing scale (an 8px grid is a sensible default)
- Mobile breakpoints (768px and 1024px is a sensible default)
- Exact hover-state details (the principles are above, the pixels can be felt out)
- Whether the contact page uses a calendar embed (Calendly, Cal.com) or a contact form. Default to a Cal.com embed.
- Whether the homepage rotating word includes a sixth option ("ocean tech teams" is currently included but optional)

---

This brief is the source of truth for the visual system. If implementation hits a wall not covered here, default to the quieter option. Restraint is the design system.
