import './Story.css';
import { timelinePhases } from '../data/timeline';
import Gallery from './Gallery';

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="story__intro">
        <p className="eyebrow">The Journey</p>
        <h2 className="section-title">From sketch to <em>reality</em></h2>
        <p className="section-desc">
          A look behind the scenes at how TOOFTD evolved from a question about
          the future of entertainment to a tangible seating experience.
        </p>
      </div>

      <div className="story__timeline">
        {timelinePhases.map((phase, i) => (
          <div key={i} className="story__item">
            <div className={`story__dot ${i < timelinePhases.length - 1 ? 'story__dot--filled' : ''}`} />
            <p className="story__phase">{phase.phase} · {phase.label}</p>
            <h3 className="story__item-title">{phase.title}</h3>
            <p className="story__item-desc">{phase.description}</p>
            <div className="story__images">
              {phase.images.map((img, j) => (
                <div key={j} className="story__image placeholder-img">
                  {img}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Gallery />
    </section>
  );
}
