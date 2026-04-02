import { useState, useEffect } from 'react';
import './Navbar.css';

const sections = [
  { id: 'product', label: 'Product' },
  { id: 'market', label: 'Market' },
  { id: 'invest', label: 'Invest' },
  { id: 'story', label: 'Story' },
  { id: 'team', label: 'Team' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          TOOFTD
        </a>
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              onClick={() => handleClick(id)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
