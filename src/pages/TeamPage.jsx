import './TeamPage.css';

const stakeholders = [
  { initial: 'A', name: '[Stakeholder Name]', role: '[Role / Title]' },
  { initial: 'B', name: '[Stakeholder Name]', role: '[Role / Title]' },
  { initial: 'C', name: '[Stakeholder Name]', role: '[Role / Title]' },
  { initial: 'D', name: '[Stakeholder Name]', role: '[Role / Title]' },
];

export default function TeamPage() {
  return (
    <div className="team-page">
      {/* Hero */}
      <section className="tp__hero">
        <p className="eyebrow">[The Creators]</p>
        <h1 className="tp__title">Meet the <em>[Team]</em></h1>
        <p className="section-desc">
          [Introduction to the product stakeholders from ACAD-445 — why they are
          the right people to create this product, attract investors, and transform
          their market. Content pending from client.]
        </p>
      </section>

      {/* Stakeholder Cards */}
      <section className="tp__grid-section">
        <div className="tp__grid">
          {stakeholders.map((member, i) => (
            <div key={i} className="tp__card">
              <div className="tp__photo placeholder-img">
                {member.initial}
              </div>
              <h4 className="tp__name">{member.name}</h4>
              <span className="tp__role">{member.role}</span>
              <p className="tp__bio">
                [Short bio — why this person is uniquely suited to create the product
                and lead in this market. Content pending from client.]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="tp__bts">
        <p className="eyebrow">[Behind the Scenes]</p>
        <h2 className="section-title">[The Making of <em>[Product Name]</em>]</h2>
        <p className="section-desc">
          [Photos, details, and anecdotes from the product development process.
          Content pending from client.]
        </p>

        <div className="tp__bts-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="tp__bts-item">
              <div className="tp__bts-photo placeholder-img">
                [Behind the Scenes Photo {i}]
              </div>
              <p className="tp__bts-caption">
                [Caption / anecdote about this moment in the product development
                process. Pending from client.]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="tp__story">
        <p className="eyebrow">[Our Story]</p>
        <h2 className="section-title">[How It <em>Started</em>]</h2>
        <div className="tp__story-content">
          <div className="tp__story-img placeholder-img">
            [Team Photo]
          </div>
          <div className="tp__story-text">
            <p>
              [Team origin story — how the team came together and what inspired
              the project. Content pending from client.]
            </p>
            <p>
              [Additional context about the team's vision and goals.
              Content pending from client.]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
