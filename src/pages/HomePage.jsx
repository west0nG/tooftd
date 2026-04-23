import { Link } from 'react-router-dom';
import { ArrowRight, CircleArrowDown, Rotate3D } from '../components/icons';
import './HomePage.css';

const HERO_LEDE =
  'An indoor lawn, shaped for the way friends naturally sprawl, lean, and linger.';

const CONVERSATION_COPY =
  "Think of the last time a group of you ended up on a lawn — shoes off, shoulders touching, nobody in a hurry to stand up. Tooftd is that, made permanent. A soft, tufted landscape of gentle hills and slopes that invites people to lie down, face each other, and talk the way we used to talk outside.";

const FEATURES_LEDE =
  'Every inch of Tooftd is modeled on the things a real lawn does well — the give of the turf, the slope of a hill, the way a group naturally spreads out across it.';

const CARE_COPY =
  "We studied real lawns for two years — the density of spring grass, the give underfoot, the way a gentle slope invites you to lie across it instead of sit up straight. The result is a piece of furniture that feels like the outdoors remembered, built carefully enough to live with you for a long time.";

const FEATURES = [
  {
    title: 'The Sprawl',
    body:
      "No cushions to arrange, no seats to claim. Tooftd's contoured hills let everyone find their own patch of ground — just like they would on a real lawn.",
    image: '/images/glb-feature-1.png',
  },
  {
    title: 'Tuft by Tuft',
    body:
      'Every square foot is hand-tufted to feel like the first warm patch of grass of the spring — soft enough to nap on, dense enough to hold a dozen people.',
    image: '/images/glb-feature-2.png',
  },
  {
    title: 'Shape the Meadow',
    body:
      'Rearrange the hills into a long picnic strip, a quiet corner, or a single round clearing. Tooftd reshapes the way your living room gathers.',
    image: '/images/glb-feature-3.png',
  },
];

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
          <p className="hero__lede">{HERO_LEDE}</p>
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
            <p className="body-md">{CONVERSATION_COPY}</p>
            <Link to="/preorder" className="btn">
              <span>Preorder</span>
              <span className="btn__icon"><ArrowRight /></span>
            </Link>
          </div>

          <figure className="conv__media">
            <model-viewer
              class="conv__model"
              src="/models/mossy-hills.glb"
              alt="Tooftd modular grass mat 3D render"
              camera-controls
              auto-rotate
              auto-rotate-delay="800"
              rotation-per-second="14deg"
              interaction-prompt="none"
              shadow-intensity="1.1"
              shadow-softness="0.9"
              exposure="1.05"
              environment-image="neutral"
              camera-orbit="30deg 72deg 105%"
              field-of-view="28deg"
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
            <p className="body-md features__lede">{FEATURES_LEDE}</p>
          </header>

          <div className="features__grid">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-card__media">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="feature-card__body">
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="body-md">{feature.body}</p>
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
            <p className="body-md">{CARE_COPY}</p>
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
