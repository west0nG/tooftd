import './DevTeam.css';
import { devTeam } from '../data/team';

export default function DevTeam() {
  return (
    <section className="dev-team">
      <p className="eyebrow">Built By</p>
      <h2 className="section-title">The <em>website</em> team</h2>
      <p className="section-desc">
        The Dev1 team that designed and built this site — from concept to code.
      </p>

      <div className="dev-team__grid">
        {devTeam.map((member, i) => (
          <div key={i} className="dev-team__card">
            <div className="dev-team__photo">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                member.initial
              )}
            </div>
            <h4 className="dev-team__name">{member.name}</h4>
            <span className="dev-team__role-tag">{member.role}</span>
            <div className="dev-team__tasks">
              {member.tasks.map((task, j) => (
                <p key={j} className="dev-team__task">{task}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
