import { Link } from 'react-router-dom';
import { ArrowRight, CircleArrowDown, Rotate3D } from '../components/icons';
import './HomePage.css';

const LOREM_HERO = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing.';
const LOREM_LONG = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor. Lorem ipsum dolor sit amet consectetur.';
const LOREM_SHORT = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor. Lorem ipsum dolor sit.';
const LOREM_MED = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque.';

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero ----------------------------------------------------- */}
      <section className="hero">
        <div className="hero__media">
          <img
            className="hero__bg"
            src="/images/figma/hero-bg-7a7563.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="hero__letters"
            src="/images/figma/hero-letters-5d9aa3.png"
            alt="Tooftd lettering in fuzzy turf"
          />
          <div className="hero__overlay hero__overlay--top" />
          <div className="hero__overlay hero__overlay--bot" />
        </div>
        <div className="hero__foot">
          <p className="hero__lede">{LOREM_HERO}</p>
          <a
            href="#conversation"
            className="hero__scroll"
            aria-label="Scroll to content"
          >
            <CircleArrowDown size={96} />
          </a>
        </div>
      </section>

      {/* Section — A new place for conversation ------------------ */}
      <section id="conversation" className="section section--conv">
        <div className="conv">
          <div className="conv__copy">
            <h2 className="h-display">
              A new place for<br />conversation
            </h2>
            <p className="body-md">{LOREM_LONG}</p>
            <Link to="/preorder" className="btn">
              <span>Preorder</span>
              <span className="btn__icon"><ArrowRight /></span>
            </Link>
          </div>

          <figure className="conv__media">
            <img
              src="/images/figma/grass-mat-249300.png"
              alt="Tooftd grass mat"
              className="conv__mat"
            />
            <span className="conv__rotate" aria-hidden="true">
              <Rotate3D size={48} />
            </span>
          </figure>
        </div>
      </section>

      {/* Section — Features -------------------------------------- */}
      <section className="section section--mute section--features">
        <div className="features">
          <header className="features__head">
            <h2 className="h-display">Features</h2>
            <p className="body-md features__lede">{LOREM_MED}</p>
          </header>

          <div className="features__grid">
            {[0, 1, 2].map((i) => (
              <article key={i} className="feature-card">
                <div className="feature-card__media">
                  <img src="/images/figma/feature-card.png" alt="Open seating" />
                </div>
                <div className="feature-card__body">
                  <h3 className="feature-card__title">Open Seating</h3>
                  <p className="body-md">{LOREM_SHORT}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section — Developed with care --------------------------- */}
      <section className="section section--care">
        <div className="care">
          <figure className="care__media">
            <img src="/images/figma/grass-close-4c1299.png" alt="Grass texture detail" />
          </figure>
          <div className="care__copy">
            <h2 className="h-display">
              Developed with care<br />&amp; thoughtfulness
            </h2>
            <p className="body-md">{LOREM_LONG}</p>
            <Link to="/preorder" className="btn care__btn">
              <span>Preorder</span>
              <span className="btn__icon"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
