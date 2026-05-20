import { Link } from 'react-router-dom';

export default function SupportHero() {
  return (
    <section className="page-hero-support">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="page-hero-inner-support">
        <div className="container">
          <div className="breadcrumb-support fade-up fade-up-1">
            <Link to="/">Accueil</Link>
            <div className="breadcrumb-sep-support" />
            <span>Support</span>
          </div>
          <h1 className="page-title-support fade-up fade-up-2">
            <em>Support.</em>
          </h1>
          <p className="page-subtitle-support fade-up fade-up-3">
            Installation, formation, maintenance. On est là.
          </p>
          <div className="hero-hotline fade-up fade-up-3">
            <div className="hotline-dot" />
            <div>
              <div className="hotline-label">Hotline technique</div>
              <div className="hotline-value">[Numéro à compléter]</div>
            </div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />
            <div>
              <div className="hotline-label">Horaires</div>
              <div className="hotline-hours">Lun – Ven · 8h30 – 17h30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
