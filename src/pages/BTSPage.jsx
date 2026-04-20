import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/icons';
import './BTSPage.css';

const LOREM_SHORT = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque.';
const LOREM_LEDE = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';

function TeamCard() {
  return (
    <article className="team-card">
      <div className="team-card__photo" aria-hidden="true" />
      <div className="team-card__body">
        <h4 className="team-card__name">Name</h4>
        <p className="body-md">{LOREM_SHORT}</p>
      </div>
    </article>
  );
}

export default function BTSPage() {
  return (
    <div className="page bts-page">
      <section className="section page-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Behind the scenes</p>
          <h1 className="page-hero__title h-display">The team behind Tooftd</h1>
          <p className="body-lg page-hero__lede">{LOREM_LEDE}</p>
        </div>
      </section>

      <section className="section section--mute">
        <div className="team">
          <header className="team__head">
            <h2 className="h-display">Product team</h2>
            <p className="body-md team__lede">{LOREM_SHORT}</p>
          </header>
          <div className="team__grid">
            {Array.from({ length: 4 }).map((_, i) => <TeamCard key={i} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="team">
          <header className="team__head">
            <h2 className="h-display">Web team</h2>
            <p className="body-md team__lede">{LOREM_SHORT}</p>
          </header>
          <div className="team__grid">
            {Array.from({ length: 4 }).map((_, i) => <TeamCard key={i} />)}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="cta-band">
          <h2 className="h-display cta-band__title">
            Ready to join the conversation?
          </h2>
          <Link to="/preorder" className="btn btn--light">
            <span>Preorder</span>
            <span className="btn__icon"><ArrowRight /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
