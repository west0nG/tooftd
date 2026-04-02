import './Market.css';
import { competitors, matrixData } from '../data/competitors';
import RadarChart from './RadarChart';

function Matrix({ title, data }) {
  return (
    <div className="market__matrix">
      <p className="market__matrix-label">{title}</p>
      <div className="market__matrix-plot">
        <span className="market__axis-y market__axis-y--top">{data.yLabel.split(' → ')[0]}</span>
        <span className="market__axis-y market__axis-y--bottom">{data.yLabel.split(' → ')[1]}</span>
        <span className="market__axis-x market__axis-x--left">{data.xLabel.split(' → ')[0]}</span>
        <span className="market__axis-x market__axis-x--right">{data.xLabel.split(' → ')[1]}</span>
        {data.competitors.map((c, i) => (
          <div key={i} className="market__dot" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
            <span className="market__dot-label">{c.name}</span>
          </div>
        ))}
        <div
          className="market__dot market__dot--tooftd"
          style={{ left: `${data.tooftd.x}%`, top: `${data.tooftd.y}%` }}
        >
          <span className="market__dot-label market__dot-label--tooftd">TOOFTD</span>
        </div>
      </div>
    </div>
  );
}

export default function Market() {
  return (
    <section id="market" className="market">
      <div className="market__intro">
        <p className="eyebrow">The Opportunity</p>
        <h2 className="section-title">A market ready for <em>disruption</em></h2>
        <p className="section-desc">
          Traditional seating hasn't evolved. Floor culture is growing, but no product
          bridges the gap between casual floor seating and designed furniture.
        </p>
      </div>

      <div className="market__matrices">
        <Matrix title="Congestion vs. Capacity" data={matrixData.primary} />
        <Matrix title="Convention vs. Versatility" data={matrixData.secondary} />
      </div>

      <div className="market__competitors-section">
        <p className="eyebrow">Current Landscape</p>
        <h3 className="market__sub-title">What exists <em>today</em></h3>
        <div className="market__competitors">
          {competitors.slice(0, 3).map((c, i) => (
            <div key={i} className="market__comp-card">
              <div className="market__comp-img placeholder-img">Product Photo</div>
              <h4 className="market__comp-name">{c.name}</h4>
              <p className="market__comp-price">{c.price}</p>
              <p className="market__comp-desc">{c.description}</p>
              <span className="market__comp-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="market__radar-section">
        <h3 className="market__sub-title">Competitive <em>comparison</em></h3>
        <p className="market__radar-sub">Hover to compare across five key dimensions</p>
        <RadarChart />
      </div>
    </section>
  );
}
