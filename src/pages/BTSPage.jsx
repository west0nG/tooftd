import { useState } from 'react';
import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './BTSPage.css';

const productTeam = [
  { name: 'Aria Okafor', role: 'Industrial design', hue: 96 },
  { name: 'Jun Park', role: 'Materials & texture', hue: 196 },
  { name: 'Lena Ruiz', role: 'Prototyping lead', hue: 262 },
  { name: 'Mira Shah', role: 'Ergonomics', hue: 26 },
];

const webTeam = [
  { name: 'Weston Y.', role: 'Frontend & build', hue: 214 },
  { name: 'Cecilia L.', role: 'Design system', hue: 306 },
  { name: 'Robin Chen', role: 'Copy & brand voice', hue: 146 },
  { name: 'Skye Patel', role: 'Interaction + motion', hue: 34 },
];

function MemberCard({ name, role, hue, index }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`bts-card ${open ? 'is-open' : ''}`}
      style={{ '--hue': hue, animationDelay: `${index * 60}ms` }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      <div className="bts-card__photo" aria-hidden="true">
        <span className="bts-card__initial">
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div className="bts-card__body">
        <h4 className="bts-card__name">{name}</h4>
        <p className="bts-card__role">{role}</p>
        <p className="bts-card__bio">
          Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut
          sapien adipiscing augue donec.
        </p>
      </div>
    </article>
  );
}

export default function BTSPage() {
  return (
    <div className="bts page">
      <div className="bts__inner">
        <section className="bts-section">
          <div className="bts-section__badge">
            <img src="/images/product-gradient.png" alt="" aria-hidden="true" />
          </div>
          <h2 className="section-title bts-section__title">Product team</h2>
          <div className="bts-grid">
            {productTeam.map((m, i) => (
              <MemberCard key={m.name} {...m} index={i} />
            ))}
          </div>
        </section>

        <section className="bts-section">
          <div className="bts-section__badge bts-section__badge--screen">
            <img src="/images/logo-ft.png" alt="" aria-hidden="true" />
          </div>
          <h2 className="section-title bts-section__title">Web Team</h2>
          <div className="bts-grid">
            {webTeam.map((m, i) => (
              <MemberCard key={m.name} {...m} index={i} />
            ))}
          </div>
        </section>

        <section className="bts-process">
          <h3 className="bts-process__label">Behind the scenes</h3>
          <p className="bts-process__title">
            Six weeks of shaping foam, testing fabrics, and arguing about the
            right kind of soft.
          </p>
          <div className="bts-process__grid">
            <figure className="bts-process__card">
              <div className="bts-process__visual bts-process__visual--one" />
              <figcaption>Mound structure — weight distribution</figcaption>
            </figure>
            <figure className="bts-process__card">
              <div className="bts-process__visual bts-process__visual--two" />
              <figcaption>Base carpet — interlocking layers</figcaption>
            </figure>
            <figure className="bts-process__card">
              <div className="bts-process__visual bts-process__visual--three" />
              <figcaption>Shaggy top — the weird part</figcaption>
            </figure>
          </div>
        </section>

        <SoftFuzzyCTA />
      </div>
    </div>
  );
}
