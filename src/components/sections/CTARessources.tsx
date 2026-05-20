import { Link } from 'react-router-dom';

export default function CTARessources() {
  return (
    <section className="cta-ressources fade-in-section">
      <div className="cta-inner-ressources">
        <div className="cta-text">
          <h2>Vous ne trouvez pas ce dont vous avez besoin ?</h2>
          <p>
            Notre équipe technique peut vous envoyer tout document spécifique sur demande —
            manuels, protocoles, fiches sécurité.
          </p>
        </div>
        <div className="cta-btns">
          <Link to="/support" className="btn-white">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contacter le support
          </Link>
          <Link to="/contact" className="btn-ghost-white">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 013.56 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.08 6.08l.9-.9a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Hotline support
          </Link>
        </div>
      </div>
    </section>
  );
}
