import { Link } from 'react-router-dom';

export default function Manufacturing() {
  return (
    <section className="mfg-section">
      <div className="container">
        <div className="mfg-inner">
          <div className="mfg-content">
            <div className="overline" style={{ color: 'var(--red)' }}>Manufacturing</div>
            <h2 className="mfg-headline">Fabriqué au Maroc.<br /><span>Pour l'Afrique.</span></h2>
            <p className="mfg-body">
              De la R&D à la production industrielle. Tests rapides, milieux de culture, équipements — conçus ici, livrés partout en Afrique.
            </p>
            <div className="mfg-items">
              <div className="mfg-item">
                <span className="mfg-item-num">01</span>
                <div>
                  <div className="mfg-item-title">Tests rapides GLD</div>
                  <div className="mfg-item-desc">COVID-19 Ag, HIV, Hépatite B/C, Malaria, Monkeypox, Syphilis, HCG — résultats en 10 minutes.</div>
                </div>
              </div>
              <div className="mfg-item">
                <span className="mfg-item-num">02</span>
                <div>
                  <div className="mfg-item-title">Milieux de culture</div>
                  <div className="mfg-item-desc">Diagnostic médical, contrôle pharmaceutique et agroalimentaire. Chromogènes, sélectifs, enrichis.</div>
                </div>
              </div>
              <div className="mfg-item">
                <span className="mfg-item-num">03</span>
                <div>
                  <div className="mfg-item-title">Microscopes Giga-Infinity</div>
                  <div className="mfg-item-desc">Assemblés au Maroc. Optique plan corrigée à l'infini, objectifs 4x à 100x.</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <Link to="/manufacturing" className="btn btn-primary">
                Voir le manufacturing
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mfg-photos">
            <div className="mfg-photo">
              <div className="mfg-photo-inner">🏭</div>
              <div className="photo-label">Ligne de production</div>
            </div>
            <div className="mfg-photo">
              <div className="mfg-photo-inner">🧪</div>
              <div className="photo-label">Tests rapides GLD</div>
            </div>
            <div className="mfg-photo">
              <div className="mfg-photo-inner">🔬</div>
              <div className="photo-label">Milieux de culture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
