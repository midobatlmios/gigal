export default function About() {
  return (
    <div className="about-strip">
      <div className="container">
        <div>
          <div className="overline">À propos</div>
          <h2 className="about-headline">L'innovation,<br />fabriquée ici.</h2>
          <p className="about-body">
            Premiers tests antigéniques salivaires <em>made in Africa</em>. Distribution multi-marques d'analyseurs de dernière génération. 
            GIGALAB maîtrise l'ensemble de la chaîne — de la R&D à la livraison — pour les laboratoires, hôpitaux et industriels du Maroc et d'Afrique.
          </p>
          <a href="#" className="btn btn-primary">
            En savoir plus
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="about-right">
          <div className="about-pill">
            <div className="about-pill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
            <div>
              <div className="about-pill-text">R&D à l'industrialisation</div>
              <div className="about-pill-sub">Maîtrise complète de la chaîne de production</div>
            </div>
          </div>
          <div className="about-pill">
            <div className="about-pill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </div>
            <div>
              <div className="about-pill-text">Présence au Maroc & en Afrique</div>
              <div className="about-pill-sub">Export actif vers les marchés africains et internationaux</div>
            </div>
          </div>
          <div className="about-pill">
            <div className="about-pill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
            </div>
            <div>
              <div className="about-pill-text">Distribution multi-marques</div>
              <div className="about-pill-sub">Biochimie, hématologie, immunologie, auto-immunité</div>
            </div>
          </div>
          <div className="about-pill">
            <div className="about-pill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="about-pill-text">Normes internationales</div>
              <div className="about-pill-sub">ISO 9001 · ISO 13485 · CE · IMANOR · MDS Maroc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
