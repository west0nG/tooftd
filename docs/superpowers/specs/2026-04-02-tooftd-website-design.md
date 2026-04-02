# TOOFTD Product Website — Design Spec

## Overview

A single-page, mobile-first product website for **TOOFTD**, a modular seating rug system designed by the ACAD-445 Designing Products III team at USC (Spring 2026). The site serves two audiences: **customers/general public** and **investors**.

**Tech stack:** React + Vite, deployed to GitHub Pages (public repo).

**Design system:** "Organic Minimal" — warm whites, green gradient palette, Playfair Display + DM Sans typography, generous whitespace, organic shapes reflecting the product's terrain-like nature.

---

## Color Palette

| Token        | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| `--moss`    | `#4a6741` | Primary brand, CTAs, accents |
| `--sage`    | `#7a9a6d` | Secondary green, eyebrows    |
| `--leaf`    | `#8bc34a` | Highlights, chart accents    |
| `--cream`   | `#faf8f4` | Page background              |
| `--warm-white` | `#f5f1eb` | Card backgrounds, alternating sections |
| `--sand`    | `#e8e0d4` | Borders, dividers, subtle fills |
| `--bark`    | `#2d2a26` | Primary text, dark sections  |
| `--stone`   | `#9a9590` | Secondary text               |
| `--fog`     | `rgba(74,103,65,0.06)` | Subtle green tint backgrounds |

## Typography

- **Headlines:** Playfair Display (serif) — 400/700 weight, italic for emphasis words
- **Body & UI:** DM Sans — 300/400/500/600 weight
- **Eyebrows:** DM Sans 500, 9px, letter-spacing 4px, uppercase
- **Scale:** Mobile base 13px body, Desktop base 14px body. Headlines scale from 28px (mobile) to 48px (desktop).

## Responsive Breakpoints

| Name    | Width    | Target        |
|---------|----------|---------------|
| Mobile  | < 768px  | Phone         |
| Tablet  | 768–1024px | Tablet       |
| Desktop | > 1024px | Monitor       |

---

## Site Structure (Single Page, 7 Sections)

### Section 1: Hero + Navigation

**Navigation:**
- Sticky top bar with `TOOFTD` logo (left) and section links (right)
- Mobile: hamburger menu with slide-out drawer
- Desktop: inline links with active section underline indicator (updates on scroll via Intersection Observer)
- Smooth scroll to anchored sections on click

**Hero content:**
- Eyebrow: "The Future of Gathering"
- Headline: "Where comfort meets *connection*" (italic emphasis on key word, in green)
- Subtitle: one-sentence product description
- Product visual: CSS mound silhouettes as placeholder (replaced with product photography when available)
- Mounds have subtle float animation (4s ease-in-out infinite, staggered delays)
- Two CTAs: "Explore" (primary, solid moss) and "Investors" (secondary, outlined)
- Scroll indicator at bottom with pulse animation

**Desktop variant:**
- Two-column grid: text left, terrain visual right
- Organic SVG wave divider between columns
- Stats bar below hero: ∞ Configurations / 6–12 People / 100% Modular / 2026 Launch

**Mobile variant:**
- Single column, centered text
- Terrain visual below CTAs
- Stats bar omitted (shown in product section instead)

### Section 2: Product

**Sub-sections:**

1. **Product intro** — centered eyebrow + title ("A landscape for *living*") + description
2. **Product hero image** — large placeholder (dashed border) for main product photography
3. **Feature grid** — 3 cards separated by 1px dividers:
   - Modular (rearrangeable mounds)
   - 6–12 People (group seating capacity)
   - 3-Layer Build (shaggy carpet / foam / rubber grip)
   - Desktop: 3-column grid; Mobile: vertical list with icon left, text right
4. **Materials breakdown** — two-column layout:
   - Left: layered cross-section diagram showing the 3 material layers with color swatches
   - Right: text description of construction
   - Mobile: stacks vertically, diagram on top
5. **Product configurator** (localStorage feature) — see Interactive Features section below

### Section 3: Market & Competitive Analysis

**Sub-sections:**

1. **Intro** — "A market ready for *disruption*"
2. **Opportunity matrices** — two side-by-side scatter plots (from the ACAD-445 document):
   - Matrix 1: Congestion vs Capacity (Individual → Multi-Person)
   - Matrix 2: Convention vs Versatility (Single Use → Versatile)
   - TOOFTD plotted in the optimal corner with glowing green dot
   - Competitors plotted as neutral dots with labels
   - Mobile: matrices stack vertically
3. **Competitor cards** — 3-column grid showing competing products:
   - Photo placeholder, product name, MSRP, description, category tag
   - Competitors from PDF: Gathre Floor Cushion ($120), West Elm Futon ($1,440-1,899), BB&B Bean Bag ($80), plus others as needed
   - Mobile: horizontal scroll
4. **Radar chart** (Chart.js) — see Interactive Features section below

### Section 4: Invest

**Sub-sections:**

1. **Pitch banner** — dark background (`--bark`) with radial green gradient overlay:
   - "Invest in the future of *gathering*"
   - 4-stat grid: Target Raise / Projected ROI / Unit MSRP / Year 1 Units (all placeholder XX values)
   - Mobile: 2×2 stat grid
2. **Business Model Canvas** — classic BMC grid layout:
   - 9 blocks: Key Partners, Key Activities, Value Proposition, Customer Relations, Customer Segments, Key Resources, Channels, Cost Structure, Revenue Streams
   - All content is placeholder to be filled by product team
   - Mobile: collapses to accordion (tap to expand each block)
3. **Financial charts** (Chart.js) — see Interactive Features section below
4. **Pro forma table** — financial projections Y1-Y5:
   - Rows: Units Sold, Revenue, COGS, Gross Margin, Net Profit
   - Green for positive values, red for losses
   - All numbers placeholder
   - Mobile: horizontal scroll wrapper

### Section 5: Behind the Scenes / Story

**Sub-sections:**

1. **Timeline** — vertical timeline with green gradient line on left:
   - Phase 1: Research — problem identification
   - Phase 2: Ideation — initial concepts (carpet, mounds, grids)
   - Phase 3: Iteration — mound mapping & 3D renders
   - Phase 4: Materials — construction research (foam vs sand)
   - Phase 5: Prototype — lo-fi prototype with scrap material
   - Each phase: eyebrow label, title, description, 2-3 photo placeholders
   - Content derived from the ACAD-445 PDF
   - Mobile: left-aligned single column, narrower photos
2. **Photo gallery** (interactive) — see Interactive Features section below

### Section 6: Product Team

- Warm background (`--warm-white`) to differentiate from adjacent sections
- "Meet the *team*" — centered heading
- 5-member grid (from PDF): Clarence, Laila, Badria, Ben F., Anika M.
- Each card: circular photo placeholder (initial letter), name, role, 2-sentence bio
- All bio content is placeholder
- Desktop: 5-column grid; Mobile: 2-column grid (last card centered)

### Section 7: Website Dev Team

- Light background (`--cream`)
- "The *website* team" — centered heading
- 4-member card grid with hover lift effect
- Each card: circular photo, name, role tag badge, bulleted task list showing what they contributed
- Role tags: Lead Dev, Design & CSS, Content & UX, Business & Data (placeholders)
- Task lists are specific per person (e.g., "React architecture", "Responsive layouts", "Financial data viz")
- Desktop: 4-column; Mobile: single column

### Footer

- Dark background (`--bark`), matching investor pitch section
- TOOFTD logo
- Section anchor links
- Course attribution: "ACAD-445 · Designing Products III · Spring 2026 · USC"

---

## Interactive Features

### 1. Product Configurator (localStorage)

**Location:** Section 2 (Product), sub-section 5

**Functionality:**
- **Rug size selector:** S (4×4'), M (6×6'), L (8×8') — button group, one active
- **Color selector:** 4 swatches (Moss, Sage, Olive, Cream) — circular, active has border + scale
- **Mound count slider:** range input, 2–8, displays current value
- **Live preview canvas:** CSS-rendered mound shapes that update reactively:
  - Number of mounds matches slider value
  - Mound colors match selected swatch
  - Canvas size scales with rug size selection
  - Label updates: "M · MOSS · 4 MOUNDS"
- **Save button:** writes `{ size, color, moundCount }` to `localStorage` key `tooftd-config`
- **Persistence:** on page load, reads localStorage and restores saved configuration
- **"Saved to your browser" message** confirms the save action

**Implementation:** React state + useEffect for localStorage read/write. CSS shapes for mound rendering (no canvas/WebGL needed).

### 2. Competitive Radar Chart (Chart.js)

**Location:** Section 3 (Market)

**Chart type:** Radar chart via Chart.js
**Axes:** Modularity, Capacity, Price Value, Aesthetics, Versatility (5 dimensions)
**Datasets:**
- TOOFTD (filled green polygon, `--moss` with alpha)
- Competitor Average (dashed outline, `--sand`)
**Interaction:** Hover shows dimension scores in tooltip
**Styling:** Custom Chart.js options to match the site's design system (green tones, DM Sans font, cream background)

### 3. Financial Charts (Chart.js)

**Location:** Section 4 (Invest)

**Chart A — Revenue vs Cost:**
- Type: grouped bar chart
- X-axis: Year 1–5
- Two bar series: Revenue (moss green) and Cost (sand)
- Hover tooltips with formatted currency values
- All data is placeholder

**Chart B — Profit Margin Trend:**
- Type: line chart with area fill
- X-axis: Year 1–5
- Single line with data points (circles)
- Area fill with moss green at 8% opacity
- Hover shows percentage value

### 4. Photo Gallery

**Location:** Section 5 (Story)

**Layout:** Masonry-style CSS grid:
- 1 large featured image (2×2 span)
- 4-5 smaller images filling remaining grid cells
- Mobile: 2-column grid, no spanning

**Interaction:**
- Click any image → lightbox overlay (dark backdrop, centered image, close button)
- Lightbox: left/right arrows to navigate between photos
- Mobile: swipe gesture support in lightbox
- Dot pagination if multiple gallery pages

**Implementation:** React component with state for active image and lightbox visibility. CSS Grid for layout. No external gallery plugin — custom built to match the site's design system.

---

## Technical Architecture

```
tooftd-website/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── images/           # Product photos, team photos (placeholders)
├── src/
│   ├── main.jsx
│   ├── App.jsx           # Single page, all sections composed here
│   ├── styles/
│   │   └── global.css    # CSS variables, reset, typography, shared styles
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky nav with scroll spy
│   │   ├── Hero.jsx
│   │   ├── Product.jsx
│   │   ├── Configurator.jsx   # Product configurator with localStorage
│   │   ├── Market.jsx
│   │   ├── RadarChart.jsx     # Chart.js radar wrapper
│   │   ├── Invest.jsx
│   │   ├── FinancialCharts.jsx # Chart.js bar + line wrapper
│   │   ├── Story.jsx          # Timeline + gallery
│   │   ├── Gallery.jsx        # Photo gallery with lightbox
│   │   ├── ProductTeam.jsx
│   │   ├── DevTeam.jsx
│   │   └── Footer.jsx
│   └── data/
│       ├── competitors.js     # Competitor data for market section
│       ├── financials.js      # Placeholder financial data for charts
│       ├── team.js            # Team member data (both teams)
│       └── timeline.js        # Behind-the-scenes timeline data
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-02-tooftd-website-design.md
```

**Dependencies:**
- `react` + `react-dom`
- `chart.js` + `react-chartjs-2` — for radar and financial charts
- No other external dependencies. CSS-only animations, custom gallery, custom configurator.

**Key technical decisions:**
- **No router** — single page with anchor sections. `react-router` would be unnecessary overhead.
- **Intersection Observer** for scroll spy — native API, lightweight, updates active nav link as user scrolls.
- **CSS Grid + Flexbox** for all layouts — no CSS framework (Tailwind, Bootstrap). Custom CSS matches the design system exactly.
- **CSS variables** for the full color palette — enables easy theming and consistency.
- **Data files** separate from components — all placeholder content (team bios, financial numbers, competitor info) lives in `src/data/` for easy updates when the product team provides real content.

---

## Deployment

- GitHub Pages via `vite build` → `dist/` folder
- Public GitHub repository
- Hosting on iyaclasses handled separately by the team (not in scope for this build)

---

## Placeholder Content Strategy

All content that depends on the ACAD-445 product team is marked with placeholder values:
- **Photos:** Dashed-border boxes with text labels ("Product Photo", "Team Photo", etc.)
- **Financial numbers:** `$XX,XXX` or `XX%` format
- **Bios:** "Two-sentence bio placeholder" text
- **Product details:** Generic descriptions derived from the PDF, to be refined

Content that IS available from the PDF and used directly:
- Problem/opportunity statements
- Design criteria
- Competitor names and price points from the opportunity matrices
- Team member names (Clarence, Laila, Badria, Ben F., Anika M.)
- Timeline phases and descriptions of the design process
- Material construction details (3-layer system, foam filling decision)
