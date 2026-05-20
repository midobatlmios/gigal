import { Link } from 'react-router-dom';

const supportItems = [
  { name: 'Installation & mise en service', desc: 'Nos techniciens se déplacent pour installer et qualifier chaque équipement sur site' },
  { name: 'Formation des utilisateurs', desc: 'Formation complète sur site pour les opérateurs — protocoles, maintenance de routine et bonnes pratiques' },
  { name: 'Support technique de proximité', desc: 'Hotline dédiée + interventions terrain rapides — un interlocuteur unique pour chaque client' },
  { name: 'Maintenance préventive & corrective', desc: 'Contrats de maintenance adaptés pour garantir la disponibilité maximale des équipements' },
  { name: 'Approvisionnement régulier', desc: 'Stock réactifs et consommables maintenu — livraisons programmées pour éviter toute rupture' },
];

const reseau = [
  { country: 'Maroc', desc: 'Couverture nationale — équipes terrain dans les principales villes. Hôpitaux, cliniques et laboratoires privés.', status: 'active', label: 'Actif' },
  { country: 'Afrique', desc: 'Expansion active via notre Direction Commerciale Export — marchés africains en développement prioritaire.', status: 'growing', label: 'En croissance' },
];

export default function SupportReseauSection() {
  return (
    <section className="support-section fade-in-section">
      <div className="container">
        <div className="support-inner">
          <div className="support-content">
            <div className="overline">Plus qu'une livraison</div>
            <h2>
              Notre engagement
              <br />
              de <em>proximité.</em>
            </h2>
            <p>
              La distribution ne s'arrête pas à la livraison. GIGALAB accompagne ses partenaires à
              chaque étape — de l'installation à la maintenance — avec des équipes terrain dédiées.
            </p>
            <div className="support-items">
              {supportItems.map((item) => (
                <div className="support-item" key={item.name}>
                  <div className="support-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="support-item-name">{item.name}</div>
                    <div className="support-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reseau-wrap">
            <div className="reseau-title">Notre réseau</div>
            <div className="reseau-cards">
              {reseau.map((r) => (
                <div className="reseau-card" key={r.country}>
                  <div className="reseau-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                    </svg>
                  </div>
                  <div>
                    <div className="reseau-card-country">{r.country}</div>
                    <div className="reseau-card-desc">{r.desc}</div>
                  </div>
                  <div className={`reseau-card-status status-${r.status}`}>
                    <div className="status-dot" />
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Devenir partenaire
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </Link>
              <Link to="/ressources" className="btn btn-outline-dark">
                Télécharger notre catalogue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
