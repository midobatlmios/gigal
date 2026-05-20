import { Link } from 'react-router-dom';

export default function ActualitesHero() {
  return (
    <section className="hero-actualites">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="hero-inner">
        <div className="breadcrumb fade-up">
          <Link to="/">Accueil</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Actualités</span>
        </div>
        <h1 className="fade-up delay-1">
          Nos dernières
          <br />
          <em>actualités</em>
        </h1>
        <p className="hero-sub fade-up delay-2">
          Innovations, certifications, événements et partenariats — restez informé de tout ce
          qui fait avancer GIGALAB.
        </p>
      </div>
    </section>
  );
}
