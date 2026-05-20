import { Link } from 'react-router-dom';

const analyseurs = [
  {
    name: 'Maglumi X8',
    desc: "Automate de chimiluminescence haute performance pour l'immunoanalyse — Snibe Diagnostic",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    name: 'Automates biochimie',
    desc: 'Analyseurs de biochimie de dernière génération pour les laboratoires hospitaliers et privés',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0M9 3a3 3 0 000 6h6a3 3 0 000-6" />
      </svg>
    ),
  },
  {
    name: 'Automates hématologie',
    desc: 'Numération formule sanguine complète — automates rapides et précis pour les bilans biologiques',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: 'Automates immunologie',
    desc: 'Marqueurs tumoraux, hormones, maladies infectieuses — analyse immunologique de précision',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: 'Auto-immunité',
    desc: 'Diagnostic des maladies auto-immunes — systèmes d\'analyse spécialisés haute sensibilité',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4zM9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    name: 'Réactifs & consommables',
    desc: 'Approvisionnement régulier en réactifs certifiés et consommables de laboratoire de qualité',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18M3 9h18M3 15h18M3 21h18" />
      </svg>
    ),
  },
];

export default function EquipementsSection() {
  return (
    <section className="equipements-section fade-in-section" id="equipements">
      <div className="container">
        <div className="section-header">
          <div className="overline">Assemblés & distribués</div>
          <h2 className="section-title">
            Équipements de
            <br />
            biologie <em>médicale.</em>
          </h2>
          <p className="section-sub">
            De la conception locale à la distribution multi-marques — les meilleures technologies
            médicales mondiales, livrées et soutenues par nos équipes.
          </p>
        </div>

        {/* Microscopes Giga-Infinity */}
        <div className="micro-card">
          <div className="micro-photo">
            <svg width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <circle cx="20" cy="22" r="10" />
              <path d="M28 28l10 10" />
              <path d="M20 8v4M20 30v4M8 22h4M28 22h4" />
              <circle cx="20" cy="22" r="4" />
            </svg>
            <div className="micro-photo-label">Photo produit</div>
            <div className="micro-badge">Assemblé par GIGALAB</div>
          </div>
          <div className="micro-info">
            <div className="overline">Conception locale</div>
            <h3>
              Microscopes
              <br />
              Giga-Infinity
            </h3>
            <p>
              Conçus et assemblés au Maroc par les équipes GIGALAB. Optique plan corrigée à
              l'infini, objectifs multi-grossissements, conception ergonomique — idéal pour les
              analyses scientifiques exigeantes.
            </p>
            <div className="micro-specs">
              {['Optique plan corrigée à l\'infini', 'Objectifs 4x · 10x · 40x · 100x', 'Conception ergonomique', 'Idéal analyses scientifiques exigeantes'].map((spec) => (
                <div className="micro-spec" key={spec}>
                  <div className="micro-spec-dot" />
                  {spec}
                </div>
              ))}
            </div>
            <Link to="/ressources" className="btn btn-primary">
              Fiche technique
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Analyseurs distribués */}
        <div style={{ marginTop: 56 }}>
          <div className="analyseurs-title">Automates & analyseurs — Distribution multi-marques</div>
          <div className="analyseurs-grid">
            {analyseurs.map((item) => (
              <div className="analyseur-card" key={item.name}>
                <div className="analyseur-icon">{item.svg}</div>
                <div className="analyseur-name">{item.name}</div>
                <div className="analyseur-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
