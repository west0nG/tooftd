import './Footer.css';

const links = [
  { id: 'product', label: 'Product' },
  { id: 'market', label: 'Market' },
  { id: 'invest', label: 'Invest' },
  { id: 'story', label: 'Story' },
  { id: 'team', label: 'Team' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">TOOFTD</div>
      <div className="footer__links">
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </div>
      <p className="footer__copy">
        ACAD-445 · Designing Products III · Spring 2026 · USC
      </p>
    </footer>
  );
}
