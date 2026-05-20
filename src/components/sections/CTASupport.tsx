import { Link } from 'react-router-dom';

export default function CTASupport() {
  return (
    <section className="cta-support fade-in-section">
      <div className="container cta-inner-support">
        <div>
          <span className="cta-overline-support">Besoin d'aide immédiate ?</span>
          <h2 className="cta-title-support">
            Notre équipe
            <br />
            est disponible.
          </h2>
          <p className="cta-sub-support">
            Lundi – Vendredi · 8h30 – 17h30 · Réponse email sous 24h ouvrées.
          </p>
        </div>
        <div className="cta-actions">
          <a href="#demande" className="btn-cta-white">
            Soumettre une demande
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </a>
          <Link to="/ressources" className="btn-cta-outline">
            Télécharger un manuel
          </Link>
        </div>
      </div>
    </section>
  );
}
