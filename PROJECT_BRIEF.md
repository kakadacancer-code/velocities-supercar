# 🏎️ PROJECT: VELOCITY — The Art of Supercars

## 1. Project Overview

Build a **premium, modern, cinematic, and highly interactive supercar website** called **VELOCITY**.

The website should showcase the world's most extraordinary supercars, explore their engineering, performance, design, history, and specifications, and deliver an unforgettable browsing experience.

**Design inspiration:**
- Lamborghini — Bold, aggressive automotive design.
- Porsche — Minimalism, precision, and elegance.
- Ferrari — Luxury, passion, and performance.
- McLaren — Futuristic design and advanced engineering.
- Awwwards-winning websites — Cinematic storytelling, creative layouts, and advanced interactions.

### Main Goal

Create a website that feels like a **$100,000 luxury automotive digital experience**, rather than a typical car dealership or basic car blog.

The website must be:

- Extremely clean and visually appealing.
- Modern, sophisticated, and luxurious.
- Responsive across desktop, tablet, and mobile.
- Smooth and satisfying to navigate.
- Rich in meaningful animations without being overwhelming.
- Professional with carefully selected typography.
- Fast, accessible, and optimized for performance.

---

# 2. Technology Stack

Build the website using:

- **React.js** — Component-based frontend.
- **Vite** — Development and build tool.
- **Tailwind CSS** — Styling and responsive layouts.
- **Motion for React (Framer Motion)** — Smooth animations.
- **GSAP** — Advanced scroll animations.
- **GSAP ScrollTrigger** — Scroll-based storytelling.
- **Lenis** — Smooth scrolling.
- **React Three Fiber / Three.js** — Optional interactive 3D car experiences.
- **Lucide React** — Minimal, consistent icons.
- **React Router** — Multi-page navigation.

Use JavaScript and JSX.

Do not use TypeScript.

Do not use Bootstrap.

Avoid unnecessary dependencies.

Write clean, reusable, maintainable components.

---

# 3. Design System

## Color Palette

Use a sophisticated luxury automotive palette.

### Main Colors

Background:
`#08090B` — Deep charcoal black.

Secondary background:
`#111317` — Premium dark gray.

Card background:
`#17191E` — Subtle elevated surfaces.

Primary text:
`#F5F5F3` — Soft white.

Secondary text:
`#97999F` — Muted gray.

Accent:
`#D4FF3F` — Electric lime.

Borders:
`rgba(255,255,255,0.10)`

### Color Rules

- Use black and charcoal as the dominant colors.
- Use white for primary text.
- Use electric lime only for important interactive elements.
- Avoid excessive gradients.
- Avoid colorful backgrounds.
- Use generous whitespace.
- Maintain strong contrast and visual hierarchy.

The overall appearance should feel expensive, refined, and timeless.

---

# 4. Typography — VERY IMPORTANT

Typography must be carefully designed.

Use Google Fonts.

## Recommended Font Combination

### Display Font

**Space Grotesk**

Use for:
- Hero headings.
- Major section titles.
- Car model names.
- Large performance numbers.

Font weights:
500, 600, 700.

### Body Font

**Inter**

Use for:
- Navigation.
- Paragraphs.
- Buttons.
- Specifications.
- Descriptions.
- Footer.

Font weights:
400, 500, 600.

### Technical Accent Font

**JetBrains Mono**

Use for:
- Performance statistics.
- Engine specifications.
- Small numerical labels.
- Car model identification.

Use this font sparingly.

## Font Sizes

Desktop:

| Element | Font size | Weight |
|---|---|---|
| Hero heading | 88–120px | 600 |
| Section heading | 52–72px | 600 |
| Card heading | 26–32px | 600 |
| Body text | 16–18px | 400 |
| Navigation | 13–14px | 500 |
| Buttons | 13–14px | 600 |
| Small labels | 11–12px | 500 |
| Performance numbers | 48–80px | 600 |

Mobile:

| Element | Font size |
|---|---|
| Hero heading | 44–58px |
| Section heading | 32–42px |
| Card heading | 22–26px |
| Body text | 15–16px |
| Navigation | 14px |
| Buttons | 13px |

## Typography Rules

- Use slightly negative letter spacing on large headings.
- Headings should have tight line height.
- Body paragraphs should have 1.6–1.8 line height.
- Use uppercase text only for small labels and navigation accents.
- Avoid using too many font weights.
- Limit each paragraph to a comfortable reading width.
- Maintain consistent typography throughout the website.
- Prefer clear, elegant text over decorative typography.

Example hero typography:

"BEYOND  
THE LIMITS."

Use oversized typography with carefully controlled spacing.

---

# 5. Website Pages

Create a complete multi-page website.

## PAGE 1 — HOME

### Section 1: Cinematic Fullscreen Hero

Create an impressive fullscreen hero with a stunning Lamborghini Aventador, Ferrari SF90, or McLaren supercar.

Layout:

- Full viewport height.
- Full-width supercar imagery or optimized background video.
- Dark overlay for text readability.
- Large headline aligned left or centered.
- Minimal navigation.
- Small premium label above the headline.

Hero content:

Eyebrow:
"THE WORLD OF EXOTIC MACHINES"

Main title:
"BEYOND THE LIMITS."

Description:
"Discover extraordinary engineering, iconic design, and the machines that redefine performance."

Buttons:
- EXPLORE SUPERCARS
- DISCOVER THE STORY

Bottom:
Animated scroll indicator.

### Hero Animations

- Cinematic fade-in on page load.
- Headline reveals line by line.
- Text moves upward with subtle opacity transitions.
- Car image slowly scales from 1.08 to 1.
- Background has subtle parallax movement.
- Buttons reveal after the headline.
- Scroll indicator loops smoothly.

Important:
The animation should feel premium and controlled, not exaggerated.

---

### Section 2: Introduction

Create a minimalist editorial section.

Small label:
"01 / INTRODUCTION"

Large heading:
"MORE THAN SPEED. A WAY OF LIFE."

Description explaining the passion behind supercars.

Layout:

Left:
Oversized heading.

Right:
Beautifully formatted description.

Below:
A cinematic supercar detail image.

Animations:

- Text reveal on scroll.
- Subtle image parallax.
- Fade and translate effects.
- Smooth section transitions.

Use generous whitespace.

---

### Section 3: Featured Supercars

Title:
"ICONS OF PERFORMANCE."

Subtitle:
"Explore extraordinary machines engineered without compromise."

Display 6 featured supercars:

1. Lamborghini Aventador SVJ
2. Ferrari SF90 Stradale
3. McLaren 765LT
4. Porsche 911 GT3 RS
5. Bugatti Chiron
6. Koenigsegg Jesko

Each card includes:

- High-quality car photograph.
- Brand.
- Model name.
- Horsepower.
- Top speed.
- 0–100 km/h acceleration.
- View Details button.

### Card Design

- Large landscape image.
- Minimal border.
- Dark background.
- Clean typography.
- Subtle information hierarchy.
- Beautiful spacing.

### Card Hover Animation

When hovering:

- Image slowly scales to 1.05.
- Card content moves slightly upward.
- Arrow icon translates diagonally.
- Image overlay darkens subtly.
- Border accent becomes visible.

Avoid excessive shadows.

---

### Section 4: Performance Showcase

Create a full-width cinematic section.

Featured car:
Lamborghini Aventador SVJ.

Large title:
"ENGINEERED TO DEFY."

Display:

- 770 HP
- 350+ KM/H
- 2.8 SEC — 0–100 KM/H
- 6.5L V12

Use large animated numbers.

Add a beautiful side-profile car image.

Animations:

- Scroll-triggered number counter.
- Image mask reveal.
- Text stagger animation.
- Gentle parallax background.

Use realistic, verified specifications for production content.

---

### Section 5: Automotive Storytelling

Create an editorial layout inspired by luxury magazines.

Title:
"THE ART OF AUTOMOTIVE ENGINEERING."

Use alternating image-and-text sections.

Topics:

- Aerodynamics.
- Carbon fiber construction.
- V12 engines.
- Hybrid technology.
- The evolution of supercars.

Each section should contain:

- Large cinematic image.
- Small category label.
- Strong editorial heading.
- Short educational explanation.
- Read More link.

Use elegant asymmetrical layouts.

---

### Section 6: Brands

Title:
"THE LEGENDS."

Create a minimal brand showcase featuring:

- Lamborghini
- Ferrari
- Porsche
- McLaren
- Bugatti
- Koenigsegg
- Pagani
- Aston Martin

Design:

- Clean brand typography.
- Large spacing.
- Minimal borders.
- Elegant grid or horizontal navigation.

On hover:
Reveal a corresponding car image with smooth motion.

---

### Section 7: Latest Stories

Title:
"FROM THE WORLD OF SUPERCARS."

Show three editorial articles.

Examples:

- The Evolution of Lamborghini's V12.
- Ferrari's Vision of Hybrid Performance.
- Why Aerodynamics Define Modern Supercars.

Each article card includes:

- Editorial image.
- Category.
- Title.
- Short description.
- Read Article link.

Maintain a clean magazine-style layout.

---

### Section 8: Final CTA

Full-width dark section.

Large heading:

"THE JOURNEY  
NEVER ENDS."

Description:
"Explore the machines that inspire the world."

CTA:
"EXPLORE THE COLLECTION"

Add subtle background imagery and cinematic transitions.

---

# 6. PAGE 2 — SUPERCAR COLLECTION

Build an elegant supercar catalog.

Features:

- Large page heading.
- Animated introduction.
- Responsive car grid.
- Search by brand or model.
- Filter by manufacturer.
- Filter by horsepower.
- Filter by vehicle category.
- Sort by name, horsepower, or top speed.

Categories:

- Supercars
- Hypercars
- Track-focused
- Hybrid
- Electric performance

Each car card should match the premium design system.

Use smooth filtering transitions.

Use a clean layout with no unnecessary UI elements.

---

# 7. PAGE 3 — CAR DETAILS

Create a premium immersive detail page for each car.

Example:
Lamborghini Aventador SVJ.

### Hero

- Fullscreen car image.
- Large model name.
- Manufacturer.
- Short description.

### Specifications

Display:

- Engine
- Horsepower
- Torque
- Top speed
- Acceleration
- Transmission
- Drivetrain
- Weight
- Production years

### Design Story

Describe the vehicle's exterior, aerodynamics, and interior.

### Image Gallery

- Beautiful high-resolution images.
- Smooth gallery transitions.
- Fullscreen image viewer.

### Performance Section

Use an elegant visual presentation of specifications.

### Related Cars

Show similar supercars.

### Animation

- Smooth image reveal.
- Scroll-based storytelling.
- Elegant number transitions.
- Optional interactive 3D model where actual 3D assets are available.

Do not fake interactive 3D functionality.

---

# 8. PAGE 4 — BRANDS

Create a luxurious manufacturer directory.

Each brand has:

- Brand name.
- Short introduction.
- Signature car image.
- Country of origin.
- Featured models.
- Explore Brand button.

Include detailed individual brand sections or pages.

Keep the layout clean and editorial.

---

# 9. PAGE 5 — STORIES

Create a modern automotive editorial publication.

Content categories:

- Engineering
- Automotive Design
- History
- Technology
- Performance
- Industry News

Features:

- Featured article.
- Article grid.
- Category filters.
- Full article pages.
- Related stories.

Make articles comfortable to read.

Use excellent paragraph spacing and typography.

---

# 10. PAGE 6 — ABOUT

Explain the purpose of VELOCITY.

Headline:
"BUILT FOR THE OBSESSION."

Content:

"VELOCITY celebrates the extraordinary world of supercars, where engineering, art, and ambition converge."

Include:

- Website mission.
- Passion for automotive culture.
- Editorial philosophy.
- Visual storytelling.

Use elegant photography and minimal layouts.

---

# 11. Navigation Design

Build a premium fixed navigation bar.

Desktop:

Left:
VELOCITY logo.

Center:
HOME | COLLECTION | BRANDS | STORIES | ABOUT

Right:
SEARCH ICON + EXPLORE BUTTON

Navigation style:

- Transparent over the hero.
- Changes to a dark translucent background on scroll.
- Subtle backdrop blur.
- Thin bottom border.
- Smooth transition between states.

Mobile:

- Minimal logo.
- Animated menu button.
- Fullscreen navigation overlay.
- Large readable navigation links.
- Smooth opening and closing animations.

Include clear active-page indicators.

---

# 12. Advanced Animation System

Animation quality is extremely important.

Use GSAP and Motion for React appropriately.

## Global Animations

### Smooth Scrolling

Implement smooth scrolling with Lenis.

Ensure compatibility with GSAP ScrollTrigger.

### Scroll Reveal

Sections should appear naturally as users scroll.

Use:

- Opacity transitions.
- Subtle upward movement.
- Text mask reveals.
- Image clipping reveals.

### Parallax

Apply subtle parallax to:

- Hero imagery.
- Featured car sections.
- Editorial photographs.
- Background layers.

Do not overuse parallax.

### Text Animations

Use:

- Line-by-line reveals.
- Staggered text entrances.
- Character animation only for major headlines.

### Image Animations

Use:

- Scale reveals.
- Clip-path transitions.
- Gentle parallax.
- Smooth hover zoom.

### Page Transitions

Include elegant page transitions:

- Short fade.
- Minimal upward movement.
- Smooth route changes.

Avoid long loading animations.

### Interactive Cursor

Optional on desktop:

- Minimal custom cursor.
- Slight expansion over interactive elements.
- Hide custom cursor on touch devices.

Preserve usability.

### Scroll Progress Indicator

Add a very thin progress line at the top of article pages.

---

# 13. Animation Timing

Use carefully controlled animation values.

Recommended timing:

- Button hover: 200–300ms.
- Card hover: 350–500ms.
- Section reveal: 600–900ms.
- Image reveal: 800–1200ms.
- Hero entrance: 1000–1500ms.
- Page transition: 300–500ms.

Recommended easing:

`cubic-bezier(0.22, 1, 0.36, 1)`

Use smooth, natural easing.

Avoid excessive bounce animations.

Support `prefers-reduced-motion`.

---

# 14. Layout and Spacing

Use a consistent spacing system.

Desktop container:
Maximum width 1440px.

Main content width:
1200–1320px.

Desktop horizontal padding:
48–80px.

Tablet horizontal padding:
32px.

Mobile horizontal padding:
20–24px.

Section vertical spacing:

Desktop:
120–160px.

Tablet:
80–100px.

Mobile:
64–80px.

Card gaps:
24–32px.

Important rules:

- Give content room to breathe.
- Do not overcrowd sections.
- Avoid tiny text.
- Align typography consistently.
- Keep navigation minimal.
- Maintain a strong visual hierarchy.
- Use consistent image aspect ratios.

---

# 15. Image and Video Direction

Use premium-quality automotive photography.

Image style:

- Cinematic lighting.
- Dark studio backgrounds.
- Dramatic landscape photography.
- Beautiful reflections.
- Sharp automotive details.
- Clean color grading.
- Professional compositions.

Use appropriate real supercar imagery.

Do not use random placeholder photographs unrelated to the cars.

Prefer legally usable images from reputable sources.

Optimize images with:

- WebP or AVIF where supported.
- Responsive image sizes.
- Lazy loading.
- Appropriate image compression.

For video:

- Muted autoplay.
- Plays inline.
- No audio.
- Optimized file size.
- Static image fallback.

Avoid loading unnecessarily large videos.

---

# 16. Responsive Design

The website must look excellent on:

- Large desktop screens.
- Standard laptops.
- Tablets.
- Mobile phones.

Mobile requirements:

- Responsive typography using CSS clamp().
- Clean single-column editorial layouts.
- Touch-friendly buttons.
- Optimized animations.
- No horizontal scrolling.
- Proper image cropping.
- Functional mobile navigation.
- Excellent readability.

Do not simply shrink the desktop layout.

Create intentional mobile compositions.

---

# 17. Performance Optimization

Performance must remain a priority.

Requirements:

- Lazy-load below-the-fold images.
- Code-split routes.
- Avoid unnecessary React re-renders.
- Use GPU-friendly animation properties.
- Avoid expensive scroll effects.
- Clean up GSAP animations properly.
- Prevent layout shifts.
- Use optimized media.
- Ensure smooth scrolling on supported devices.
- Disable expensive 3D effects on weaker devices when appropriate.

Aim for strong Lighthouse performance and accessibility scores.

---

# 18. Code Architecture

Organize the project professionally.

Suggested structure:

src/
- assets/
- components/
  - Navbar.jsx
  - Footer.jsx
  - Button.jsx
  - SectionHeading.jsx
  - CarCard.jsx
  - CarSpecs.jsx
  - AnimatedText.jsx
  - ScrollReveal.jsx
  - PageTransition.jsx
- pages/
  - Home.jsx
  - Collection.jsx
  - CarDetail.jsx
  - Brands.jsx
  - Stories.jsx
  - About.jsx
- sections/
  - HeroSection.jsx
  - FeaturedCars.jsx
  - PerformanceSection.jsx
  - BrandShowcase.jsx
  - EditorialSection.jsx
  - LatestStories.jsx
- data/
  - cars.js
  - brands.js
  - articles.js
- hooks/
  - useSmoothScroll.js
- App.jsx
- main.jsx
- index.css

Use reusable components.

Keep animations modular.

Store vehicle content in structured data files so the site can later connect to a backend API.

---

# 19. Important Design Restrictions

DO NOT:

- Use generic templates.
- Add excessive gradients.
- Use too many bright colors.
- Add unnecessary glassmorphism.
- Overuse rounded cards.
- Add large decorative shadows.
- Use distracting animations.
- Use inconsistent typography.
- Create overcrowded sections.
- Use emojis in the actual website UI.
- Add meaningless decorative elements.
- Sacrifice readability for visual effects.

DO:

- Focus on beautiful automotive imagery.
- Use oversized but balanced typography.
- Maintain generous whitespace.
- Create cinematic visual storytelling.
- Make every animation intentional.
- Ensure all interactions function properly.
- Keep the design cohesive.
- Make the website feel like a premium automotive brand.

---

# 20. Expected Final Result

Deliver a complete, functional, visually impressive React website.

The final experience should feel like a combination of:

**Lamborghini's boldness + Porsche's minimalism + Ferrari's passion + Awwwards-level motion design.**

It should be:

- 100% responsive.
- Professionally designed.
- Beautifully animated.
- Clean and easy to navigate.
- Premium and luxurious.
- Built with maintainable React code.

**Final instruction:**

Do not build a basic car listing website.

Create an immersive digital automotive experience where every image, transition, animation, font, and layout communicates precision, performance, and luxury.

Prioritize design quality, functionality, and attention to detail.