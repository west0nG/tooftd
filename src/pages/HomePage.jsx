import { Link } from 'react-router-dom';
import ArrowRight from '../components/ArrowRight';
import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home page">
      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden="true" />
        <div className="home-hero__content">
          <span className="home-hero__mark">/To͞0 * ft/</span>
          <h1 className="home-hero__title">
            <span>Tooftd.</span>
            <span className="home-hero__title-alt">Soft, fuzzy, weird.</span>
          </h1>
          <p className="home-hero__tagline">
            A communal mound designed to slow you down &mdash; meet, lounge,
            linger. Pronounced like the word, not the letters.
          </p>
          <Link to="/preorder" className="btn">
            <span>Preorder</span>
            <ArrowRight className="btn__arrow" />
          </Link>
        </div>
      </section>

      <section className="home-conversation">
        <div className="home-conversation__media">
          <img src="/images/product-main.png" alt="Tooftd installation" />
        </div>
        <div className="home-conversation__grid">
          <div className="home-conversation__copy">
            <h2 className="section-title">Tooftd is a place for conversation</h2>
            <p className="body-text">
              Sized for five, soft for one. The mound invites you off your feet
              and onto a surface that actually wants you there &mdash; no screens
              buzzing, no tables between you.
            </p>
            <Link to="/preorder" className="btn">
              <span>Preorder</span>
              <ArrowRight className="btn__arrow" />
            </Link>
          </div>
          <div className="home-conversation__stripe">
            <img src="/images/product-shag.png" alt="Carpet texture" />
          </div>
        </div>
      </section>

      <section className="home-screens">
        <div className="home-screens__copy">
          <h2 className="section-title">Don&rsquo;t stare at the screen</h2>
          <p className="body-text">
            Phones down, shoes off. Tooftd is built around the idea that the
            room you&rsquo;re in &mdash; and the people around you &mdash;
            deserve your full attention, even for ten quiet minutes.
          </p>
          <Link to="/bts" className="btn">
            <span>Behind the scenes</span>
            <ArrowRight className="btn__arrow" />
          </Link>
        </div>
        <div className="home-screens__photo">
          <img src="/images/img-0336.png" alt="Studio moment" />
        </div>
      </section>

      <SoftFuzzyCTA />
    </div>
  );
}
