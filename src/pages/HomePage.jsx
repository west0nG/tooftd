import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__hero-content">
          <div className="home__hero-text">
            <p className="eyebrow">[Tagline Placeholder]</p>
            <h1 className="home__title">
              [Headline]<br />meets <em>[keyword]</em>
            </h1>
            <p className="home__sub">
              [Brief product description — 1-2 sentences explaining what the product is
              and why it matters to the consumer. Content pending from client.]
            </p>
            <div className="home__ctas">
              <Link className="btn-primary" to="/product">Learn More</Link>
              <a className="btn-secondary" href="#features">See Features</a>
            </div>
          </div>
          <div className="home__hero-visual">
            <div className="home__hero-img placeholder-img">
              [Product Hero Image]
            </div>
          </div>
        </div>
        <div className="home__stats">
          <div className="home__stat">
            <span className="home__stat-num">[##]</span>
            <span className="home__stat-label">[Stat Label]</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-num">[##]</span>
            <span className="home__stat-label">[Stat Label]</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-num">[##]</span>
            <span className="home__stat-label">[Stat Label]</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-num">[##]</span>
            <span className="home__stat-label">[Stat Label]</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="home__features">
        <p className="eyebrow">[Section Label]</p>
        <h2 className="section-title">[Features <em>Headline</em>]</h2>
        <p className="section-desc">
          [Brief description of why these features matter to the consumer.
          Content pending from client.]
        </p>
        <div className="home__features-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="home__feature-card">
              <div className="home__feature-icon placeholder-img">[Icon]</div>
              <h4>[Feature {i} Title]</h4>
              <p>[Feature {i} description — a short sentence explaining the benefit
                to the consumer. Pending from client.]</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Photo Gallery */}
      <section className="home__gallery">
        <p className="eyebrow">[Gallery]</p>
        <h2 className="section-title">[Photo <em>Gallery</em>]</h2>
        <p className="section-desc">
          [Interactive photo gallery / slideshow showcasing the product and team.
          Content pending from client.]
        </p>
        <div className="home__gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="home__gallery-item placeholder-img">
              [Photo {i} — Interactive Gallery Placeholder]
            </div>
          ))}
        </div>
        <p className="home__gallery-note">
          [Interactive gallery with lightbox/slideshow will be implemented here.
          Photos pending from client.]
        </p>
      </section>

      {/* Customization */}
      <section className="home__customization">
        <p className="eyebrow">[Customize]</p>
        <h2 className="section-title">[Make It <em>Yours</em>]</h2>
        <p className="section-desc">
          [User customization feature with localStorage persistence.
          Implementation pending — e.g. product configurator, color scheme picker,
          or saved favorites.]
        </p>
        <div className="home__customization-placeholder placeholder-img">
          [Customization UI Placeholder — saved to localStorage]
        </div>
      </section>

      {/* CTA */}
      <section className="home__cta-section">
        <h2 className="section-title">[Call to Action <em>Headline</em>]</h2>
        <p className="section-desc">
          [Motivating text encouraging the consumer to take the next step.
          Content pending from client.]
        </p>
        <Link className="btn-primary" to="/product">
          [CTA Button Text]
        </Link>
      </section>
    </div>
  );
}
