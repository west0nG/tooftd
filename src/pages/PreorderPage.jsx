import { useState } from 'react';
import ArrowRight from '../components/ArrowRight';
import './PreorderPage.css';

const COLORS = [
  { id: 'green', label: 'Moss green', hex: '#35DF46' },
  { id: 'deepblue', label: 'Night blue', hex: '#27435E' },
  { id: 'cyan', label: 'Lagoon', hex: '#2DE9E9' },
  { id: 'blue', label: 'Sky', hex: '#59A7F0' },
  { id: 'purple', label: 'Electric', hex: '#612CF3' },
];

const GALLERY = [
  { src: '/images/product-main.png', alt: 'Tooftd lounge view' },
  { src: '/images/product-gradient.png', alt: 'Tooftd top-down' },
  { src: '/images/product-shag.png', alt: 'Tooftd shaggy texture' },
];

const SPECS = [
  'Dimensions: 16 × 17 × 6 ft',
  'Material: Wool blend + recycled foam core',
  'Clean with a water vacuum — no harsh detergents',
  'Not wheelchair friendly — transfer required to enter',
];

export default function PreorderPage() {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState('blue');
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(null);

  const handleCheckout = (e) => {
    e.preventDefault();
    const picked = COLORS.find(c => c.id === color);
    setToast(`Reserved ${qty} × Tooftd in ${picked.label}`);
    setTimeout(() => setToast(null), 2400);
  };

  return (
    <div className="po page">
      <div className="po__inner">
        <div className="po-grid">
          <section className="po-gallery" aria-label="Product gallery">
            <div className="po-gallery__main">
              <img
                src={GALLERY[active].src}
                alt={GALLERY[active].alt}
                key={active}
              />
              <div
                className="po-gallery__tint"
                style={{ background: COLORS.find(c => c.id === color).hex }}
                aria-hidden="true"
              />
            </div>
            <div className="po-gallery__thumbs">
              {GALLERY.map((g, i) => (
                <button
                  key={g.src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`po-gallery__thumb${i === active ? ' is-active' : ''}`}
                  aria-label={`View ${g.alt}`}
                >
                  <img src={g.src} alt="" />
                </button>
              ))}
            </div>
          </section>

          <section className="po-info">
            <header className="po-info__head">
              <h1 className="section-title po-info__title">Preorder a Tooftd</h1>
              <p className="body-text">
                Made-to-order. Shipping begins late summer 2026. A $60 deposit
                holds your slot; the balance ($420) is charged before
                fabrication.
              </p>
              <ul className="po-info__specs">
                {SPECS.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </header>

            <form className="po-form" onSubmit={handleCheckout}>
              <div className="po-form__field">
                <h3 className="po-form__label">Select Color</h3>
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
                    >
                      <span />
                    </button>
                  ))}
                </div>
                <p className="po-form__hint">
                  {COLORS.find(c => c.id === color).label}
                </p>
              </div>

              <div className="po-form__field">
                <h3 className="po-form__label">Quantity</h3>
                <div className="po-qty">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease quantity"
                  >−</button>
                  <span>{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(Math.min(5, qty + 1))}
                    aria-label="Increase quantity"
                  >+</button>
                </div>
                <p className="po-form__hint">Limit 5 per household</p>
              </div>

              <div className="po-summary">
                <span>Subtotal</span>
                <strong>${(60 * qty).toLocaleString()}</strong>
              </div>

              <button type="submit" className="btn po-checkout">
                <span>Checkout</span>
                <ArrowRight className="btn__arrow" />
              </button>
            </form>
          </section>
        </div>

        {toast && (
          <div className="po-toast" role="status">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
