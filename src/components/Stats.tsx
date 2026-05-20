export default function Stats() {
  return (
    <div className="stats-section fade-in-section">
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '100%' }}>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number"><span>1ère</span></div>
            <div className="stat-label">entreprise africaine à produire des tests antigéniques salivaires</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">+20</div>
            <div className="stat-label">références de tests rapides GLD fabriqués au Maroc</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">domaines d'application : médical, pharmaceutique, agroalimentaire</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">certifications internationales : ISO 9001, 13485, CE, IMANOR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
