import { Link } from 'react-router-dom';

export default function SolutionsHero() {
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
            <span>Solutions</span>
          </div>
          <h1 className="page-title fade-up fade-up-1">
            Nos <em>Solutions.</em>
          </h1>
          <p className="page-subtitle fade-up fade-up-2">
            Des équipements distribués. Des tests fabriqués. Un seul partenaire.
          </p>
        </div>
      </div>
    </section>
  );
}
