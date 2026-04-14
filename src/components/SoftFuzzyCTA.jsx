import { Link } from 'react-router-dom';
import ArrowRight from './ArrowRight';
import './SoftFuzzyCTA.css';

export default function SoftFuzzyCTA() {
  return (
    <section className="cta">
      <div className="cta__frame">
        <div className="cta__inner">
          <div className="cta__bg" aria-hidden="true" />
          <div className="cta__content">
            <h2 className="cta__title">Soft, fuzzy, and weird.</h2>
            <Link to="/preorder" className="btn btn--ghost cta__btn">
              <span>Preorder</span>
              <ArrowRight className="btn__arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
