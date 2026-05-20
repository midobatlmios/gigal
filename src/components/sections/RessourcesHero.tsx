import { Link } from 'react-router-dom';

interface Props {
  searchInput: string;
  setSearchInput: (v: string) => void;
  setSearchQuery: (v: string) => void;
  handleSearch: () => void;
  setActiveTab: (v: string) => void;
}

const stats = [
  { num: '120', suffix: '+', label: 'Documents' },
  { num: '48', suffix: '+', label: 'Vidéos' },
  { num: '15', suffix: '+', label: 'Logiciels' },
];

const searchTags = ['Biolis', 'Celltac G', 'Blue Diver', 'ISO 13485', 'CalproSmart', 'Coag 4D'];

export default function RessourcesHero({ searchInput, setSearchInput, setSearchQuery, handleSearch, setActiveTab }: Props) {
  return (
    <section className="hero-ressources">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="hero-inner-ressources">
        <div>
          <div className="breadcrumb fade-up">
            <Link to="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Ressources</span>
          </div>
          <h1 className="fade-up delay-1">
            Centre de
            <br />
            <em>ressources</em>
          </h1>
          <p className="hero-sub fade-up delay-2">
            Fiches produits, manuels d'utilisation, logiciels, vidéos de formation — tous les
            documents dont vous avez besoin pour tirer le meilleur de vos équipements GIGALAB.
          </p>
          <div className="hero-stats-ressources fade-up delay-3">
            {stats.map((s) => (
              <div className="ressources-stat-item" key={s.label}>
                <div className="ressources-stat-num">
                  {s.num}
                  <span>{s.suffix}</span>
                </div>
                <div className="ressources-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-search-wrap-ressources fade-up delay-2">
          <div className="hero-search-ressources">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un document, produit ou équipement…"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setSearchQuery(e.target.value.toLowerCase().trim());
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="hero-search-btn" onClick={handleSearch}>Rechercher</button>
          </div>
          <div className="hero-search-tags-ressources">
            {searchTags.map((tag) => (
              <span
                className="search-tag-ressources"
                key={tag}
                onClick={() => {
                  setSearchInput(tag);
                  setSearchQuery(tag.toLowerCase());
                  setActiveTab('Tout');
                }}
                style={{ cursor: 'pointer' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
