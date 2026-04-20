import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/icons';
import './CompetitiveAnalysisPage.css';

const LOREM_LONG = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';
const LOREM_SHORT = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque.';

const COMPETITOR_THUMBS = [
  { src: '/images/competitor-1.png', name: 'Competitor A' },
  { src: '/images/competitor-2.png', name: 'Competitor B' },
  { src: '/images/competitor-3.png', name: 'Competitor C' },
];

export default function CompetitiveAnalysisPage() {
  return (
    <div className="page ca-page">
      <section className="section page-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Research</p>
          <h1 className="page-hero__title h-display">Competitive analysis</h1>
          <p className="body-lg page-hero__lede">{LOREM_LONG}</p>
        </div>
      </section>

      <section className="section section--mute">
        <div className="ca-matrix">
          <header className="ca-matrix__head">
            <h2 className="h-display">The landscape</h2>
            <p className="body-md ca-matrix__lede">{LOREM_SHORT}</p>
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
            <p className="body-md">{LOREM_LONG}</p>
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
            <img src="/images/product-shag.png" alt="Inspiration" />
          </figure>
          <div className="ca-split__copy">
            <h2 className="h-display">Inspired by what works</h2>
            <p className="body-md">{LOREM_LONG}</p>
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
