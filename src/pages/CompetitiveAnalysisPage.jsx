import { useState } from 'react';
import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './CompetitiveAnalysisPage.css';

const AXES = {
  x: { left: 'Static', right: 'Playful' },
  y: { top: 'Communal', bottom: 'Solo' },
};

const COMPETITORS = [
  { id: 'a', name: 'Bean bag', x: 18, y: 72, desc: 'Plush but isolating' },
  { id: 'b', name: 'Public bench', x: 22, y: 24, desc: 'Communal, not soft' },
  { id: 'c', name: 'Couch', x: 34, y: 58, desc: 'Big, heavy, costly' },
  { id: 'd', name: 'Playmat', x: 68, y: 70, desc: 'Soft but lonely' },
  { id: 'e', name: 'Indoor lawn', x: 58, y: 34, desc: 'Communal but not weird' },
  { id: 'tooftd', name: 'Tooftd', x: 80, y: 18, desc: 'Soft, communal, weird.' },
];

const INSPIRATIONS = [
  'Japanese tatami lounges',
  'Airport sleep pods',
  'Shag carpet in 70s rec rooms',
  'Playground earth mounds',
];

export default function CompetitiveAnalysisPage() {
  const [hover, setHover] = useState(null);

  return (
    <div className="ca page">
      <div className="ca__inner">
        <header className="ca-head">
          <h1 className="section-title ca-head__title">Competitive analysis</h1>
          <p className="ca-head__sub">
            We mapped everything soft, everything communal, and everything
            weird. Only one thing sat in the corner we cared about.
          </p>
        </header>

        <section
          className="ca-matrix"
          onMouseLeave={() => setHover(null)}
        >
          <span className="ca-matrix__axis ca-matrix__axis--y-top">{AXES.y.top}</span>
          <span className="ca-matrix__axis ca-matrix__axis--y-bottom">{AXES.y.bottom}</span>
          <span className="ca-matrix__axis ca-matrix__axis--x-left">{AXES.x.left}</span>
          <span className="ca-matrix__axis ca-matrix__axis--x-right">{AXES.x.right}</span>
          <div className="ca-matrix__grid" aria-hidden="true" />
          <div className="ca-matrix__cross" aria-hidden="true" />
          {COMPETITORS.map((c) => (
            <button
              key={c.id}
              className={`ca-dot${c.id === 'tooftd' ? ' ca-dot--hero' : ''}${hover === c.id ? ' is-active' : ''}`}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              onMouseEnter={() => setHover(c.id)}
              onFocus={() => setHover(c.id)}
              aria-label={`${c.name}: ${c.desc}`}
            >
              <span className="ca-dot__bubble" />
              <span className="ca-dot__label">{c.name}</span>
            </button>
          ))}
          {hover && (
            <div
              className="ca-matrix__tooltip"
              style={{
                left: `${COMPETITORS.find(c => c.id === hover).x}%`,
                top: `${COMPETITORS.find(c => c.id === hover).y}%`,
              }}
            >
              {COMPETITORS.find(c => c.id === hover).desc}
            </div>
          )}
        </section>

        <section className="ca-split">
          <div className="ca-split__left">
            <h3 className="section-title">Nothing does X</h3>
            <p className="body-text">
              Bean bags are soft but solo. Benches are communal but rigid.
              Nothing in the market combines warm material, shared scale, and a
              little bit of surrealism &mdash; all at once.
            </p>
          </div>
          <div className="ca-split__right">
            <div className="ca-chips">
              {['bean bag', 'couch', 'public bench', 'playmat'].map((t) => (
                <span className="ca-chip" key={t}>{t}</span>
              ))}
            </div>
            <div className="ca-thumbs">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`ca-thumb ca-thumb--${i}`} aria-hidden="true" />
              ))}
            </div>
          </div>
        </section>

        <section className="ca-inspired">
          <div className="ca-inspired__image" aria-hidden="true" />
          <div className="ca-inspired__copy">
            <h3 className="section-title">Inspired by Y</h3>
            <p className="body-text">
              Tooftd borrows from low-to-the-ground seating, nostalgic
              textures, and outdoor shapes that invite people to cluster
              without thinking about it.
            </p>
            <ul className="ca-inspired__list">
              {INSPIRATIONS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>

        <section className="ca-big">
          <p className="ca-big__text">
            Not a chair. Not a rug. Not a cushion. A mound that makes people
            stop, sit, and actually talk to each other.
          </p>
        </section>

        <section className="ca-finale">
          <div className="ca-finale__stripe">
            <img src="/images/product-shag.png" alt="" />
          </div>
          <h2 className="section-title--lg ca-finale__title">Tooftd is different</h2>
        </section>

        <SoftFuzzyCTA />
      </div>
    </div>
  );
}
