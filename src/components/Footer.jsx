import { Link } from 'react-router-dom';
import './Footer.css';

const discoverLinks = [
  { path: '/', label: 'Home' },
  { path: '/bts', label: 'Team' },
  { path: '/competitive-analysis', label: 'Competitor Analysis' },
  { path: '/#business', label: 'Business' },
  { path: '/bts', label: 'BTS' },
];

export default function Footer({ variant = 'light' }) {
  const className = `footer footer--${variant}`;

  return (
    <footer className={className}>
      <div className="footer__inner">
        <div className="footer__col footer__col--about">
          <p className="footer__copy">
            Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut
            sapien adipiscing augue donec
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Discover more</h4>
          <ul className="footer__list">
            {discoverLinks.map((l, i) => (
              <li key={i}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list">
            <li><a href="mailto:tooftd@usc.edu">tooftd@usc.edu</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__watermark" aria-hidden="true">
        <span>Tooftd</span>
      </div>
    </footer>
  );
}
