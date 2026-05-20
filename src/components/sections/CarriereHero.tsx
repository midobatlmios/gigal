import { Link } from 'react-router-dom';

export default function CarriereHero() {
  return (
    <section className="hero-carriere">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="hero-inner-carriere">
        <div>
          <div className="breadcrumb fade-up">
            <Link to="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Carrière</span>
          </div>
          <h1 className="fade-up delay-1">
            Construisez
            <br />
            l'avenir du
            <br />
            <em>diagnostic</em>
          </h1>
          <p className="hero-sub fade-up delay-2">
            Rejoignez une équipe pionnière qui réinvente la biologie médicale en Afrique. Chez
            GIGALAB, votre expertise contribue directement à améliorer la santé de millions de
            patients.
          </p>
          <div className="hero-badges fade-up delay-3">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Casablanca & Rabat
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Certifié Great Place to Work
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              7 postes ouverts
            </div>
          </div>
        </div>
        <div className="hero-stats-card fade-up delay-2">
          <h3>GIGALAB en chiffres</h3>
          <div className="stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                120<span>+</span>
              </div>
              <div className="hero-stat-label">Collaborateurs</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                8<span>%</span>
              </div>
              <div className="hero-stat-label">Turnover annuel</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                94<span>%</span>
              </div>
              <div className="hero-stat-label">Satisfaction employés</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                3.2<span>x</span>
              </div>
              <div className="hero-stat-label">Croissance 5 ans</div>
            </div>
          </div>
          <div className="hero-quote">
            « Chez GIGALAB, chaque collaborateur est un <strong>acteur de la santé</strong>. Nous
            investissons dans les personnes autant que dans les technologies. »
            <br />
            <br />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'normal' }}>
              — M. Karim Zaher, PDG GIGALAB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
