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
