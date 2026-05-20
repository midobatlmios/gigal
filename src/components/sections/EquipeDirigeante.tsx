export default function EquipeDirigeante() {
  return (
    <section className="equipe-section fade-in-section">
      <div className="container">
        <div className="section-header">
          <div className="overline">Les personnes derrière la vision</div>
          <h2 className="section-title">Notre équipe dirigeante.</h2>
          <p className="section-sub">
            Une équipe combinant expertise scientifique, vision industrielle et ambition africaine.
          </p>
        </div>
        <div className="team-grid">
          {/* PDG */}
          <div className="team-card">
            <div className="team-photo">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M3 21a9 9 0 0118 0" />
              </svg>
              <div className="team-photo-label">Photo</div>
              <div className="team-photo-accent" />
            </div>
            <div className="team-info">
              <div className="team-role">Président Directeur Général</div>
              <div className="team-name">M. Karim Zaher</div>
              <p className="team-bio">
                Fondateur et PDG de GIGALAB, M. Karim Zaher porte la vision d'une industrie du
                diagnostic biologique entièrement ancrée en Afrique. Sous sa direction, GIGALAB a
                réalisé une première mondiale en produisant les premiers tests antigéniques salivaires
                sur le continent africain.
              </p>
              <a href="https://www.linkedin.com/in/karim-zaher-89886760/" target="_blank" rel="noopener noreferrer" className="team-linkedin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Directeur Technique */}
          <div className="team-card">
            <div className="team-photo">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M3 21a9 9 0 0118 0" />
              </svg>
              <div className="team-photo-label">Photo</div>
              <div className="team-photo-accent" />
            </div>
            <div className="team-info">
              <div className="team-role">Directeur Technique</div>
              <div className="team-name">M. Abdelmoutalib Aarab</div>
              <p className="team-bio">
                Garant de la qualité et de la performance industrielle, M. Aarab transforme la vision
                GIGALAB en réalité opérationnelle à chaque étape de la production. Il supervise
                l'ensemble des processus de fabrication, de R&D et de contrôle qualité.
              </p>
              <a href="https://www.linkedin.com/in/abdelmouttalib-aarab-1952b28a/" target="_blank" rel="noopener noreferrer" className="team-linkedin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
