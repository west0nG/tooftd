import './ProductTeam.css';
import { productTeam } from '../data/team';

export default function ProductTeam() {
  return (
    <section id="team" className="product-team">
      <p className="eyebrow">The Creators</p>
      <h2 className="section-title">Meet the <em>team</em></h2>
      <p className="section-desc">
        The ACAD-445 product design team behind TOOFTD — five designers
        rethinking how spaces bring people together.
      </p>

      <div className="product-team__grid">
        {productTeam.map((member, i) => (
          <div key={i} className="product-team__card">
            <div className="product-team__photo">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                member.initial
              )}
            </div>
            <h4 className="product-team__name">{member.name}</h4>
            <p className="product-team__role">{member.role}</p>
            <p className="product-team__bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
