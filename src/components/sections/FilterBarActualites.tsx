export default function FilterBarActualites() {
  return (
    <div className="filter-bar">
      <div className="filter-inner">
        <nav className="filter-tabs">
          <div className="filter-tab active">
            Toutes <span className="filter-count">12</span>
          </div>
          <div className="filter-tab">Produits</div>
          <div className="filter-tab">Événements</div>
          <div className="filter-tab">Certifications</div>
          <div className="filter-tab">Innovation</div>
          <div className="filter-tab">Partenariats</div>
        </nav>
        <div className="filter-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Rechercher une actualité…" />
        </div>
      </div>
    </div>
  );
}
