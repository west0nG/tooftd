import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Rotate3D } from '../components/icons';
import Toast from '../components/Toast';
import './PreorderPage.css';

function hexToLinearRGBA(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLin = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return [toLin(r), toLin(g), toLin(b), 1];
}

const COLORS = [
  { id: 'green', hex: '#35DF46', label: 'Turf green' },
  { id: 'cyan', hex: '#2DE9E9', label: 'Aqua' },
  { id: 'blue', hex: '#59A7F0', label: 'Sky' },
  { id: 'purple', hex: '#612CF3', label: 'Ultraviolet' },
];

const PRODUCT_COPY =
  'A 16 × 17 foot modular lawn of hand-tufted hills — soft enough to nap on, sturdy enough to hold a dozen friends. Ships flat, reconfigures in minutes, and turns any living room into a picnic, a theater-in-the-round, or a quiet afternoon in the grass.';

const SPECS = [
  ['Dimensions', '16 × 17 × 6 ft'],
  ['Material', 'Recycled turf fibre'],
  ['Care', 'Water vacuum only'],
  ['Accessibility', 'Not wheelchair-friendly'],
];

export default function PreorderPage() {
  const [color, setColor] = useState('green');
  const [toastOpen, setToastOpen] = useState(false);
  const modelRef = useRef(null);

  const activeColor = COLORS.find(c => c.id === color);

  useEffect(() => {
    const mv = modelRef.current;
    if (!mv) return;
    const apply = () => {
      const rgba = hexToLinearRGBA(activeColor.hex);
      mv.model?.materials.forEach((m) => {
        // Drop the baked-in green baseColorTexture so the factor becomes the
        // apparent color of the turf; we keep the tufting via geometry and
        // the normal map which isn't affected here.
        m.pbrMetallicRoughness.baseColorTexture?.setTexture?.(null);
        m.pbrMetallicRoughness.setBaseColorFactor(rgba);
      });
    };
    if (mv.loaded) apply();
    else mv.addEventListener('load', apply, { once: true });
    return () => mv.removeEventListener('load', apply);
  }, [activeColor]);

  return (
    <div className="page po-page">
      <section className="section po-section">
        <div className="po">
          <div className="po__gallery">
            <div className="po__main">
              <model-viewer
                ref={modelRef}
                class="po__model"
                src="/models/mossy-hills.glb"
                alt="Tooftd modular grass mat 3D render"
                camera-controls
                auto-rotate
                auto-rotate-delay="800"
                rotation-per-second="14deg"
                interaction-prompt="none"
                shadow-intensity="1.1"
                shadow-softness="0.9"
                exposure="1.05"
                environment-image="neutral"
                camera-orbit="30deg 72deg 105%"
                field-of-view="28deg"
              />
              <span className="po__rotate" aria-hidden="true">
                <Rotate3D size={48} />
              </span>
            </div>
          </div>

          <div className="po__info">
            <p className="eyebrow">Preorder</p>
            <h1 className="h-display">Preorder a Tooftd</h1>
            <p className="body-md">{PRODUCT_COPY}</p>

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

            <button
              type="button"
              className="btn po-checkout"
              onClick={() => setToastOpen(true)}
            >
              <span>Checkout</span>
              <span className="btn__icon"><ArrowRight /></span>
            </button>
          </div>
        </div>
      </section>
      <Toast
        open={toastOpen}
        message="You've joined the waitlist — we'll email you when Tooftd ships."
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
}
