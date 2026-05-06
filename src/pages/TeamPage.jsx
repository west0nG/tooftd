import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/icons';
import './TeamPage.css';

const HERO_LEDE =
  "We're a small group of design and engineering students at USC building Tooftd as our senior project.";

const PRODUCT_TEAM = [
  { name: 'Laila LaDuke', photo: '/images/team/laila.jpg', bio: 'Physical Prototyping' },
  { name: 'Ben Flora', photo: '/images/team/ben.jpg', bio: 'Industrial Designer' },
  { name: 'Anika Mantripragada', photo: '/images/team/anika.jpg', bio: 'Brand Designer' },
  { name: 'Badria Kazim', photo: '/images/team/badria.jpg', bio: 'Product Manager' },
  { name: 'Clarence Keith', photo: '/images/team/clarence.jpg', bio: '3D Designer' },
];

const WEB_TEAM = [
  { name: 'Sam Cheng', photo: '/images/team/sam.jpg', bio: 'Web Designer' },
  { name: 'Aaron Lee', photo: '/images/team/aaron.jpg', bio: 'Web Designer' },
  { name: 'Weston Guo', photo: '/images/team/weston.jpg', bio: 'Web Developer' },
];

function TeamCard({ name, bio, photo }) {
  return (
    <article className="team-card">
      <div className="team-card__photo" aria-hidden="true">
        {photo && <img src={photo} alt="" />}
      </div>
      <div className="team-card__body">
        <h4 className="team-card__name">{name}</h4>
        <p className="body-md">{bio}</p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <div className="page team-page">
      <section className="section page-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Team</p>
          <h1 className="page-hero__title h-display">The team behind Tooftd</h1>
          <p className="body-lg page-hero__lede">{HERO_LEDE}</p>
        </div>
      </section>

      <section className="section">
        <div className="team">
          <h2 className="h-display team__title">Product team</h2>
          <div className="team__grid">
            {PRODUCT_TEAM.map((m, i) => <TeamCard key={i} {...m} />)}
          </div>
        </div>
      </section>

      <section className="section section--mute">
        <div className="team">
          <h2 className="h-display team__title">Web team</h2>
          <div className="team__grid team__grid--three">
            {WEB_TEAM.map((m, i) => <TeamCard key={i} {...m} />)}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="cta-band cta-band--lawn">
          <h2 className="h-display cta-band__title cta-band__title--ink">
            Say hi.
          </h2>
          <a href="mailto:tooftd@usc.edu" className="btn">
            <span>Email the team</span>
            <span className="btn__icon"><ArrowRight /></span>
          </a>
        </div>
      </section>
    </div>
  );
}
