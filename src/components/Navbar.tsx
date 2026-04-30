import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { to: '/apropos', label: 'À propos' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/manufacturing', label: 'Manufacturing' },
    { to: '/distribution', label: 'Distribution' },
    { to: '/actualites', label: 'Actualités' },
    { to: '/ressources', label: 'Ressources' },
    { to: '/carriere', label: 'Carrière' },
  ];

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo">
          <img src="/jigajiga.png" alt="GIGALAB Logo" style={{ height: 34, width: 'auto' }} />
        </Link>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-outline-dark">Contact</Link>
          <Link to="/support" className="btn btn-primary">
            Support
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
