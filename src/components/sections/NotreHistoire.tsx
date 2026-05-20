import { Link } from 'react-router-dom';

export default function NotreHistoire() {
  return (
    <section className="histoire-section fade-in-section">
      <div className="container">
        <div className="histoire-inner">
          <div className="histoire-content fade-up fade-up-1">
            <div className="overline">Notre histoire</div>
            <h2>
              L'innovation,
              <br />
              fabriquée <em>ici.</em>
            </h2>
            <p>
              Fondée à Casablanca, GIGALAB s'est imposée comme le premier fabricant africain de tests
              diagnostiques rapides — avec une maîtrise complète de la chaîne, de la recherche &
              développement jusqu'à la production industrielle.
            </p>
            <p>
              Premiers tests antigéniques salivaires <em>made in Africa</em>. De la R&D à
              l'industrialisation, GIGALAB maîtrise l'ensemble de la chaîne — et distribue les
              meilleures technologies médicales mondiales.
            </p>
            <Link to="/solutions" className="btn btn-primary">
              Découvrir nos solutions
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="histoire-photo fade-up fade-up-2">
            <div className="histoire-photo-main">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="4" y="16" width="40" height="28" rx="2" />
                <path d="M16 16V10a8 8 0 0116 0v6" />
                <circle cx="24" cy="30" r="4" />
              </svg>
              <span>Photo du siège / équipe GIGALAB</span>
            </div>
            <div className="histoire-photo-badge">
              <div className="histoire-badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="histoire-badge-num">
                  1<span style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>er</span>
                </div>
                <div className="histoire-badge-label">Fabricant africain</div>
              </div>
              <div className="histoire-badge-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
