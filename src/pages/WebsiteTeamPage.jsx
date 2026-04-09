import './WebsiteTeamPage.css';

const devTeam = [
  {
    initial: '1',
    name: '[Dev Team Member 1]',
    tasks: ['[Project Management]', '[JavaScript Development]'],
  },
  {
    initial: '2',
    name: '[Dev Team Member 2]',
    tasks: ['[Design]', '[CSS Production]'],
  },
  {
    initial: '3',
    name: '[Dev Team Member 3]',
    tasks: ['[HTML Production]', '[Content Writing]'],
  },
  {
    initial: '4',
    name: '[Dev Team Member 4]',
    tasks: ['[Graphic Production]', '[Q/A]'],
  },
  {
    initial: '5',
    name: '[Dev Team Member 5]',
    tasks: ['[Business Consulting]', '[JavaScript Development]'],
  },
];

export default function WebsiteTeamPage() {
  return (
    <div className="wt-page">
      <section className="wt__hero">
        <p className="eyebrow">[Built By]</p>
        <h1 className="wt__title">The <em>[Website]</em> Team</h1>
        <p className="section-desc">
          [The Dev1 team that designed and built this site — from concept to code.
          Each member's contributions are listed below.]
        </p>
      </section>

      <section className="wt__grid-section">
        <div className="wt__grid">
          {devTeam.map((member, i) => (
            <div key={i} className="wt__card">
              <div className="wt__photo placeholder-img">
                {member.initial}
              </div>
              <h4 className="wt__name">{member.name}</h4>
              <div className="wt__tasks">
                {member.tasks.map((task, j) => (
                  <span key={j} className="wt__task-tag">{task}</span>
                ))}
              </div>
              <p className="wt__desc">
                [Description of what this team member contributed to the website project.
                Include specific responsibilities and deliverables. Pending.]
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="wt__process">
        <p className="eyebrow">[Our Process]</p>
        <h2 className="section-title">[How We <em>Built</em> It]</h2>
        <p className="section-desc">
          [Overview of the development process, tools used, and team collaboration approach.]
        </p>
        <div className="wt__process-steps">
          {['[Research & Planning]', '[Design & Prototyping]', '[Development]', '[Testing & Launch]'].map(
            (step, i) => (
              <div key={i} className="wt__process-step">
                <span className="wt__step-num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{step}</h4>
                <p>[Description of this phase. Pending.]</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
