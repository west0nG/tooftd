import { Link } from 'react-router-dom';
import footerGrass from '../assets/footer-grass.jpg';
import footerMask from '../assets/footer-mask.svg';
import './Footer.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/team', label: 'Team' },
  { path: '/competitor-analysis', label: 'Competitor Analysis' },
  { path: '/business', label: 'Business' },
  { path: '/bts', label: 'BTS' },
];

const contactLinks = [
  { label: 'xxxxxx@usc.edu', href: 'mailto:xxxxxx@usc.edu' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
];

export default function Footer({ variant = 'light' }) {
  const className = `footer footer--${variant}`;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut
              sapien adipiscing augue donec
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__heading">Discover more</h4>
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className="footer__link">
                {label}
              </Link>
            ))}
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            {contactLinks.map(({ label, href }) => (
              <a key={label} href={href} className="footer__link">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__logo-wrap">
          <div
            className="footer__logo-mask"
            style={{ maskImage: `url(${footerMask})`, WebkitMaskImage: `url(${footerMask})` }}
          >
            <img src={footerGrass} alt="Tooftd" className="footer__logo-img" />
          </div>
        </div>
      </div>
    </footer>
  );
}
