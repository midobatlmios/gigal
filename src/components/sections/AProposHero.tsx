import { Link } from 'react-router-dom';

export default function AProposHero() {
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
            <span>À propos</span>
          </div>
          <h1 className="page-title fade-up fade-up-1">
            À <em>propos.</em>
          </h1>
          <p className="page-subtitle fade-up fade-up-2">
            Premiers tests antigéniques salivaires{' '}
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>
              made in Africa
            </em>
            . De la R&D à l'industrialisation — GIGALAB maîtrise l'ensemble de la chaîne.
          </p>
        </div>
      </div>
    </section>
  );
}
