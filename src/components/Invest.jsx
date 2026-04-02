import { useState } from 'react';
import './Invest.css';
import { pitchStats, bmcData, proForma } from '../data/financials';
import { RevenueChart, MarginChart } from './FinancialCharts';

export default function Invest() {
  const [openBmc, setOpenBmc] = useState(null);
  const bmcKeys = Object.keys(bmcData);

  return (
    <section id="invest" className="invest">
      <div className="invest__pitch">
        <p className="invest__pitch-eyebrow">For Investors</p>
        <h2 className="invest__pitch-title">
          Invest in the future of <em>gathering</em>
        </h2>
        <p className="invest__pitch-sub">A growing addressable market with zero direct competitors</p>
        <div className="invest__pitch-stats">
          {pitchStats.map((s, i) => (
            <div key={i} className="invest__pitch-stat">
              <span className="invest__pitch-stat-num">{s.number}</span>
              <span className="invest__pitch-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="invest__bmc">
        <p className="eyebrow">Business Model</p>
        <h3 className="invest__sub-title">Business Model <em>Canvas</em></h3>

        {/* Desktop grid */}
        <div className="invest__bmc-grid">
          {bmcKeys.map((key) => (
            <div key={key} className="invest__bmc-cell">
              <h5>{key}</h5>
              <ul>
                {bmcData[key].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="invest__bmc-accordion">
          {bmcKeys.map((key, idx) => (
            <div key={key} className={`invest__bmc-acc-item ${openBmc === idx ? 'open' : ''}`}>
              <button onClick={() => setOpenBmc(openBmc === idx ? null : idx)}>
                {key}
                <span>{openBmc === idx ? '−' : '+'}</span>
              </button>
              {openBmc === idx && (
                <ul>
                  {bmcData[key].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="invest__financials">
        <p className="eyebrow">Financials</p>
        <h3 className="invest__sub-title">Projected <em>performance</em></h3>
        <div className="invest__charts">
          <RevenueChart />
          <MarginChart />
        </div>
      </div>

      <div className="invest__proforma">
        <p className="eyebrow">Pro Forma</p>
        <h3 className="invest__sub-title">Financial <em>projections</em></h3>
        <div className="invest__table-wrap">
          <table className="invest__table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1</th>
                <th>Year 2</th>
                <th>Year 3</th>
                <th>Year 5</th>
              </tr>
            </thead>
            <tbody>
              {proForma.map((row, i) => (
                <tr key={i}>
                  <td>{row.metric}</td>
                  <td className={row.y1.startsWith('−') ? 'negative' : ''}>{row.y1}</td>
                  <td>{row.y2}</td>
                  <td>{row.y3}</td>
                  <td className={row.metric === 'Net Profit' ? 'positive' : ''}>{row.y5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
