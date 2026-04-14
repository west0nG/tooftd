import { useState } from 'react';
import ArrowRight from '../components/ArrowRight';
import './PreorderPage.css';

const COLORS = [
  { id: 'green', hex: '#35DF46' },
  { id: 'cyan', hex: '#2DE9E9' },
  { id: 'blue', hex: '#59A7F0' },
  { id: 'purple', hex: '#612CF3' },
];

const GALLERY = [
  { id: 'main', src: '/images/product-main.png' },
  { id: 'gradient', src: '/images/product-gradient.png' },
  { id: 'shag', src: '/images/product-shag.png' },
];

const LOREM = 'Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut sapien adipiscing augue donec pellentesque. Convallis ut quisque odio consectetur tortor.';

const SPECS = [
  'Dimensions: 16 x 17 x 6 ft',
  'Material: Lorem Ipsum',
  'use a water vaccum for cleaning',
  'Not wheel chair friendly',
];

export default function PreorderPage() {
  const [activeThumb, setActiveThumb] = useState('main');
  const [color, setColor] = useState('blue');

  const mainImage = GALLERY.find(g => g.id === activeThumb).src;

  return (
    <div className="po">
      <div className="po__inner">
        <div className="po-grid">
          <div className="po-gallery">
            <div className="po-gallery__main">
              <img src={mainImage} alt="" key={mainImage} />
            </div>
            <div className="po-gallery__thumbs">
              {GALLERY.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`po-thumb${g.id === activeThumb ? ' is-active' : ''}${g.id === 'shag' ? ' po-thumb--wide' : ''}`}
                  onClick={() => setActiveThumb(g.id)}
                  aria-label={`View ${g.id}`}
                >
                  <img src={g.src} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="po-info">
            <div className="po-info__head">
              <h1 className="section-title po-info__title">Preorder a Tooftd</h1>
              <p className="body-text">{LOREM}</p>
              <ul className="po-info__specs">
                {SPECS.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="po-colors-block">
              <h3 className="po-colors-block__label">Select Color</h3>
              <div className="po-colors" role="radiogroup" aria-label="Tooftd color">
                {COLORS.map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    role="radio"
                    aria-checked={color === c.id}
                    aria-label={c.id}
                    className={`po-color${color === c.id ? ' is-active' : ''}`}
                    style={{ '--chip': c.hex }}
                    onClick={() => setColor(c.id)}
                  />
                ))}
              </div>
            </div>

            <button type="button" className="btn po-checkout">
              <span>Checkout</span>
              <ArrowRight className="btn__arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
