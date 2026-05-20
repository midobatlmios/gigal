import { Link } from 'react-router-dom';

export default function DistributionHero() {
  return (
    <section className="page-hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="page-hero-inner">
        <div className="container">
          <div className="breadcrumb fade-up fade-up-1">
            <Link to="/">Accueil</Link>
            <div className="breadcrumb-sep" />
            <span>Distribution</span>
          </div>
          <h1 className="page-title fade-up fade-up-2">
            <em>Distribution.</em>
          </h1>
          <p className="page-subtitle fade-up fade-up-3">
            Les meilleures technologies médicales mondiales. Livrées, installées, soutenues par nos
            équipes.
          </p>
          <div className="hero-brands-row fade-up fade-up-3">
            <span className="hero-brand-label">Marques</span>
            <span className="hero-brand-pill">Nihon Kohden</span>
            <span className="hero-brand-pill">Snibe Diagnostic</span>
            <span className="hero-brand-pill">Orion Diagnostica</span>
            <span className="hero-brand-pill">AESKU</span>
            <span className="hero-brand-pill">+ partenaires</span>
          </div>
        </div>
      </div>
    </section>
  );
}
