import { useState } from 'react';
import { ArrowRight } from '../components/icons';
import './PreorderPage.css';

const COLORS = [
  { id: 'green', hex: '#35DF46', label: 'Turf green' },
  { id: 'cyan', hex: '#2DE9E9', label: 'Aqua' },
  { id: 'blue', hex: '#59A7F0', label: 'Sky' },
  { id: 'purple', hex: '#612CF3', label: 'Ultraviolet' },
];

const GALLERY = [
  { id: 'main', src: '/images/product-main.png' },
  { id: 'gradient', src: '/images/product-gradient.png' },
  { id: 'shag', src: '/images/product-shag.png' },
];

const LOREM = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';

const SPECS = [
  ['Dimensions', '16 × 17 × 6 ft'],
  ['Material', 'Recycled turf fibre'],
  ['Care', 'Water vacuum only'],
  ['Accessibility', 'Not wheelchair-friendly'],
];

export default function PreorderPage() {
  const [activeThumb, setActiveThumb] = useState('main');
  const [color, setColor] = useState('blue');

  const mainImage = GALLERY.find(g => g.id === activeThumb).src;
  const activeColor = COLORS.find(c => c.id === color);

  return (
    <div className="page po-page">
      <section className="section po-section">
        <div className="po">
          <div className="po__gallery">
            <div className="po__main">
              <img src={mainImage} alt="Tooftd preview" key={mainImage} />
            </div>
            <div className="po__thumbs">
              {GALLERY.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`po-thumb${g.id === activeThumb ? ' is-active' : ''}`}
                  onClick={() => setActiveThumb(g.id)}
                  aria-label={`View ${g.id}`}
                >
                  <img src={g.src} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="po__info">
            <p className="eyebrow">Preorder</p>
            <h1 className="h-display">Preorder a Tooftd</h1>
            <p className="body-md">{LOREM}</p>

            <dl className="po-specs">
              {SPECS.map(([k, v]) => (
                <div className="po-specs__row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="po-colors-block">
              <div className="po-colors-block__head">
                <h3 className="po-colors-block__label">Color</h3>
                <span className="po-colors-block__value">{activeColor.label}</span>
              </div>
              <div className="po-colors" role="radiogroup" aria-label="Tooftd color">
                {COLORS.map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    role="radio"
                    aria-checked={color === c.id}
                    aria-label={c.label}
                    className={`po-color${color === c.id ? ' is-active' : ''}`}
                    style={{ '--chip': c.hex }}
                    onClick={() => setColor(c.id)}
                  />
                ))}
              </div>
            </div>

            <button type="button" className="btn po-checkout">
              <span>Checkout</span>
              <span className="btn__icon"><ArrowRight /></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
