import { Link } from 'react-router-dom';

export default function ManufacturingHero() {
  return (
    <section className="page-hero-full">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="page-hero-photo">
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
          <rect x="4" y="24" width="40" height="20" rx="2" />
          <path d="M4 24l6-10h28l6 24" />
          <path d="M12 44V30h8v14M28 44V30h8v14" />
          <path d="M4 24h40" />
          <circle cx="16" cy="20" r="2" />
          <circle cx="24" cy="20" r="2" />
          <circle cx="32" cy="20" r="2" />
        </svg>
        <span>Photo de l'unité de production GIGALAB</span>
      </div>
      <div className="page-hero-overlay" />

      <div className="page-hero-inner-full">
        <div className="container">
          <div className="breadcrumb fade-up fade-up-1">
            <Link to="/">Accueil</Link>
            <div className="breadcrumb-sep" />
            <span>Manufacturing</span>
          </div>
          <h1 className="page-title fade-up fade-up-2">
            Fabriqué au Maroc.
            <br />
            <em>Pour l'Afrique.</em>
          </h1>
          <p className="page-subtitle fade-up fade-up-3">
            De la R&D à la production industrielle. Tests rapides, milieux de culture, équipements —
            conçus ici, livrés partout en Afrique.
          </p>
          <div className="hero-certif-row fade-up fade-up-4">
            <span className="hero-certif-label">Certifié</span>
            <span className="certif-pill">ISO 9001</span>
            <span className="certif-pill">ISO 13485</span>
            <span className="certif-pill">CE</span>
            <span className="certif-pill">IMANOR</span>
            <span className="certif-pill">MDS Maroc</span>
          </div>
        </div>
      </div>
    </section>
  );
}
