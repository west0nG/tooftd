import { Link } from 'react-router-dom';
import './Footer.css';

const discoverLinks = [
  { path: '/', label: 'Home' },
  { path: '/bts', label: 'Team' },
  { path: '/competitive-analysis', label: 'Competitor Analysis' },
  { path: '/', label: 'Business' },
  { path: '/bts', label: 'BTS' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__panel">
        <div className="footer__inner">
          <p className="footer__copy">
            Lorem ipsum dolor sit amet consectetur. Elementum nunc lectus ut
            sapien adipiscing augue donec
          </p>

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
              <li><a href="mailto:xxxxxx@usc.edu">xxxxxx@usc.edu</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__watermark" aria-hidden="true">
          <span className="footer__wordmark">Tooftd</span>
        </div>
      </div>
    </footer>
  );
}
