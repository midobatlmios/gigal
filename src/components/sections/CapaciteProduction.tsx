const productionItems = [
  {
    name: 'Microscopes Giga-Infinity',
    desc: 'Assemblés au Maroc — optique plan corrigée à l\'infini, objectifs multi-grossissements',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'Tests antigéniques rapides',
    desc: 'Format cassette — dont les premiers tests salivaires made in Africa',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0" />
        <path d="M12 12v4M10 14l2 2 2-2" />
      </svg>
    ),
  },
  {
    name: 'Tests sérologiques rapides',
    desc: 'HIV, hépatites, syphilis, malaria, monkeypox — gamme GLD complète',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 9.3V2M4.22 10.81A10 10 0 0012 21a10 10 0 007.78-10.19M10 2h4" />
      </svg>
    ),
  },
  {
    name: 'Milieux de culture',
    desc: 'Chromogènes, sélectifs et enrichis — pour le médical, le pharmaceutique et l\'agroalimentaire',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    name: 'Réactifs de laboratoire',
    desc: 'Formulations certifiées pour les laboratoires d\'analyses médicales',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function CapaciteProduction() {
  return (
    <section className="capacite-section fade-in-section">
      <div className="container">
        <div className="capacite-inner">
          <div className="capacite-content">
            <div className="overline">Unité industrielle</div>
            <h2>
              Notre capacité
              <br />
              de <em>production.</em>
            </h2>
            <p>
              Notre unité industrielle est équipée pour concevoir, assembler et produire à grande
              échelle des équipements et dispositifs médicaux répondant aux normes internationales
              les plus exigeantes.
            </p>
            <div className="production-list">
              {productionItems.map((item) => (
                <div className="production-item" key={item.name}>
                  <div className="production-item-icon">{item.svg}</div>
                  <div>
                    <div className="production-item-name">{item.name}</div>
                    <div className="production-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="capacite-photos">
            <div className="photo-main">
              <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3}>
                <rect x="4" y="20" width="40" height="24" rx="2" />
                <path d="M4 20l8-14h24l8 14" />
                <path d="M14 44V28h8v16M26 44V28h8v16" />
              </svg>
              <span>Vue de l'unité de production</span>
            </div>
            <div className="photo-row">
              <div className="photo-small">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0" />
                </svg>
                <span>Ligne de production</span>
              </div>
              <div className="photo-small">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83" />
                </svg>
                <span>Contrôle qualité</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
