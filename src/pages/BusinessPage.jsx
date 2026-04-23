import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/icons';
import './BusinessPage.css';

const HERO_LEDE =
  'For fifty years, living rooms have faced the TV, then the laptop, now the phone. Tooftd faces something older and more enduring: the lawn — a shape people have been gathering on since long before furniture existed.';

const LANDSCAPE_LEDE =
  'We mapped every category competing for the same floor space, and found no one borrowing from the one form people still instinctively gather on: a patch of grass.';

const DIFFERENCE_COPY =
  'Sectionals face screens. Beanbags vanish into corners. Gaming chairs are built for one. None of them feel like a sunny lawn — the one piece of ground people have always sprawled across together, shoes off, in no rush to leave.';

const INSPIRED_COPY =
  "We took the softness of a spring lawn, the slope of a hillside picnic, and the durability of stadium turf, and built them into a single modular surface. It feels familiar the moment you step onto it, because the body already knows what to do when there's grass underfoot.";

const COMPETITOR_THUMBS = [
  { src: '/images/competitor-1.png', name: 'The Sectional' },
  { src: '/images/competitor-2.png', name: 'The Beanbag' },
  { src: '/images/competitor-3.png', name: 'The Gaming Chair' },
];

export default function BusinessPage() {
  return (
    <div className="page business-page">
      <section className="section page-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Business</p>
          <h1 className="page-hero__title h-display">The business case</h1>
          <p className="body-lg page-hero__lede">{HERO_LEDE}</p>
        </div>
      </section>

      <section className="section section--mute">
        <div className="ca-matrix">
          <header className="ca-matrix__head">
            <h2 className="h-display">The landscape</h2>
            <p className="body-md ca-matrix__lede">{LANDSCAPE_LEDE}</p>
          </header>
          <div className="ca-matrix__frame">
            <img
              src="/images/competitor-matrix.png"
              alt="Competitive analysis matrix"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="ca-split">
          <div className="ca-split__copy">
            <h2 className="h-display">Nothing does it our way</h2>
            <p className="body-md">{DIFFERENCE_COPY}</p>
          </div>
          <div className="ca-split__grid">
            {COMPETITOR_THUMBS.map((t, i) => (
              <figure key={i} className="ca-thumb">
                <div className="ca-thumb__image">
                  <img src={t.src} alt={t.name} />
                </div>
                <figcaption className="ca-thumb__name">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mute">
        <div className="ca-split ca-split--reverse">
          <figure className="ca-inspired">
            <img src="/images/glb-wide.png" alt="Tooftd modular turf landscape" />
          </figure>
          <div className="ca-split__copy">
            <h2 className="h-display">Inspired by what works</h2>
            <p className="body-md">{INSPIRED_COPY}</p>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="cta-band">
          <h2 className="h-display cta-band__title">Tooftd is different.</h2>
          <Link to="/preorder" className="btn btn--light">
            <span>Preorder</span>
            <span className="btn__icon"><ArrowRight /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
