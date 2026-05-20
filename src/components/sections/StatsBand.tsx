export default function StatsBand() {
  return (
    <div className="stats-band fade-in-section">
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '100%' }}>
        <div className="stats-band-grid">
          <div className="stat-band-item">
            <div className="stat-band-number">
              1<sup style={{ fontSize: '1.2rem', verticalAlign: 'super' }}>ère</sup>
            </div>
            <div className="stat-band-label">Entreprise africaine<br />en tests salivaires</div>
          </div>
          <div className="stat-band-item">
            <div className="stat-band-number">+20</div>
            <div className="stat-band-label">Références<br />de tests rapides GLD</div>
          </div>
          <div className="stat-band-item">
            <div className="stat-band-number">5</div>
            <div className="stat-band-label">Certifications<br />internationales</div>
          </div>
          <div className="stat-band-item">
            <div className="stat-band-number">100%</div>
            <div className="stat-band-label">Contrôle qualité<br />à chaque étape</div>
          </div>
        </div>
      </div>
    </div>
  );
}
