import './Product.css';
import Configurator from './Configurator';

export default function Product() {
  return (
    <section id="product" className="product">
      <div className="product__intro">
        <p className="eyebrow">The Product</p>
        <h2 className="section-title">A landscape for <em>living</em></h2>
        <p className="section-desc">
          Two components — a base rug and modular mounds — combine into infinite
          configurations for how your space gathers.
        </p>
      </div>

      <div className="product__hero-img placeholder-img">
        Product Photography Placeholder
      </div>

      <div className="product__features">
        <div className="product__feature">
          <div className="product__feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 14h6m-6 4h6m4-4h6m-6 4h6M4 6l8-3 8 3" />
              <path d="M4 6v14m16-14v14" />
            </svg>
          </div>
          <div className="product__feature-text">
            <h4>Modular</h4>
            <p>Rearrange mounds to create new layouts for movie night, game day, or quiet reading.</p>
          </div>
        </div>
        <div className="product__feature">
          <div className="product__feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="product__feature-text">
            <h4>6–12 People</h4>
            <p>Comfortably seats groups without the rigidity of traditional furniture arrangements.</p>
          </div>
        </div>
        <div className="product__feature">
          <div className="product__feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="product__feature-text">
            <h4>3-Layer Build</h4>
            <p>Shaggy carpet top, foam cushion middle, rubber grip base — engineered for comfort and stability.</p>
          </div>
        </div>
      </div>

      <div className="product__materials">
        <div className="product__materials-diagram">
          <div className="product__layer product__layer--top">
            <div className="product__layer-color" style={{ background: 'linear-gradient(135deg, #8bc34a, #689f38)' }} />
            <div className="product__layer-info">
              <span className="product__layer-name">Shaggy Carpet</span>
              <span className="product__layer-detail">Soft texture top layer</span>
            </div>
          </div>
          <div className="product__layer">
            <div className="product__layer-color" style={{ background: 'linear-gradient(135deg, #e8e0d4, #c8b89a)' }} />
            <div className="product__layer-info">
              <span className="product__layer-name">Foam Cushion</span>
              <span className="product__layer-detail">Support & comfort middle</span>
            </div>
          </div>
          <div className="product__layer">
            <div className="product__layer-color" style={{ background: 'linear-gradient(135deg, #5d5d5d, #3d3d3d)' }} />
            <div className="product__layer-info">
              <span className="product__layer-name">Rubber Grip Base</span>
              <span className="product__layer-detail">Non-slip foundation</span>
            </div>
          </div>
        </div>
        <div className="product__materials-text">
          <p className="eyebrow">Construction</p>
          <h3>Engineered for <em>comfort</em></h3>
          <p>
            Each mound is independently constructed with a foam core that distributes
            weight evenly. The shaggy carpet surface invites touch while the rubber
            base keeps everything anchored.
          </p>
          <p>
            The base rug and mounds connect seamlessly through material interlocking —
            designed as a unit, but each piece stands alone.
          </p>
        </div>
      </div>

      <Configurator />
    </section>
  );
}
