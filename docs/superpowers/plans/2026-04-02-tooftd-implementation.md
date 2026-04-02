# TOOFTD Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page React + Vite product website for TOOFTD modular seating rug with interactive configurator, Chart.js visualizations, and photo gallery.

**Architecture:** Single-page app with 7 anchor sections composed in App.jsx. No router. Intersection Observer for scroll spy. All placeholder content in `src/data/` files for easy replacement. CSS variables for design system.

**Tech Stack:** React 18, Vite, Chart.js + react-chartjs-2, CSS (no framework)

---

## File Structure

```
tooftd/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── public/
│   └── images/              # Placeholder images
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Composes all sections
│   ├── App.css              # Section spacing, scroll behavior
│   ├── styles/
│   │   └── global.css       # CSS variables, reset, typography
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav + scroll spy
│   │   ├── Navbar.css
│   │   ├── Hero.jsx         # Hero section with mound animation
│   │   ├── Hero.css
│   │   ├── Product.jsx      # Product details + features + materials
│   │   ├── Product.css
│   │   ├── Configurator.jsx # Product configurator with localStorage
│   │   ├── Configurator.css
│   │   ├── Market.jsx       # Competitive analysis + matrices
│   │   ├── Market.css
│   │   ├── RadarChart.jsx   # Chart.js radar wrapper
│   │   ├── Invest.jsx       # Investor pitch + BMC + financials
│   │   ├── Invest.css
│   │   ├── FinancialCharts.jsx
│   │   ├── Story.jsx        # Timeline + behind the scenes
│   │   ├── Story.css
│   │   ├── Gallery.jsx      # Photo gallery + lightbox
│   │   ├── Gallery.css
│   │   ├── ProductTeam.jsx  # ACAD-445 team
│   │   ├── ProductTeam.css
│   │   ├── DevTeam.jsx      # Website dev team
│   │   ├── DevTeam.css
│   │   ├── Footer.jsx       # Site footer
│   │   └── Footer.css
│   └── data/
│       ├── competitors.js   # Competitor data
│       ├── financials.js    # Placeholder financial numbers
│       ├── team.js          # Both teams' data
│       └── timeline.js      # Design process phases
└── docs/
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/App.css`, `src/styles/global.css`

- [ ] **Step 1: Initialize Vite + React project**

```bash
cd /Users/weston/tooftd
npm create vite@latest . -- --template react
```

Select "React" and "JavaScript" if prompted. This generates package.json, vite.config.js, index.html, and src/ scaffolding.

- [ ] **Step 2: Clean up generated files**

Delete all default Vite files we don't need:
```bash
rm -f src/App.css src/index.css src/assets/react.svg public/vite.svg
```

- [ ] **Step 3: Install dependencies**

```bash
npm install
npm install chart.js react-chartjs-2
```

- [ ] **Step 4: Write `src/styles/global.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --moss: #4a6741;
  --sage: #7a9a6d;
  --leaf: #8bc34a;
  --cream: #faf8f4;
  --warm-white: #f5f1eb;
  --sand: #e8e0d4;
  --bark: #2d2a26;
  --stone: #9a9590;
  --fog: rgba(74, 103, 65, 0.06);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--bark);
  background: var(--cream);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  line-height: 1.2;
}

h1 em, h2 em, h3 em {
  font-style: italic;
  color: var(--moss);
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

.eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--sage);
  margin-bottom: 16px;
}

.section-title {
  font-size: 36px;
  color: var(--bark);
  margin-bottom: 16px;
}

.section-desc {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
  max-width: 520px;
  margin: 0 auto;
}

.btn-primary {
  display: inline-block;
  padding: 13px 28px;
  background: var(--moss);
  color: var(--cream);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: var(--bark);
}

.btn-secondary {
  display: inline-block;
  padding: 13px 28px;
  background: transparent;
  color: var(--moss);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid var(--sand);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  border-color: var(--moss);
}

.placeholder-img {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--fog);
  border: 1px dashed var(--sand);
  border-radius: 8px;
  color: var(--stone);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }
  .section-desc {
    font-size: 13px;
  }
}
```

- [ ] **Step 5: Write `src/main.jsx`**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 6: Write `src/App.jsx` and `src/App.css`**

`src/App.jsx`:
```jsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Market from './components/Market';
import Invest from './components/Invest';
import Story from './components/Story';
import ProductTeam from './components/ProductTeam';
import DevTeam from './components/DevTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Market />
        <Invest />
        <Story />
        <ProductTeam />
        <DevTeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

`src/App.css`:
```css
.app {
  min-height: 100vh;
}

main > section {
  scroll-margin-top: 64px;
}
```

- [ ] **Step 7: Update `index.html`**

Replace the contents of `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TOOFTD — The Future of Gathering</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 8: Create stub components so the app compiles**

Create each component file with a minimal stub. Every file follows this pattern:

`src/components/Navbar.jsx`:
```jsx
import './Navbar.css';
export default function Navbar() { return <nav id="nav">Navbar</nav>; }
```
`src/components/Navbar.css`: (empty file)

Repeat for: `Hero`, `Product`, `Market`, `Invest`, `Story`, `ProductTeam`, `DevTeam`, `Footer` — each with matching `.css` file.

Each stub returns: `<section id="<name>">ComponentName</section>` (except Navbar returns `<nav>` and Footer returns `<footer>`).

- [ ] **Step 9: Verify app runs**

```bash
cd /Users/weston/tooftd && npm run dev
```

Expected: Vite dev server starts, browser shows all section stubs stacked vertically.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold React + Vite project with design system and component stubs"
```

---

### Task 2: Data Files

**Files:**
- Create: `src/data/team.js`, `src/data/competitors.js`, `src/data/financials.js`, `src/data/timeline.js`

- [ ] **Step 1: Write `src/data/team.js`**

```js
export const productTeam = [
  {
    name: 'Clarence',
    initial: 'C',
    role: 'Placeholder Role',
    bio: 'Two-sentence bio placeholder. Background and unique contribution to TOOFTD.',
    photo: null,
  },
  {
    name: 'Laila',
    initial: 'L',
    role: 'Placeholder Role',
    bio: 'Two-sentence bio placeholder. Background and unique contribution to TOOFTD.',
    photo: null,
  },
  {
    name: 'Badria',
    initial: 'B',
    role: 'Placeholder Role',
    bio: 'Two-sentence bio placeholder. Background and unique contribution to TOOFTD.',
    photo: null,
  },
  {
    name: 'Ben F.',
    initial: 'B',
    role: 'Placeholder Role',
    bio: 'Two-sentence bio placeholder. Background and unique contribution to TOOFTD.',
    photo: null,
  },
  {
    name: 'Anika M.',
    initial: 'A',
    role: 'Placeholder Role',
    bio: 'Two-sentence bio placeholder. Background and unique contribution to TOOFTD.',
    photo: null,
  },
];

export const devTeam = [
  {
    name: 'Member 1',
    initial: 'W',
    role: 'Lead Dev',
    tasks: ['React architecture & routing', 'Product configurator', 'Chart.js integrations'],
    photo: null,
  },
  {
    name: 'Member 2',
    initial: 'M',
    role: 'Design & CSS',
    tasks: ['Visual design system', 'Responsive layouts', 'Animation & motion'],
    photo: null,
  },
  {
    name: 'Member 3',
    initial: 'M',
    role: 'Content & UX',
    tasks: ['Copywriting & content', 'Photo gallery', 'QA testing'],
    photo: null,
  },
  {
    name: 'Member 4',
    initial: 'M',
    role: 'Business & Data',
    tasks: ['Business consulting', 'Financial data viz', 'Competitive analysis'],
    photo: null,
  },
];
```

- [ ] **Step 2: Write `src/data/competitors.js`**

```js
export const competitors = [
  {
    name: 'Gathre Floor Cushion',
    price: '$120',
    description: 'Individual floor cushion. Single-person, single-use seating without modularity.',
    tag: 'Individual · Static',
  },
  {
    name: 'West Elm Futon',
    price: '$1,440–1,899',
    description: 'Conventional convertible seating. High price point, limited to 2-3 people, rigid placement.',
    tag: 'Multi · Conventional',
  },
  {
    name: 'BB&B Bean Bag',
    price: '$80',
    description: 'Casual individual seating. Low cost but creates congestion, single configuration only.',
    tag: 'Individual · Casual',
  },
  {
    name: 'Modern Lounger Sofa',
    price: '$480',
    description: 'Low-profile lounger with limited versatility. Fixed form factor suits only one use case.',
    tag: 'Individual · Fixed',
  },
  {
    name: 'BB&B Floor Sofa',
    price: '$290',
    description: 'Floor-level sofa for casual settings. Some flexibility but not truly modular or group-oriented.',
    tag: 'Multi · Casual',
  },
];

export const radarData = {
  labels: ['Modularity', 'Capacity', 'Price Value', 'Aesthetics', 'Versatility'],
  tooftd: [9, 9, 7, 8, 10],
  competitorAvg: [3, 4, 6, 5, 3],
};

export const matrixData = {
  primary: {
    xLabel: 'Individual → Multi-Person',
    yLabel: 'High Congestion → Low Congestion',
    competitors: [
      { name: 'Floor Cushion', x: 20, y: 30 },
      { name: 'Bean Bag', x: 35, y: 70 },
      { name: 'Futon', x: 75, y: 50 },
      { name: 'Loveseat', x: 55, y: 65 },
    ],
    tooftd: { x: 85, y: 25 },
  },
  secondary: {
    xLabel: 'Single Use → Versatile',
    yLabel: 'Conventional → Unconventional',
    competitors: [
      { name: 'Recliner', x: 25, y: 75 },
      { name: 'Futon', x: 60, y: 60 },
      { name: 'Bean Bag', x: 30, y: 40 },
      { name: 'Lounger Sofa', x: 45, y: 70 },
    ],
    tooftd: { x: 90, y: 15 },
  },
};
```

- [ ] **Step 3: Write `src/data/financials.js`**

```js
export const revenueVsCost = {
  labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  revenue: [45000, 120000, 280000, 520000, 850000],
  cost: [65000, 80000, 110000, 150000, 200000],
};

export const profitMargin = {
  labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  data: [-30, 15, 38, 55, 72],
};

export const proForma = [
  { metric: 'Units Sold', y1: 'XXX', y2: 'XXX', y3: 'X,XXX', y5: 'X,XXX' },
  { metric: 'Revenue', y1: '$XX,XXX', y2: '$XXX,XXX', y3: '$XXX,XXX', y5: '$X,XXX,XXX' },
  { metric: 'COGS', y1: '$XX,XXX', y2: '$XX,XXX', y3: '$XXX,XXX', y5: '$XXX,XXX' },
  { metric: 'Gross Margin', y1: 'XX%', y2: 'XX%', y3: 'XX%', y5: 'XX%' },
  { metric: 'Net Profit', y1: '−$XX,XXX', y2: '$X,XXX', y3: '$XX,XXX', y5: '$XXX,XXX' },
];

export const pitchStats = [
  { number: '$XX', label: 'Target Raise' },
  { number: 'XX%', label: 'Projected ROI' },
  { number: '$XX', label: 'Unit MSRP' },
  { number: 'XXXX', label: 'Year 1 Units' },
];

export const bmcData = {
  'Key Partners': ['Foam suppliers', 'Textile manufacturers', 'Retail partners'],
  'Key Activities': ['Product design & R&D', 'Manufacturing', 'Brand building'],
  'Value Proposition': ['Modular social seating', 'Infinite configurations', 'Space-defining design'],
  'Customer Relations': ['DTC online', 'Design community', 'Showroom experience'],
  'Customer Segments': ['Design-conscious 25-40', 'Co-living spaces', 'Hospitality / lounges'],
  'Key Resources': ['Design IP', 'Material sourcing', 'Brand identity'],
  'Channels': ['E-commerce (DTC)', 'Design retailers', 'Pop-up showrooms'],
  'Cost Structure': ['Materials & manufacturing', 'Marketing & brand'],
  'Revenue Streams': ['Product sales', 'Accessories & add-ons'],
};
```

- [ ] **Step 4: Write `src/data/timeline.js`**

```js
export const timelinePhases = [
  {
    phase: 'Phase 1',
    label: 'Research',
    title: 'Identifying the problem',
    description: 'Modern living spaces center around screens and static furniture, limiting organic social interaction and creating passive, TV-oriented behaviors.',
    images: ['Research Photo', 'Insight Map'],
  },
  {
    phase: 'Phase 2',
    label: 'Ideation',
    title: 'Initial concepts',
    description: 'Explored expandable carpet with raised mounds, modular grid systems, and inflatable terrain. The organic mound direction emerged as the strongest.',
    images: ['Concept Sketch 1', 'Concept Sketch 2', 'Concept Sketch 3'],
  },
  {
    phase: 'Phase 3',
    label: 'Iteration',
    title: 'Mound mapping & 3D renders',
    description: 'Mapped different seating arrangements to determine how mounds shape space. Created 3D renders exploring configurations for 2-8+ people.',
    images: ['3D Render', 'Mound Map'],
  },
  {
    phase: 'Phase 4',
    label: 'Materials',
    title: 'Construction research',
    description: 'Split the concept into two parts: base rug and mounds. Tested foam vs sand filling — foam won for control, sturdiness, and consistency.',
    images: ['Sand Test', 'Foam Test', 'Layer Detail'],
  },
  {
    phase: 'Phase 5',
    label: 'Prototype',
    title: 'Lo-fi prototype',
    description: 'Built a small-scale prototype with scrap material. Validated the general concept but recognized the need for full-scale testing with proper materials.',
    images: ['Prototype Photo 1', 'Prototype Photo 2'],
  },
];

export const galleryImages = [
  { id: 1, label: 'Concept Sketches', span: 'large' },
  { id: 2, label: '3D Render — Top View', span: 'normal' },
  { id: 3, label: 'Material Samples', span: 'normal' },
  { id: 4, label: 'Mound Mapping Session', span: 'wide' },
  { id: 5, label: 'Prototype — Sand Fill', span: 'normal' },
  { id: 6, label: 'Prototype — Foam Fill', span: 'normal' },
];
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add placeholder data files for team, competitors, financials, timeline"
```

---

### Task 3: Navbar

**Files:**
- Modify: `src/components/Navbar.jsx`, `src/components/Navbar.css`

- [ ] **Step 1: Write `Navbar.jsx`**

```jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const sections = [
  { id: 'product', label: 'Product' },
  { id: 'market', label: 'Market' },
  { id: 'invest', label: 'Invest' },
  { id: 'story', label: 'Story' },
  { id: 'team', label: 'Team' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          TOOFTD
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              onClick={() => handleClick(id)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Write `Navbar.css`**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--cream);
  transition: box-shadow 0.3s, background 0.3s;
}

.navbar--scrolled {
  box-shadow: 0 1px 0 var(--sand);
  background: rgba(250, 248, 244, 0.95);
  backdrop-filter: blur(8px);
}

.navbar__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__logo {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 4px;
  color: var(--moss);
  cursor: pointer;
}

.navbar__links {
  display: flex;
  gap: 32px;
}

.navbar__link {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--stone);
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.navbar__link:hover {
  color: var(--bark);
}

.navbar__link--active {
  color: var(--moss);
  font-weight: 500;
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--moss);
  border-radius: 1px;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__hamburger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--bark);
  transition: all 0.3s;
}

.navbar__hamburger span:nth-child(2) {
  width: 12px;
  margin-left: auto;
}

.navbar__hamburger--open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.navbar__hamburger--open span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger--open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 768px) {
  .navbar__inner {
    padding: 16px 20px;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--cream);
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border-bottom: 1px solid var(--sand);
  }

  .navbar__links--open {
    display: flex;
  }
}
```

- [ ] **Step 3: Verify navbar renders and scrolls**

```bash
npm run dev
```

Expected: Sticky nav at top. Links highlight on scroll. Hamburger menu works on mobile viewport.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/components/Navbar.css
git commit -m "feat: add sticky navbar with scroll spy and mobile hamburger menu"
```

---

### Task 4: Hero Section

**Files:**
- Modify: `src/components/Hero.jsx`, `src/components/Hero.css`

- [ ] **Step 1: Write `Hero.jsx`**

```jsx
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <p className="eyebrow">The Future of Gathering</p>
          <h1 className="hero__title">
            Where comfort<br />meets <em>connection</em>
          </h1>
          <p className="hero__sub">
            A modular seating landscape that transforms any room into a space for
            meaningful gathering. Designed for the way we actually live.
          </p>
          <div className="hero__ctas">
            <a className="btn-primary" href="#product">Explore the Product</a>
            <a className="btn-secondary" href="#invest">Investor Overview</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__wave">
            <svg viewBox="0 0 60 500" preserveAspectRatio="none">
              <path d="M60,0 L60,500 L0,500 L0,0 C20,80 10,160 30,240 C50,320 15,400 25,500 L0,500 L0,0 Z" fill="var(--cream)" />
            </svg>
          </div>
          <div className="hero__terrain">
            <div className="hero__mound hero__mound--1" />
            <div className="hero__mound hero__mound--2" />
            <div className="hero__mound hero__mound--3" />
            <div className="hero__mound hero__mound--4" />
            <div className="hero__mound hero__mound--5" />
            <div className="hero__terrain-base" />
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num">∞</span>
          <span className="hero__stat-label">Configurations</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">6–12</span>
          <span className="hero__stat-label">People Seated</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">100%</span>
          <span className="hero__stat-label">Modular</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">2026</span>
          <span className="hero__stat-label">Launch Year</span>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Discover</span>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write `Hero.css`**

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
}

.hero__content {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero__text {
  padding: 80px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__title {
  font-size: 48px;
  margin-bottom: 20px;
  animation: fadeSlideUp 0.8s 0.2s both;
}

.hero__sub {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
  max-width: 380px;
  margin-bottom: 36px;
  animation: fadeSlideUp 0.8s 0.4s both;
}

.hero__ctas {
  display: flex;
  gap: 12px;
  animation: fadeSlideUp 0.8s 0.6s both;
}

.hero__visual {
  position: relative;
  background: var(--fog);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.hero__wave {
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 5;
}

.hero__wave svg {
  height: 100%;
  width: 100%;
}

.hero__terrain {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero__mound {
  position: absolute;
  border-radius: 50% 50% 12% 12%;
  bottom: 40px;
  animation: gentleFloat 4s ease-in-out infinite;
}

.hero__mound::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 10%;
  right: 10%;
  height: 10px;
  background: radial-gradient(ellipse, rgba(0,0,0,0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.hero__mound--1 {
  left: 5%;
  width: 180px;
  height: 110px;
  background: linear-gradient(145deg, #a5d6a7, #4a6741);
  z-index: 3;
  animation-delay: 0s;
}

.hero__mound--2 {
  left: 30%;
  width: 130px;
  height: 78px;
  background: linear-gradient(145deg, #c5e1a5, #7cb342);
  z-index: 2;
  animation-delay: 0.8s;
}

.hero__mound--3 {
  right: 5%;
  width: 160px;
  height: 95px;
  background: linear-gradient(145deg, #81c784, #2e7d32);
  z-index: 3;
  animation-delay: 1.5s;
}

.hero__mound--4 {
  left: 55%;
  width: 90px;
  height: 55px;
  background: linear-gradient(145deg, #dcedc8, #8bc34a);
  z-index: 1;
  animation-delay: 2.2s;
}

.hero__mound--5 {
  left: 18%;
  width: 75px;
  height: 45px;
  bottom: 75px;
  background: linear-gradient(145deg, #e8f5e9, #a5d6a7);
  z-index: 4;
  animation-delay: 3s;
}

.hero__terrain-base {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(90deg, var(--sand), #d7cfc3);
  border-radius: 4px 4px 0 0;
}

.hero__stats {
  display: flex;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 28px 48px;
  border-top: 1px solid rgba(0,0,0,0.04);
  animation: fadeSlideUp 0.8s 0.8s both;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero__stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: var(--moss);
}

.hero__stat-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--stone);
}

.hero__scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 32px;
  animation: fadeIn 1s 1.2s both;
}

.hero__scroll-line {
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, var(--sand), transparent);
  margin-bottom: 8px;
  animation: scrollPulse 2s ease-in-out infinite;
}

.hero__scroll-text {
  font-size: 8px;
  letter-spacing: 3px;
  color: var(--stone);
  text-transform: uppercase;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

@media (max-width: 768px) {
  .hero__content {
    grid-template-columns: 1fr;
  }

  .hero__text {
    padding: 40px 24px;
    text-align: center;
    align-items: center;
  }

  .hero__title {
    font-size: 32px;
  }

  .hero__sub {
    max-width: 320px;
  }

  .hero__ctas {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }

  .hero__ctas .btn-primary,
  .hero__ctas .btn-secondary {
    text-align: center;
  }

  .hero__visual {
    height: 240px;
  }

  .hero__wave {
    display: none;
  }

  .hero__mound--1 { width: 120px; height: 70px; left: 8%; }
  .hero__mound--2 { width: 85px; height: 50px; left: 35%; }
  .hero__mound--3 { width: 100px; height: 60px; right: 5%; }
  .hero__mound--4 { width: 60px; height: 36px; }
  .hero__mound--5 { display: none; }

  .hero__stats {
    display: none;
  }
}
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```

Expected: Full hero with two-column layout on desktop, single column on mobile. Mounds float, scroll hint pulses.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.css
git commit -m "feat: add hero section with mound animations and stats bar"
```

---

### Task 5: Product Section + Configurator

**Files:**
- Modify: `src/components/Product.jsx`, `src/components/Product.css`, `src/components/Configurator.jsx`, `src/components/Configurator.css`

- [ ] **Step 1: Write `Product.jsx`**

```jsx
import './Product.css';
import Configurator from './Configurator';

export default function Product() {
  return (
    <section id="product" className="product">
      <div className="product__intro">
        <p className="eyebrow">The Product</p>
        <h2 className="section-title">A landscape for <em>living</em></h2>
        <p className="section-desc">
          Two components — a base rug and modular mounds — combine into infinite
          configurations for how your space gathers.
        </p>
      </div>

      <div className="product__hero-img placeholder-img">
        Product Photography Placeholder
      </div>

      <div className="product__features">
        <div className="product__feature">
          <div className="product__feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 14h6m-6 4h6m4-4h6m-6 4h6M4 6l8-3 8 3" />
              <path d="M4 6v14m16-14v14" />
            </svg>
          </div>
          <div className="product__feature-text">
            <h4>Modular</h4>
            <p>Rearrange mounds to create new layouts for movie night, game day, or quiet reading.</p>
          </div>
        </div>
        <div className="product__feature">
          <div className="product__feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="product__feature-text">
            <h4>6–12 People</h4>
            <p>Comfortably seats groups without the rigidity of traditional furniture arrangements.</p>
          </div>
        </div>
        <div className="product__feature">
          <div className="product__feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="product__feature-text">
            <h4>3-Layer Build</h4>
            <p>Shaggy carpet top, foam cushion middle, rubber grip base — engineered for comfort and stability.</p>
          </div>
        </div>
      </div>

      <div className="product__materials">
        <div className="product__materials-diagram">
          <div className="product__layer product__layer--top">
            <div className="product__layer-color" style={{ background: 'linear-gradient(135deg, #8bc34a, #689f38)' }} />
            <div className="product__layer-info">
              <span className="product__layer-name">Shaggy Carpet</span>
              <span className="product__layer-detail">Soft texture top layer</span>
            </div>
          </div>
          <div className="product__layer">
            <div className="product__layer-color" style={{ background: 'linear-gradient(135deg, #e8e0d4, #c8b89a)' }} />
            <div className="product__layer-info">
              <span className="product__layer-name">Foam Cushion</span>
              <span className="product__layer-detail">Support & comfort middle</span>
            </div>
          </div>
          <div className="product__layer">
            <div className="product__layer-color" style={{ background: 'linear-gradient(135deg, #5d5d5d, #3d3d3d)' }} />
            <div className="product__layer-info">
              <span className="product__layer-name">Rubber Grip Base</span>
              <span className="product__layer-detail">Non-slip foundation</span>
            </div>
          </div>
        </div>
        <div className="product__materials-text">
          <p className="eyebrow">Construction</p>
          <h3>Engineered for <em>comfort</em></h3>
          <p>
            Each mound is independently constructed with a foam core that distributes
            weight evenly. The shaggy carpet surface invites touch while the rubber
            base keeps everything anchored.
          </p>
          <p>
            The base rug and mounds connect seamlessly through material interlocking —
            designed as a unit, but each piece stands alone.
          </p>
        </div>
      </div>

      <Configurator />
    </section>
  );
}
```

- [ ] **Step 2: Write `Product.css`**

```css
.product {
  padding: 0;
}

.product__intro {
  padding: 72px 48px 48px;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}

.product__hero-img {
  height: 360px;
  margin: 0 48px;
  border-radius: 12px;
}

.product__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--sand);
  margin: 56px 48px 0;
}

.product__feature {
  background: var(--cream);
  padding: 36px 28px;
  text-align: center;
}

.product__feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--fog);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product__feature-icon svg {
  width: 22px;
  height: 22px;
  color: var(--moss);
}

.product__feature h4 {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  margin-bottom: 8px;
}

.product__feature p {
  font-size: 12px;
  line-height: 1.7;
  color: var(--stone);
  font-weight: 300;
}

.product__materials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 64px 48px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.product__materials-diagram {
  background: var(--fog);
  border-radius: 12px;
  overflow: hidden;
  padding: 24px 0;
}

.product__layer {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.product__layer:last-child {
  border-bottom: none;
}

.product__layer-color {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  flex-shrink: 0;
}

.product__layer-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.product__layer-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--bark);
}

.product__layer-detail {
  font-size: 10px;
  color: var(--stone);
}

.product__materials-text h3 {
  font-size: 28px;
  margin-bottom: 16px;
}

.product__materials-text p {
  font-size: 13px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .product__intro {
    padding: 56px 24px 32px;
  }

  .product__hero-img {
    height: 200px;
    margin: 0 20px;
  }

  .product__features {
    grid-template-columns: 1fr;
    margin: 32px 20px 0;
  }

  .product__feature {
    display: flex;
    gap: 16px;
    text-align: left;
    padding: 24px 20px;
  }

  .product__feature-icon {
    margin: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  .product__materials {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    gap: 32px;
  }
}
```

- [ ] **Step 3: Write `Configurator.jsx`**

```jsx
import { useState, useEffect } from 'react';
import './Configurator.css';

const STORAGE_KEY = 'tooftd-config';

const sizes = [
  { id: 'S', label: "S · 4×4'" },
  { id: 'M', label: "M · 6×6'" },
  { id: 'L', label: "L · 8×8'" },
];

const colors = [
  { id: 'moss', label: 'Moss', gradient: ['#6b8f63', '#4a6741'] },
  { id: 'sage', label: 'Sage', gradient: ['#a5c49f', '#7a9a6d'] },
  { id: 'olive', label: 'Olive', gradient: ['#8a9a5b', '#6b7a3d'] },
  { id: 'cream', label: 'Cream', gradient: ['#f0e8d8', '#d4c8b0'] },
];

const sizeScale = { S: 0.7, M: 1, L: 1.3 };

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export default function Configurator() {
  const [config, setConfig] = useState(() => {
    const saved = loadConfig();
    return saved || { size: 'M', color: 'moss', moundCount: 4 };
  });
  const [saved, setSaved] = useState(false);

  const activeColor = colors.find((c) => c.id === config.color) || colors[0];
  const scale = sizeScale[config.size] || 1;

  const moundPositions = Array.from({ length: config.moundCount }, (_, i) => {
    const angle = (i / config.moundCount) * Math.PI * 0.8 + 0.3;
    const radius = 30 + (i % 3) * 15;
    return {
      left: `${25 + Math.cos(angle) * radius}%`,
      bottom: `${15 + Math.sin(angle) * 8}%`,
      width: `${(60 + (i % 3) * 20) * scale}px`,
      height: `${(35 + (i % 3) * 12) * scale}px`,
      zIndex: i % 3 + 1,
      animationDelay: `${i * 0.5}s`,
    };
  });

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="configurator">
      <div className="configurator__header">
        <p className="eyebrow">Interactive</p>
        <h2 className="section-title">Build your <em>landscape</em></h2>
        <p className="section-desc">
          Choose your size, color, and mound count. Your configuration saves to your browser.
        </p>
      </div>

      <div className="configurator__layout">
        <div className="configurator__canvas">
          <div className="configurator__preview" style={{ transform: `scale(${scale * 0.85 + 0.15})` }}>
            {moundPositions.map((pos, i) => (
              <div
                key={i}
                className="configurator__mound"
                style={{
                  left: pos.left,
                  bottom: pos.bottom,
                  width: pos.width,
                  height: pos.height,
                  zIndex: pos.zIndex,
                  background: `linear-gradient(145deg, ${activeColor.gradient[0]}, ${activeColor.gradient[1]})`,
                  animationDelay: pos.animationDelay,
                }}
              />
            ))}
            <div className="configurator__base" />
          </div>
          <p className="configurator__label">
            {config.size} · {activeColor.label.toUpperCase()} · {config.moundCount} MOUNDS
          </p>
        </div>

        <div className="configurator__controls">
          <div className="configurator__group">
            <label>Rug Size</label>
            <div className="configurator__sizes">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  className={`configurator__size-btn ${config.size === s.id ? 'active' : ''}`}
                  onClick={() => setConfig({ ...config, size: s.id })}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="configurator__group">
            <label>Carpet Color</label>
            <div className="configurator__swatches">
              {colors.map((c) => (
                <button
                  key={c.id}
                  className={`configurator__swatch ${config.color === c.id ? 'active' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}
                  onClick={() => setConfig({ ...config, color: c.id })}
                  aria-label={c.label}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          <div className="configurator__group">
            <label>
              Number of Mounds · <span style={{ color: 'var(--moss)', fontWeight: 500 }}>{config.moundCount}</span>
            </label>
            <input
              type="range"
              className="configurator__slider"
              min="2"
              max="8"
              value={config.moundCount}
              onChange={(e) => setConfig({ ...config, moundCount: Number(e.target.value) })}
            />
            <div className="configurator__slider-labels">
              <span>2</span><span>4</span><span>6</span><span>8</span>
            </div>
          </div>

          <button className="configurator__save" onClick={handleSave}>
            {saved ? '✓ Configuration Saved!' : 'Save My Configuration'}
          </button>
          <p className="configurator__save-note">Saved to your browser — come back anytime</p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Write `Configurator.css`**

```css
.configurator {
  padding: 64px 48px;
  background: var(--warm-white);
  border-top: 1px solid rgba(0,0,0,0.04);
}

.configurator__header {
  text-align: center;
  margin-bottom: 40px;
}

.configurator__layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 36px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: start;
}

.configurator__canvas {
  background: var(--cream);
  border-radius: 12px;
  height: 320px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--sand);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.configurator__preview {
  position: relative;
  width: 260px;
  height: 140px;
  transition: transform 0.4s ease;
}

.configurator__mound {
  position: absolute;
  border-radius: 50% 50% 10% 10%;
  animation: gentleFloat 4s ease-in-out infinite;
  transition: background 0.4s;
}

.configurator__mound::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 10%;
  right: 10%;
  height: 8px;
  background: radial-gradient(ellipse, rgba(0,0,0,0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.configurator__base {
  position: absolute;
  bottom: 0;
  left: -10px;
  right: -10px;
  height: 12px;
  background: var(--sand);
  border-radius: 2px;
}

.configurator__label {
  position: absolute;
  bottom: 16px;
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--stone);
}

.configurator__controls {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.configurator__group label {
  display: block;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 10px;
}

.configurator__sizes {
  display: flex;
  gap: 8px;
}

.configurator__size-btn {
  padding: 10px 18px;
  border: 1px solid var(--sand);
  border-radius: 4px;
  background: var(--cream);
  font-size: 12px;
  color: var(--bark);
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.2s;
}

.configurator__size-btn.active {
  border-color: var(--moss);
  background: var(--fog);
  color: var(--moss);
  font-weight: 500;
}

.configurator__swatches {
  display: flex;
  gap: 10px;
}

.configurator__swatch {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.configurator__swatch.active {
  border-color: var(--bark);
  transform: scale(1.15);
}

.configurator__swatch:nth-child(4) {
  border: 2px solid var(--sand);
}

.configurator__swatch:nth-child(4).active {
  border-color: var(--bark);
}

.configurator__slider {
  width: 100%;
  appearance: none;
  height: 4px;
  background: var(--sand);
  border-radius: 2px;
  outline: none;
}

.configurator__slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--moss);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.configurator__slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--stone);
  margin-top: 6px;
}

.configurator__save {
  width: 100%;
  padding: 14px;
  background: var(--moss);
  color: var(--cream);
  border: none;
  border-radius: 4px;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
}

.configurator__save:hover {
  background: var(--bark);
}

.configurator__save-note {
  text-align: center;
  font-size: 10px;
  color: var(--stone);
}

@media (max-width: 768px) {
  .configurator {
    padding: 40px 20px;
  }

  .configurator__layout {
    grid-template-columns: 1fr;
  }

  .configurator__canvas {
    height: 220px;
  }
}
```

- [ ] **Step 5: Verify product section + configurator work**

```bash
npm run dev
```

Expected: Product section renders with features, materials, and working configurator. Changing size/color/mounds updates preview. Save writes to localStorage. Refreshing page restores config.

- [ ] **Step 6: Commit**

```bash
git add src/components/Product.jsx src/components/Product.css src/components/Configurator.jsx src/components/Configurator.css
git commit -m "feat: add product section with features, materials, and interactive configurator"
```

---

### Task 6: Market Section + Radar Chart

**Files:**
- Modify: `src/components/Market.jsx`, `src/components/Market.css`, `src/components/RadarChart.jsx`

- [ ] **Step 1: Write `RadarChart.jsx`**

```jsx
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { radarData } from '../data/competitors';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export default function RadarChart() {
  const data = {
    labels: radarData.labels,
    datasets: [
      {
        label: 'TOOFTD',
        data: radarData.tooftd,
        backgroundColor: 'rgba(74, 103, 65, 0.15)',
        borderColor: '#4a6741',
        borderWidth: 2,
        pointBackgroundColor: '#4a6741',
        pointBorderColor: '#fff',
        pointRadius: 4,
      },
      {
        label: 'Competitor Avg',
        data: radarData.competitorAvg,
        backgroundColor: 'rgba(232, 224, 212, 0.2)',
        borderColor: '#c8b89a',
        borderWidth: 1.5,
        borderDash: [4, 4],
        pointBackgroundColor: '#c8b89a',
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        backgroundColor: '#2d2a26',
        titleFont: { family: 'DM Sans', size: 11 },
        bodyFont: { family: 'DM Sans', size: 11 },
        padding: 12,
        cornerRadius: 4,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
          display: false,
        },
        grid: {
          color: 'rgba(0,0,0,0.06)',
        },
        angleLines: {
          color: 'rgba(0,0,0,0.06)',
        },
        pointLabels: {
          font: { family: 'DM Sans', size: 11, weight: '400' },
          color: '#9a9590',
        },
      },
    },
  };

  return (
    <div className="radar-chart">
      <Radar data={data} options={options} />
      <div className="radar-chart__legend">
        <div className="radar-chart__legend-item">
          <span className="radar-chart__legend-dot" style={{ background: '#4a6741' }} />
          TOOFTD
        </div>
        <div className="radar-chart__legend-item">
          <span className="radar-chart__legend-dot" style={{ background: '#c8b89a' }} />
          Competitor Avg
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write `Market.jsx`**

```jsx
import './Market.css';
import { competitors, matrixData } from '../data/competitors';
import RadarChart from './RadarChart';

function Matrix({ title, data }) {
  return (
    <div className="market__matrix">
      <p className="market__matrix-label">{title}</p>
      <div className="market__matrix-plot">
        <span className="market__axis-y market__axis-y--top">{data.yLabel.split(' → ')[0]}</span>
        <span className="market__axis-y market__axis-y--bottom">{data.yLabel.split(' → ')[1]}</span>
        <span className="market__axis-x market__axis-x--left">{data.xLabel.split(' → ')[0]}</span>
        <span className="market__axis-x market__axis-x--right">{data.xLabel.split(' → ')[1]}</span>
        {data.competitors.map((c, i) => (
          <div key={i} className="market__dot" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
            <span className="market__dot-label">{c.name}</span>
          </div>
        ))}
        <div
          className="market__dot market__dot--tooftd"
          style={{ left: `${data.tooftd.x}%`, top: `${data.tooftd.y}%` }}
        >
          <span className="market__dot-label market__dot-label--tooftd">TOOFTD</span>
        </div>
      </div>
    </div>
  );
}

export default function Market() {
  return (
    <section id="market" className="market">
      <div className="market__intro">
        <p className="eyebrow">The Opportunity</p>
        <h2 className="section-title">A market ready for <em>disruption</em></h2>
        <p className="section-desc">
          Traditional seating hasn't evolved. Floor culture is growing, but no product
          bridges the gap between casual floor seating and designed furniture.
        </p>
      </div>

      <div className="market__matrices">
        <Matrix title="Congestion vs. Capacity" data={matrixData.primary} />
        <Matrix title="Convention vs. Versatility" data={matrixData.secondary} />
      </div>

      <div className="market__competitors-section">
        <p className="eyebrow">Current Landscape</p>
        <h3 className="market__sub-title">What exists <em>today</em></h3>
        <div className="market__competitors">
          {competitors.slice(0, 3).map((c, i) => (
            <div key={i} className="market__comp-card">
              <div className="market__comp-img placeholder-img">Product Photo</div>
              <h4 className="market__comp-name">{c.name}</h4>
              <p className="market__comp-price">{c.price}</p>
              <p className="market__comp-desc">{c.description}</p>
              <span className="market__comp-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="market__radar-section">
        <h3 className="market__sub-title">Competitive <em>comparison</em></h3>
        <p className="market__radar-sub">Hover to compare across five key dimensions</p>
        <RadarChart />
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `Market.css`**

```css
.market {
  padding: 72px 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.market__intro {
  text-align: center;
  margin-bottom: 48px;
}

.market__matrices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 56px;
}

.market__matrix {
  background: var(--warm-white);
  border-radius: 12px;
  padding: 28px;
  border: 1px solid rgba(0,0,0,0.04);
}

.market__matrix-label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 16px;
}

.market__matrix-plot {
  position: relative;
  height: 240px;
  border-left: 1.5px solid var(--sand);
  border-bottom: 1.5px solid var(--sand);
}

.market__axis-y {
  position: absolute;
  left: 8px;
  font-size: 8px;
  letter-spacing: 1px;
  color: var(--stone);
}

.market__axis-y--top { top: 8px; }
.market__axis-y--bottom { bottom: 8px; }

.market__axis-x {
  position: absolute;
  bottom: -18px;
  font-size: 8px;
  letter-spacing: 1px;
  color: var(--stone);
}

.market__axis-x--left { left: 8px; }
.market__axis-x--right { right: 8px; }

.market__dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--sand);
  border: 2px solid var(--stone);
  transform: translate(-50%, -50%);
}

.market__dot--tooftd {
  width: 14px;
  height: 14px;
  background: var(--moss);
  border: 2px solid var(--leaf);
  box-shadow: 0 0 0 4px rgba(74,103,65,0.15);
}

.market__dot-label {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 8px;
  color: var(--stone);
  white-space: nowrap;
}

.market__dot-label--tooftd {
  color: var(--moss);
  font-weight: 600;
  font-size: 9px;
}

.market__competitors-section {
  text-align: center;
  margin-bottom: 56px;
}

.market__sub-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  text-align: center;
  margin-bottom: 24px;
}

.market__competitors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  text-align: left;
}

.market__comp-card {
  background: var(--warm-white);
  border-radius: 10px;
  padding: 24px;
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.3s;
}

.market__comp-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}

.market__comp-img {
  height: 80px;
  border-radius: 6px;
  margin-bottom: 14px;
}

.market__comp-name {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  margin-bottom: 4px;
}

.market__comp-price {
  font-size: 11px;
  color: var(--moss);
  font-weight: 500;
  margin-bottom: 8px;
}

.market__comp-desc {
  font-size: 11px;
  color: var(--stone);
  line-height: 1.6;
  font-weight: 300;
}

.market__comp-tag {
  display: inline-block;
  margin-top: 10px;
  padding: 3px 8px;
  background: var(--fog);
  border-radius: 3px;
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--sage);
}

.market__radar-section {
  text-align: center;
}

.market__radar-sub {
  font-size: 12px;
  color: var(--stone);
  margin-bottom: 24px;
}

.radar-chart {
  max-width: 420px;
  margin: 0 auto;
}

.radar-chart__legend {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 16px;
}

.radar-chart__legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: var(--stone);
}

.radar-chart__legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

@media (max-width: 768px) {
  .market {
    padding: 56px 20px;
  }

  .market__matrices {
    grid-template-columns: 1fr;
  }

  .market__competitors {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
```

- [ ] **Step 4: Verify market section and radar chart**

```bash
npm run dev
```

Expected: Market section with two matrices, competitor cards, and interactive Chart.js radar.

- [ ] **Step 5: Commit**

```bash
git add src/components/Market.jsx src/components/Market.css src/components/RadarChart.jsx
git commit -m "feat: add market section with opportunity matrices, competitors, and radar chart"
```

---

### Task 7: Invest Section + Financial Charts

**Files:**
- Modify: `src/components/Invest.jsx`, `src/components/Invest.css`, `src/components/FinancialCharts.jsx`

- [ ] **Step 1: Write `FinancialCharts.jsx`**

```jsx
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { revenueVsCost, profitMargin } from '../data/financials';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, Tooltip);

const tooltipStyle = {
  backgroundColor: '#2d2a26',
  titleFont: { family: 'DM Sans', size: 11 },
  bodyFont: { family: 'DM Sans', size: 11 },
  padding: 12,
  cornerRadius: 4,
};

export function RevenueChart() {
  const data = {
    labels: revenueVsCost.labels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueVsCost.revenue,
        backgroundColor: '#4a6741',
        borderRadius: 4,
        barPercentage: 0.7,
      },
      {
        label: 'Cost',
        data: revenueVsCost.cost,
        backgroundColor: '#e8e0d4',
        borderRadius: 4,
        barPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: $${ctx.raw.toLocaleString()}`,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'DM Sans', size: 10 }, color: '#9a9590' },
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'DM Sans', size: 10 },
          color: '#9a9590',
          callback: (v) => `$${v / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="fin-chart">
      <p className="fin-chart__label">Revenue vs Cost (5-Year)</p>
      <div className="fin-chart__container">
        <Bar data={data} options={options} />
      </div>
      <div className="fin-chart__legend">
        <span><i style={{ background: '#4a6741' }} /> Revenue</span>
        <span><i style={{ background: '#e8e0d4' }} /> Cost</span>
      </div>
    </div>
  );
}

export function MarginChart() {
  const data = {
    labels: profitMargin.labels,
    datasets: [
      {
        label: 'Profit Margin',
        data: profitMargin.data,
        borderColor: '#4a6741',
        backgroundColor: 'rgba(74, 103, 65, 0.08)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#4a6741',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          label: (ctx) => `Margin: ${ctx.raw}%`,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'DM Sans', size: 10 }, color: '#9a9590' },
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'DM Sans', size: 10 },
          color: '#9a9590',
          callback: (v) => `${v}%`,
        },
      },
    },
  };

  return (
    <div className="fin-chart">
      <p className="fin-chart__label">Profit Margin Trend</p>
      <div className="fin-chart__container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write `Invest.jsx`**

```jsx
import { useState } from 'react';
import './Invest.css';
import { pitchStats, bmcData, proForma } from '../data/financials';
import { RevenueChart, MarginChart } from './FinancialCharts';

export default function Invest() {
  const [openBmc, setOpenBmc] = useState(null);
  const bmcKeys = Object.keys(bmcData);

  return (
    <section id="invest" className="invest">
      <div className="invest__pitch">
        <p className="invest__pitch-eyebrow">For Investors</p>
        <h2 className="invest__pitch-title">
          Invest in the future of <em>gathering</em>
        </h2>
        <p className="invest__pitch-sub">A growing addressable market with zero direct competitors</p>
        <div className="invest__pitch-stats">
          {pitchStats.map((s, i) => (
            <div key={i} className="invest__pitch-stat">
              <span className="invest__pitch-stat-num">{s.number}</span>
              <span className="invest__pitch-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="invest__bmc">
        <p className="eyebrow">Business Model</p>
        <h3 className="invest__sub-title">Business Model <em>Canvas</em></h3>

        {/* Desktop grid */}
        <div className="invest__bmc-grid">
          {bmcKeys.map((key) => (
            <div key={key} className="invest__bmc-cell">
              <h5>{key}</h5>
              <ul>
                {bmcData[key].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="invest__bmc-accordion">
          {bmcKeys.map((key, idx) => (
            <div key={key} className={`invest__bmc-acc-item ${openBmc === idx ? 'open' : ''}`}>
              <button onClick={() => setOpenBmc(openBmc === idx ? null : idx)}>
                {key}
                <span>{openBmc === idx ? '−' : '+'}</span>
              </button>
              {openBmc === idx && (
                <ul>
                  {bmcData[key].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="invest__financials">
        <p className="eyebrow">Financials</p>
        <h3 className="invest__sub-title">Projected <em>performance</em></h3>
        <div className="invest__charts">
          <RevenueChart />
          <MarginChart />
        </div>
      </div>

      <div className="invest__proforma">
        <p className="eyebrow">Pro Forma</p>
        <h3 className="invest__sub-title">Financial <em>projections</em></h3>
        <div className="invest__table-wrap">
          <table className="invest__table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1</th>
                <th>Year 2</th>
                <th>Year 3</th>
                <th>Year 5</th>
              </tr>
            </thead>
            <tbody>
              {proForma.map((row, i) => (
                <tr key={i}>
                  <td>{row.metric}</td>
                  <td className={row.y1.startsWith('−') ? 'negative' : ''}>{row.y1}</td>
                  <td>{row.y2}</td>
                  <td>{row.y3}</td>
                  <td className={row.metric === 'Net Profit' ? 'positive' : ''}>{row.y5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `Invest.css`**

```css
.invest {
  max-width: 1200px;
  margin: 0 auto;
}

.invest__pitch {
  background: var(--bark);
  border-radius: 16px;
  padding: 56px 48px;
  margin: 0 48px 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.invest__pitch::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 50%, rgba(74,103,65,0.2) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 50%, rgba(139,195,74,0.1) 0%, transparent 50%);
}

.invest__pitch > * { position: relative; }

.invest__pitch-eyebrow {
  font-size: 9px;
  letter-spacing: 4px;
  color: var(--sage);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.invest__pitch-title {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 8px;
}

.invest__pitch-title em {
  font-style: italic;
  color: var(--leaf);
}

.invest__pitch-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  font-weight: 300;
}

.invest__pitch-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.1);
  margin-top: 36px;
  border-radius: 8px;
  overflow: hidden;
}

.invest__pitch-stat {
  background: var(--bark);
  padding: 24px 16px;
}

.invest__pitch-stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  color: var(--leaf);
  display: block;
  margin-bottom: 4px;
}

.invest__pitch-stat-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.invest__bmc,
.invest__financials,
.invest__proforma {
  padding: 0 48px;
  margin-bottom: 56px;
  text-align: center;
}

.invest__sub-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  margin-bottom: 24px;
}

.invest__bmc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--sand);
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
}

.invest__bmc-cell {
  background: var(--cream);
  padding: 20px;
  min-height: 100px;
}

.invest__bmc-cell h5 {
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 10px;
  font-family: 'DM Sans', sans-serif;
}

.invest__bmc-cell ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.invest__bmc-cell li {
  font-size: 11px;
  color: var(--stone);
  line-height: 1.5;
  font-weight: 300;
  padding-left: 10px;
  position: relative;
}

.invest__bmc-cell li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--sage);
  font-weight: 700;
}

.invest__bmc-accordion {
  display: none;
}

.invest__charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.fin-chart {
  background: var(--warm-white);
  border-radius: 12px;
  padding: 28px;
  border: 1px solid rgba(0,0,0,0.04);
}

.fin-chart__label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 16px;
  text-align: left;
}

.fin-chart__container {
  height: 220px;
}

.fin-chart__legend {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.fin-chart__legend span {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: var(--stone);
}

.fin-chart__legend i {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  font-style: normal;
}

.invest__table-wrap {
  overflow-x: auto;
}

.invest__table {
  width: 100%;
  border-collapse: collapse;
  background: var(--warm-white);
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
}

.invest__table th {
  padding: 14px 20px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--moss);
  background: var(--fog);
  border-bottom: 1px solid var(--sand);
  font-family: 'DM Sans', sans-serif;
}

.invest__table td {
  padding: 12px 20px;
  font-size: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.04);
  font-variant-numeric: tabular-nums;
}

.invest__table tr:last-child td {
  border-bottom: none;
  font-weight: 600;
}

.invest__table td:not(:first-child) {
  text-align: right;
}

.invest__table .positive { color: var(--moss); }
.invest__table .negative { color: #c0392b; }

@media (max-width: 768px) {
  .invest__pitch {
    margin: 0 20px 40px;
    padding: 40px 24px;
  }

  .invest__pitch-title {
    font-size: 28px;
  }

  .invest__pitch-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .invest__bmc,
  .invest__financials,
  .invest__proforma {
    padding: 0 20px;
  }

  .invest__bmc-grid {
    display: none;
  }

  .invest__bmc-accordion {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--sand);
    border-radius: 12px;
    overflow: hidden;
    text-align: left;
  }

  .invest__bmc-acc-item {
    background: var(--cream);
  }

  .invest__bmc-acc-item button {
    width: 100%;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--bark);
    cursor: pointer;
  }

  .invest__bmc-acc-item ul {
    list-style: none;
    padding: 0 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .invest__bmc-acc-item li {
    font-size: 11px;
    color: var(--stone);
    font-weight: 300;
  }

  .invest__charts {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Verify invest section**

```bash
npm run dev
```

Expected: Dark pitch banner, BMC grid (accordion on mobile), two Chart.js charts, pro forma table.

- [ ] **Step 5: Commit**

```bash
git add src/components/Invest.jsx src/components/Invest.css src/components/FinancialCharts.jsx
git commit -m "feat: add invest section with pitch banner, BMC, financial charts, and pro forma"
```

---

### Task 8: Story Section + Gallery

**Files:**
- Modify: `src/components/Story.jsx`, `src/components/Story.css`, `src/components/Gallery.jsx`, `src/components/Gallery.css`

- [ ] **Step 1: Write `Gallery.jsx`**

```jsx
import { useState, useEffect } from 'react';
import './Gallery.css';
import { galleryImages } from '../data/timeline';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <div className="gallery">
      <p className="eyebrow" style={{ textAlign: 'center', marginTop: 32 }}>Gallery</p>
      <h3 className="gallery__title">Process <em>gallery</em></h3>

      <div className="gallery__grid">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className={`gallery__item placeholder-img ${img.span === 'large' ? 'gallery__item--large' : ''} ${img.span === 'wide' ? 'gallery__item--wide' : ''}`}
            onClick={() => setLightbox(i)}
          >
            {img.label}
          </div>
        ))}
      </div>

      <p className="gallery__note">Click any photo to view full size</p>

      {lightbox !== null && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <div className="gallery__lightbox-img placeholder-img">
              {galleryImages[lightbox].label}
            </div>
            <div className="gallery__lightbox-nav">
              <button onClick={() => setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length)}>←</button>
              <span>{lightbox + 1} / {galleryImages.length}</span>
              <button onClick={() => setLightbox((lightbox + 1) % galleryImages.length)}>→</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Write `Gallery.css`**

```css
.gallery__title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  text-align: center;
  margin-bottom: 24px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;
}

.gallery__item {
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 0;
}

.gallery__item:hover {
  opacity: 0.85;
  transform: scale(1.01);
}

.gallery__item--large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery__item--wide {
  grid-column: span 2;
}

.gallery__note {
  text-align: center;
  font-size: 11px;
  color: var(--stone);
  margin-top: 12px;
  font-style: italic;
}

.gallery__lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  animation: fadeIn 0.2s;
}

.gallery__lightbox-content {
  max-width: 800px;
  width: 100%;
  position: relative;
}

.gallery__lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.gallery__lightbox-close:hover { opacity: 1; }

.gallery__lightbox-img {
  height: 500px;
  border-radius: 8px;
  background: #333;
  color: #888;
  border-color: #555;
}

.gallery__lightbox-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
}

.gallery__lightbox-nav button {
  background: none;
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.gallery__lightbox-nav button:hover {
  background: rgba(255,255,255,0.1);
}

.gallery__lightbox-nav span {
  color: rgba(255,255,255,0.5);
  font-size: 12px;
}

@media (max-width: 768px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 140px;
  }

  .gallery__item--large,
  .gallery__item--wide {
    grid-column: span 1;
    grid-row: span 1;
  }

  .gallery__lightbox {
    padding: 20px;
  }

  .gallery__lightbox-img {
    height: 300px;
  }
}
```

- [ ] **Step 3: Write `Story.jsx`**

```jsx
import './Story.css';
import { timelinePhases } from '../data/timeline';
import Gallery from './Gallery';

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="story__intro">
        <p className="eyebrow">The Journey</p>
        <h2 className="section-title">From sketch to <em>reality</em></h2>
        <p className="section-desc">
          A look behind the scenes at how TOOFTD evolved from a question about
          the future of entertainment to a tangible seating experience.
        </p>
      </div>

      <div className="story__timeline">
        {timelinePhases.map((phase, i) => (
          <div key={i} className="story__item">
            <div className={`story__dot ${i < timelinePhases.length - 1 ? 'story__dot--filled' : ''}`} />
            <p className="story__phase">{phase.phase} · {phase.label}</p>
            <h3 className="story__item-title">{phase.title}</h3>
            <p className="story__item-desc">{phase.description}</p>
            <div className="story__images">
              {phase.images.map((img, j) => (
                <div key={j} className="story__image placeholder-img">
                  {img}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Gallery />
    </section>
  );
}
```

- [ ] **Step 4: Write `Story.css`**

```css
.story {
  padding: 72px 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.story__intro {
  text-align: center;
  margin-bottom: 48px;
}

.story__timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 40px;
}

.story__timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--moss), var(--sand));
}

.story__item {
  position: relative;
  margin-bottom: 48px;
  padding-left: 28px;
}

.story__dot {
  position: absolute;
  left: -40px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--cream);
  border: 2px solid var(--moss);
}

.story__dot--filled {
  background: var(--moss);
}

.story__phase {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 6px;
}

.story__item-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.story__item-desc {
  font-size: 12px;
  color: var(--stone);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 16px;
}

.story__images {
  display: flex;
  gap: 8px;
}

.story__image {
  flex: 1;
  height: 100px;
  border-radius: 8px;
  font-size: 8px;
}

@media (max-width: 768px) {
  .story {
    padding: 56px 20px;
  }

  .story__timeline {
    padding-left: 32px;
  }

  .story__dot {
    left: -32px;
  }

  .story__images {
    flex-direction: column;
  }

  .story__image {
    height: 80px;
  }
}
```

- [ ] **Step 5: Verify story and gallery**

```bash
npm run dev
```

Expected: Timeline with phases, photo grid, clicking opens lightbox with arrow navigation and keyboard support.

- [ ] **Step 6: Commit**

```bash
git add src/components/Story.jsx src/components/Story.css src/components/Gallery.jsx src/components/Gallery.css
git commit -m "feat: add story timeline and interactive photo gallery with lightbox"
```

---

### Task 9: Team Sections + Footer

**Files:**
- Modify: `src/components/ProductTeam.jsx`, `src/components/ProductTeam.css`, `src/components/DevTeam.jsx`, `src/components/DevTeam.css`, `src/components/Footer.jsx`, `src/components/Footer.css`

- [ ] **Step 1: Write `ProductTeam.jsx` and `ProductTeam.css`**

`ProductTeam.jsx`:
```jsx
import './ProductTeam.css';
import { productTeam } from '../data/team';

export default function ProductTeam() {
  return (
    <section id="team" className="product-team">
      <p className="eyebrow">The Creators</p>
      <h2 className="section-title">Meet the <em>team</em></h2>
      <p className="section-desc">
        The ACAD-445 product design team behind TOOFTD — five designers
        rethinking how spaces bring people together.
      </p>

      <div className="product-team__grid">
        {productTeam.map((member, i) => (
          <div key={i} className="product-team__card">
            <div className="product-team__photo">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                member.initial
              )}
            </div>
            <h4 className="product-team__name">{member.name}</h4>
            <p className="product-team__role">{member.role}</p>
            <p className="product-team__bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

`ProductTeam.css`:
```css
.product-team {
  padding: 72px 48px;
  background: var(--warm-white);
  text-align: center;
}

.product-team__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 48px auto 0;
}

.product-team__photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 16px;
  background: var(--fog);
  border: 3px solid var(--cream);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--sage);
  font-family: 'Playfair Display', serif;
  overflow: hidden;
}

.product-team__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-team__name {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  margin-bottom: 2px;
}

.product-team__role {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 8px;
  font-weight: 500;
}

.product-team__bio {
  font-size: 11px;
  color: var(--stone);
  line-height: 1.6;
  font-weight: 300;
}

@media (max-width: 768px) {
  .product-team {
    padding: 56px 20px;
  }

  .product-team__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .product-team__grid > :last-child {
    grid-column: 1 / -1;
    max-width: 200px;
    margin: 0 auto;
  }
}
```

- [ ] **Step 2: Write `DevTeam.jsx` and `DevTeam.css`**

`DevTeam.jsx`:
```jsx
import './DevTeam.css';
import { devTeam } from '../data/team';

export default function DevTeam() {
  return (
    <section className="dev-team">
      <p className="eyebrow">Built By</p>
      <h2 className="section-title">The <em>website</em> team</h2>
      <p className="section-desc">
        The Dev1 team that designed and built this site — from concept to code.
      </p>

      <div className="dev-team__grid">
        {devTeam.map((member, i) => (
          <div key={i} className="dev-team__card">
            <div className="dev-team__photo">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                member.initial
              )}
            </div>
            <h4 className="dev-team__name">{member.name}</h4>
            <span className="dev-team__role-tag">{member.role}</span>
            <div className="dev-team__tasks">
              {member.tasks.map((task, j) => (
                <p key={j} className="dev-team__task">{task}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

`DevTeam.css`:
```css
.dev-team {
  padding: 72px 48px;
  text-align: center;
}

.dev-team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 48px auto 0;
}

.dev-team__card {
  background: var(--warm-white);
  border-radius: 12px;
  padding: 28px 20px;
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.3s;
}

.dev-team__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.06);
}

.dev-team__photo {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: 0 auto 14px;
  background: var(--fog);
  border: 2px solid var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--sage);
  font-family: 'Playfair Display', serif;
  overflow: hidden;
}

.dev-team__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dev-team__name {
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  margin-bottom: 6px;
}

.dev-team__role-tag {
  display: inline-block;
  padding: 3px 10px;
  background: var(--fog);
  border-radius: 3px;
  font-size: 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--moss);
  font-weight: 500;
  margin-bottom: 14px;
}

.dev-team__tasks {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dev-team__task {
  font-size: 10px;
  color: var(--stone);
  line-height: 1.5;
  padding-left: 14px;
  position: relative;
}

.dev-team__task::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--sage);
  font-size: 9px;
}

@media (max-width: 768px) {
  .dev-team {
    padding: 56px 20px;
  }

  .dev-team__grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}
```

- [ ] **Step 3: Write `Footer.jsx` and `Footer.css`**

`Footer.jsx`:
```jsx
import './Footer.css';

const links = [
  { id: 'product', label: 'Product' },
  { id: 'market', label: 'Market' },
  { id: 'invest', label: 'Invest' },
  { id: 'story', label: 'Story' },
  { id: 'team', label: 'Team' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">TOOFTD</div>
      <div className="footer__links">
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </div>
      <p className="footer__copy">
        ACAD-445 · Designing Products III · Spring 2026 · USC
      </p>
    </footer>
  );
}
```

`Footer.css`:
```css
.footer {
  padding: 48px;
  background: var(--bark);
  text-align: center;
}

.footer__logo {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 4px;
  color: var(--sage);
  margin-bottom: 20px;
}

.footer__links {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.footer__links a {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  transition: color 0.3s;
}

.footer__links a:hover {
  color: rgba(255,255,255,0.7);
}

.footer__copy {
  font-size: 10px;
  color: rgba(255,255,255,0.2);
}

@media (max-width: 768px) {
  .footer {
    padding: 32px 20px;
  }

  .footer__links {
    gap: 16px;
  }
}
```

- [ ] **Step 4: Verify all sections render**

```bash
npm run dev
```

Expected: Full site scrollable with all 7 sections + footer. Nav scroll spy works. All interactive features functional.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProductTeam.jsx src/components/ProductTeam.css src/components/DevTeam.jsx src/components/DevTeam.css src/components/Footer.jsx src/components/Footer.css
git commit -m "feat: add product team, dev team, and footer sections"
```

---

### Task 10: Final Polish + Push to GitHub

- [ ] **Step 1: Update `.gitignore`**

```
node_modules/
dist/
.superpowers/
.DS_Store
```

- [ ] **Step 2: Build and verify production build**

```bash
cd /Users/weston/tooftd && npm run build
```

Expected: `dist/` folder generated with no errors.

- [ ] **Step 3: Commit everything and push**

```bash
git add -A
git commit -m "feat: complete TOOFTD product website with all sections and interactive features"
git branch -M main
git push -u origin main
```

- [ ] **Step 4: Verify GitHub repo**

```bash
gh repo view west0nG/tooftd --web
```

Expected: Public repo with all source code visible.
