import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './BTSPage.css';

const LOREM_SHORT = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque.';

function TeamCard() {
  return (
    <article className="bts-card">
      <div className="bts-card__photo" aria-hidden="true" />
      <div className="bts-card__body">
        <h4 className="bts-card__name">Name</h4>
        <p className="bts-card__bio">{LOREM_SHORT}</p>
      </div>
    </article>
  );
}

export default function BTSPage() {
  return (
    <div className="bts">
      <div className="bts__inner">
        <section className="bts-section">
          <div className="bts-section__badge">
            <img src="/images/product-gradient.png" alt="" aria-hidden="true" />
          </div>
          <h2 className="section-title bts-section__title">Product team</h2>
          <div className="bts-grid">
            {Array.from({ length: 4 }).map((_, i) => <TeamCard key={i} />)}
          </div>
        </section>

        <section className="bts-section">
          <div className="bts-section__badge bts-section__badge--logo">
            <img src="/images/logo-ft.png" alt="" aria-hidden="true" />
          </div>
          <h2 className="section-title bts-section__title">Web Team</h2>
          <div className="bts-grid">
            {Array.from({ length: 4 }).map((_, i) => <TeamCard key={i} />)}
          </div>
        </section>

        <SoftFuzzyCTA />
      </div>
    </div>
  );
}
