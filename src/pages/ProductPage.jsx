import './ProductPage.css';

export default function ProductPage() {
  return (
    <div className="product-page">
      {/* Overview */}
      <section className="pp__hero">
        <p className="eyebrow">[Investor Overview]</p>
        <h1 className="pp__title">[Product Name]: <em>[Value Proposition]</em></h1>
        <p className="section-desc">
          [Elevator pitch — 2-3 sentences summarizing the product opportunity
          for investors. Content pending from client.]
        </p>
      </section>

      {/* Product Details */}
      <section className="pp__section">
        <p className="eyebrow">[The Product]</p>
        <h2 className="section-title">[Product <em>Details</em>]</h2>
        <div className="pp__two-col">
          <div className="pp__product-img placeholder-img">
            [Product Diagram / Photo]
          </div>
          <div className="pp__product-info">
            <h4>[Component 1]</h4>
            <p>[Description of component 1. Pending from client.]</p>
            <h4>[Component 2]</h4>
            <p>[Description of component 2. Pending from client.]</p>
            <h4>[Component 3]</h4>
            <p>[Description of component 3. Pending from client.]</p>
          </div>
        </div>
      </section>

      {/* Business Model Canvas */}
      <section className="pp__section pp__section--alt">
        <p className="eyebrow">[Business Model]</p>
        <h2 className="section-title">[Business Model <em>Canvas</em>]</h2>
        <p className="section-desc">
          [Overview of the core business model. Content pending from client.]
        </p>
        <div className="pp__bmc">
          <div className="pp__bmc-row">
            <div className="pp__bmc-cell pp__bmc-cell--tall">
              <span className="pp__bmc-label">[Key Partners]</span>
              <p>[Pending from client]</p>
            </div>
            <div className="pp__bmc-col">
              <div className="pp__bmc-cell">
                <span className="pp__bmc-label">[Key Activities]</span>
                <p>[Pending from client]</p>
              </div>
              <div className="pp__bmc-cell">
                <span className="pp__bmc-label">[Key Resources]</span>
                <p>[Pending from client]</p>
              </div>
            </div>
            <div className="pp__bmc-cell pp__bmc-cell--tall">
              <span className="pp__bmc-label">[Value Propositions]</span>
              <p>[Pending from client]</p>
            </div>
            <div className="pp__bmc-col">
              <div className="pp__bmc-cell">
                <span className="pp__bmc-label">[Customer Relationships]</span>
                <p>[Pending from client]</p>
              </div>
              <div className="pp__bmc-cell">
                <span className="pp__bmc-label">[Channels]</span>
                <p>[Pending from client]</p>
              </div>
            </div>
            <div className="pp__bmc-cell pp__bmc-cell--tall">
              <span className="pp__bmc-label">[Customer Segments]</span>
              <p>[Pending from client]</p>
            </div>
          </div>
          <div className="pp__bmc-row pp__bmc-row--bottom">
            <div className="pp__bmc-cell">
              <span className="pp__bmc-label">[Cost Structure]</span>
              <p>[Pending from client]</p>
            </div>
            <div className="pp__bmc-cell">
              <span className="pp__bmc-label">[Revenue Streams]</span>
              <p>[Pending from client]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis / Competitive Analysis */}
      <section className="pp__section">
        <p className="eyebrow">[Market Analysis]</p>
        <h2 className="section-title">[Market <em>Opportunity</em>]</h2>
        <p className="section-desc">
          [Overview of market size, trends, and opportunity.
          Content pending from client.]
        </p>
        <div className="pp__market-grid">
          <div className="pp__market-card">
            <span className="pp__market-num">[$ ##B]</span>
            <span className="pp__market-label">[Total Addressable Market]</span>
          </div>
          <div className="pp__market-card">
            <span className="pp__market-num">[##%]</span>
            <span className="pp__market-label">[Annual Growth Rate]</span>
          </div>
          <div className="pp__market-card">
            <span className="pp__market-num">[## M]</span>
            <span className="pp__market-label">[Target Consumers]</span>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="pp__section pp__section--alt">
        <p className="eyebrow">[Competitive Landscape]</p>
        <h2 className="section-title">[How We <em>Compare</em>]</h2>
        <p className="section-desc">
          [Competitive analysis highlights from stakeholder research.
          Content pending from client.]
        </p>
        <div className="pp__comp-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>[Competitor 1]</th>
                <th>[Competitor 2]</th>
                <th>[Competitor 3]</th>
                <th className="pp__highlight">TOOFTD</th>
              </tr>
            </thead>
            <tbody>
              {['[Feature 1]', '[Feature 2]', '[Feature 3]', '[Feature 4]', '[Feature 5]'].map(
                (f, i) => (
                  <tr key={i}>
                    <td>{f}</td>
                    <td>[—]</td>
                    <td>[—]</td>
                    <td>[—]</td>
                    <td className="pp__highlight">[—]</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Financial Projections / Pro Forma */}
      <section className="pp__section pp__section--dark">
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>[Financials Pro Forma]</p>
        <h2 className="section-title" style={{ color: '#fff' }}>
          [Invest in the <em>future</em>]
        </h2>
        <p className="section-desc" style={{ color: 'rgba(255,255,255,0.5)' }}>
          [Financial projections and pro forma data. Interactive charts will be
          implemented here. Content pending from client.]
        </p>
        <div className="pp__finance-grid">
          <div className="pp__finance-card">
            <h4>[Revenue Projections]</h4>
            <div className="placeholder-img" style={{ height: 200 }}>
              [Interactive Revenue Chart — JS Visualization Placeholder]
            </div>
          </div>
          <div className="pp__finance-card">
            <h4>[Cost vs Profit]</h4>
            <div className="placeholder-img" style={{ height: 200 }}>
              [Interactive Cost/Profit Chart — JS Visualization Placeholder]
            </div>
          </div>
        </div>
        <div className="pp__finance-grid" style={{ marginTop: 24 }}>
          <div className="pp__finance-card">
            <h4>[Units Sold Projection]</h4>
            <div className="placeholder-img" style={{ height: 200 }}>
              [Interactive Chart Placeholder]
            </div>
          </div>
          <div className="pp__finance-card">
            <h4>[ROI Projection]</h4>
            <div className="placeholder-img" style={{ height: 200 }}>
              [Interactive Chart Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pp__section">
        <p className="eyebrow">[Roadmap]</p>
        <h2 className="section-title">[From Concept to <em>Market</em>]</h2>
        <div className="pp__timeline">
          {['[Phase 1]', '[Phase 2]', '[Phase 3]', '[Phase 4]'].map((phase, i) => (
            <div key={i} className="pp__timeline-step">
              <div className="pp__timeline-dot" />
              <h4>{phase}</h4>
              <p>[Phase description. Content pending from client.]</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pp__cta">
        <h2 className="section-title">[Call to Action <em>Headline</em>]</h2>
        <p className="section-desc">
          [Investor-focused call to action. Content pending from client.]
        </p>
        <a className="btn-primary" href="mailto:placeholder@example.com">
          [Contact Us]
        </a>
      </section>
    </div>
  );
}
