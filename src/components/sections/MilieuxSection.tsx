import { Link } from 'react-router-dom';

const domains = [
  {
    name: 'Diagnostic microbiologique médical',
    desc: 'Laboratoires d\'analyses et hôpitaux',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: 'Contrôle microbiologique pharmaceutique',
    desc: 'Industries pharmaceutiques',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0M12 12v5M10 14l2 2 2-2" />
      </svg>
    ),
  },
  {
    name: 'Contrôle microbiologique agroalimentaire',
    desc: 'Industries agroalimentaires',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10" />
      </svg>
    ),
  },
];

const refs = ['Urichrome', 'Candida Chrome', 'Salmonella Chrome', 'Columbia Sang', 'Chocolat Multivita', 'Sabouraud'];

export default function MilieuxSection() {
  return (
    <section className="milieux-section fade-in-section" id="milieux">
      <div className="container">
        <div className="milieux-inner">
          <div className="milieux-content">
            <div className="overline">Microbiologie de précision</div>
            <h2>
              Milieux de culture
              <br />
              prêts à l'emploi.
            </h2>
            <p>
              Notre gamme de milieux de culture est conçue pour trois domaines d'application
              critiques — du diagnostic médical au contrôle industriel.
            </p>
            <div className="milieux-domains">
              {domains.map((d) => (
                <div className="milieux-domain" key={d.name}>
                  <div className="milieux-domain-icon">{d.svg}</div>
                  <div>
                    <div className="milieux-domain-name">{d.name}</div>
                    <div className="milieux-domain-desc">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="milieux-refs-wrap">
            <div className="milieux-refs-title">Références disponibles</div>
            <div className="milieux-refs-grid">
              {refs.map((ref) => (
                <div className="milieux-ref" key={ref}>
                  <div className="milieux-ref-dot" />
                  {ref}
                </div>
              ))}
            </div>
            <div className="milieux-more">
              + formulations chromogènes, sélectives et enrichies sur demande
            </div>
            <div style={{ marginTop: 32 }}>
              <div className="milieux-tagline">
                Derrière chaque diagnostic précis, il y a un milieu de culture fiable.
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Demander une documentation
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-outline-dark">
                Contacter l'équipe commerciale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
