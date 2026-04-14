import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ArrowRight from './ArrowRight';
import './Navbar.css';

const navLinks = [
  { path: '/bts', label: 'Team' },
  { path: '/competitive-analysis', label: 'Competitive analysis' },
  { path: '/#business', label: 'Business' },
  { path: '/bts', label: 'BTS' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    if (!location.hash) window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="navbar">
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
          <div className="navbar__pill">
            {navLinks.map(({ path, label }, i) => (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `navbar__link${isActive && !path.includes('#') ? ' navbar__link--active' : ''}`
                }
                end
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link to="/preorder" className="btn navbar__cta">
            <span>Preorder</span>
            <ArrowRight className="btn__arrow" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
