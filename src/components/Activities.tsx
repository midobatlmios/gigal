import { Link } from 'react-router-dom';

export default function Activities() {
  return (
    <section className="activities fade-in-section">
      <div className="container">
        <div className="section-header">
          <div className="overline" style={{ justifyContent: 'center' }}>Nos activités</div>
          <h2 className="section-title">Ce que nous faisons.</h2>
          <p className="section-sub">De la conception à la livraison — un groupe intégré au service du diagnostic.</p>
        </div>
        <div className="activities-grid">
          <div className="activity-card">
            <div className="activity-icon">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <h3 className="activity-title">Concepteur de solutions</h3>
            <p className="activity-desc">
              GIGALAB conçoit et assemble ses propres équipements — dont la gamme de microscopes Giga-Infinity — et développe des solutions diagnostiques sur mesure pour les professionnels de santé et les industriels.
            </p>
            <Link to="/solutions" className="activity-link">Découvrir →</Link>
          </div>
          <div className="activity-card">
            <div className="activity-icon">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20M4 20V10l6-6 6 6v10" />
                <path d="M10 20v-6h4v6" />
                <rect x="14" y="14" width="4" height="4" />
              </svg>
            </div>
            <h3 className="activity-title">Manufacturing</h3>
            <p className="activity-desc">
              Tests rapides (gamme GLD), milieux de culture, équipements — conçus et fabriqués au Maroc. Certifiés ISO 13485, CE et homologués Ministère de la Santé marocain.
            </p>
            <Link to="/manufacturing" className="activity-link">Voir la production →</Link>
          </div>
          <div className="activity-card">
            <div className="activity-icon">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v11a2 2 0 002 2h10a2 2 0 002-2V8" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <h3 className="activity-title">Distribution multi-marques</h3>
            <p className="activity-desc">
              Analyseurs de biochimie, hématologie, immunologie et auto-immunité de dernière génération. Installation, formation et support technique de proximité.
            </p>
            <Link to="/distribution" className="activity-link">Voir les équipements →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
