import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/apropos', label: 'À propos' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/manufacturing', label: 'Manufacturing' },
    { to: '/distribution', label: 'Distribution' },
    { to: '/actualites', label: 'Actualités' },
    { to: '/ressources', label: 'Ressources' },
    { to: '/carriere', label: 'Carrière' },
  ];

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="/jigajiga.png" alt="GIGALAB Logo" style={{ height: 34, width: 'auto' }} />
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={location.pathname === link.to ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <Link to="/contact" className="btn btn-outline-dark nav-cta-contact">
              Contact
            </Link>
            <Link to="/support" className="btn btn-primary">
              Support
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-header">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="/jigajiga.png" alt="GIGALAB Logo" style={{ height: 34, width: 'auto' }} />
          </Link>
          <button className="nav-mobile-close" onClick={closeMenu} aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="nav-mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-mobile-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-mobile-cta">
          <Link to="/contact" className="btn btn-outline-dark" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/support" className="btn btn-primary" onClick={closeMenu}>
            Support
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
