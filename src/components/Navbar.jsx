import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight } from './icons';
import './Navbar.css';

const navLinks = [
  { path: '/team', label: 'Team' },
  { path: '/business', label: 'Business' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    setMenuOpen(false);
    if (!location.hash) window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHero = isHome && !scrolled;

  return (
    <nav className={`navbar ${onHero ? 'navbar--hero' : 'navbar--solid'}`}>
      <div className="navbar__inner">
        <Link className="navbar__logo" to="/" aria-label="Tooftd home">
          Tooftd
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <div className={`navbar__cluster ${menuOpen ? 'is-open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map(({ path, label }, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar__link${isActive && !path.includes('#') ? ' navbar__link--active' : ''}`
                  }
                  end
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/preorder" className="btn btn--light navbar__cta">
            <span>Preorder</span>
            <span className="btn__icon"><ArrowRight /></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
