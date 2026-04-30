import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-logo">
              <Link to="/" className="nav-logo">
                <img src="/logo-fr-ar-white-f.png" alt="GIGALAB Logo" style={{ height: 34, width: 'auto' }} />
              </Link>
            </div>
            <p className="footer-tagline">
              We Move Behind Science. Fabrication locale et distribution multi-marques au service du diagnostic africain.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">fb</a>
              <a href="#" className="social-btn">yt</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Solutions</div>
            <nav className="footer-links">
              <Link to="/solutions">Tests Rapides GLD</Link>
              <Link to="/solutions">Milieux de Culture</Link>
              <Link to="/solutions">Microscopes</Link>
              <Link to="/solutions">Automates & Analyseurs</Link>
            </nav>
          </div>
          <div>
            <div className="footer-col-title">Entreprise</div>
            <nav className="footer-links">
              <Link to="/apropos">À propos</Link>
              <Link to="/manufacturing">Manufacturing</Link>
              <Link to="/distribution">Distribution</Link>
              <Link to="/carriere">Carrière</Link>
            </nav>
          </div>
          <div>
            <div className="footer-col-title">Ressources</div>
            <nav className="footer-links">
              <Link to="/actualites">Actualités</Link>
              <Link to="/ressources">Ressources techniques</Link>
              <Link to="/support">Support</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© 2026 GIGALAB Diagnostic. Tous droits réservés.</span>
          <a href="https://www.xerusmedia.com" target="_blank" rel="noopener noreferrer" className="footer-xerus">
            Développé par <strong>Xerus</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
