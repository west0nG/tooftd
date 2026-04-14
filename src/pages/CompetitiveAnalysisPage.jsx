import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './CompetitiveAnalysisPage.css';

const LOREM_LONG = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';

const COMPETITOR_THUMBS = [
  '/images/competitor-1.png',
  '/images/competitor-2.png',
  '/images/competitor-3.png',
  '/images/competitor-1.png',
];

export default function CompetitiveAnalysisPage() {
  return (
    <div className="ca">
      <div className="ca__inner">
        <section className="ca-matrix-block">
          <h2 className="section-title ca-matrix-block__title">
            Competitive analysis
          </h2>
          <div className="ca-matrix-frame">
            <img
              src="/images/competitor-matrix.png"
              alt="Competitive analysis matrix"
              className="ca-matrix-frame__img"
            />
          </div>
        </section>

        <section className="ca-nothing">
          <div className="ca-nothing__copy">
            <h3 className="section-title">Nothing does X</h3>
            <p className="body-text">{LOREM_LONG}</p>
          </div>
          <div className="ca-nothing__thumbs">
            {COMPETITOR_THUMBS.map((src, i) => (
              <div key={i} className="ca-thumb">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </section>

        <section className="ca-inspired">
          <div className="ca-inspired__image" aria-hidden="true" />
          <div className="ca-inspired__copy">
            <h3 className="section-title">Inspired by Y</h3>
            <p className="body-text">{LOREM_LONG}</p>
          </div>
        </section>

        <section className="ca-big">
          <p className="ca-big__text">
            {LOREM_LONG} {LOREM_LONG}
          </p>
        </section>

        <section className="ca-finale">
          <div className="ca-finale__strip">
            <img src="/images/product-shag.png" alt="" />
          </div>
          <h2 className="ca-finale__title">Tooftd is different</h2>
        </section>

        <SoftFuzzyCTA />
      </div>
    </div>
  );
}
