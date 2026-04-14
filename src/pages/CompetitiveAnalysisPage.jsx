import SoftFuzzyCTA from '../components/SoftFuzzyCTA';
import './CompetitiveAnalysisPage.css';

const LOREM_LONG = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';

export default function CompetitiveAnalysisPage() {
  return (
    <div className="ca">
      <div className="ca__inner">
        <section className="ca-matrix-block">
          <h2 className="section-title ca-matrix-block__title">
            Competitive analysis
          </h2>
          <div className="ca-matrix-frame">
            <div className="ca-matrix-board" aria-hidden="true">
              <div className="ca-matrix-board__axis ca-matrix-board__axis--top">
                Communal
              </div>
              <div className="ca-matrix-board__axis ca-matrix-board__axis--bottom">
                Solo
              </div>
              <div className="ca-matrix-board__axis ca-matrix-board__axis--left">
                Static
              </div>
              <div className="ca-matrix-board__axis ca-matrix-board__axis--right">
                Playful
              </div>
              <div className="ca-matrix-board__tiles">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={`ca-tile ca-tile--${(i % 6) + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ca-nothing">
          <div className="ca-nothing__copy">
            <h3 className="section-title">Nothing does X</h3>
            <p className="body-text">{LOREM_LONG}</p>
          </div>
          <div className="ca-nothing__thumbs">
            <div className="ca-thumb ca-thumb--1" aria-hidden="true" />
            <div className="ca-thumb ca-thumb--2" aria-hidden="true" />
            <div className="ca-thumb ca-thumb--3" aria-hidden="true" />
            <div className="ca-thumb ca-thumb--4" aria-hidden="true" />
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
