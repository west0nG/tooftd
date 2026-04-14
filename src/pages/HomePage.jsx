import { Link } from 'react-router-dom';
import ArrowRight from '../components/ArrowRight';
import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './HomePage.css';

const LOREM = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';

export default function HomePage() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__stage">
          <img
            src="/images/product-gradient.png"
            alt=""
            aria-hidden="true"
            className="home-hero__platform"
          />
          <div className="home-hero__content">
            <img
              src="/images/logo-ft.png"
              alt="Tooftd"
              className="home-hero__logo"
            />
            <Link to="/preorder" className="btn">
              <span>Preorder</span>
              <ArrowRight className="btn__arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-block">
        <div className="home-block__square">
          <img src="/images/product-main.png" alt="" />
        </div>
        <div className="home-block__copy">
          <h2 className="section-title">Tooftd is a place for conversation</h2>
          <p className="body-text">{LOREM}</p>
          <Link to="/preorder" className="btn">
            <span>Preorder</span>
            <ArrowRight className="btn__arrow" />
          </Link>
        </div>
        <div className="home-block__strip">
          <img src="/images/product-shag.png" alt="" />
        </div>
      </section>

      <section className="home-split">
        <div className="home-split__copy">
          <h2 className="section-title">Don&rsquo;t stare at the screen</h2>
          <p className="body-text">{LOREM}</p>
          <Link to="/bts" className="btn">
            <span>Behind the scenes</span>
            <ArrowRight className="btn__arrow" />
          </Link>
        </div>
        <div className="home-split__photo">
          <img src="/images/img-0336.png" alt="" />
        </div>
      </section>

      <SoftFuzzyCTA />
    </div>
  );
}
