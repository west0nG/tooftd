import { Link } from 'react-router-dom';
import './Footer.css';

const links = [
  { path: '/', label: 'Home' },
  { path: '/product', label: 'Product' },
  { path: '/team', label: 'Team' },
  { path: '/website-team', label: 'Website Team' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">TOOFTD</div>
      <div className="footer__links">
        {links.map(({ path, label }) => (
          <Link key={path} to={path}>{label}</Link>
        ))}
      </div>
      <p className="footer__copy">
        ACAD-445 · Designing Products III · Spring 2026 · USC
      </p>
    </footer>
  );
}
