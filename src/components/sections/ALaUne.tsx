import { Link } from 'react-router-dom';

export default function ALaUne() {
  return (
    <section className="fade-in-section" style={{ background: 'var(--white)', padding: '72px 40px 40px' }}>
      <div className="container">
        <div className="overline fade-up">À la une</div>
        <h2 className="section-title fade-up delay-1">L'actualité phare</h2>

        <div className="featured-article fade-up delay-2">
          <div className="featured-image">
            <div className="featured-image-bg" />
            <div className="featured-image-grid" />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }}>
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6m-6 0-4 3m10-3 4 3M9 14h6" />
              </svg>
            </div>
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
              <span style={{ background: 'var(--red)', color: 'var(--white)', fontSize: 10, fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 50 }}>Exclusif</span>
            </div>
            <div className="featured-badge-img">
              <div className="badge-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="badge-text">Certification ISO 13485</div>
                <div className="badge-sub">Renouvelée mars 2026</div>
              </div>
            </div>
          </div>
          <div className="featured-content">
            <div className="article-meta">
              <span className="article-cat cat-certification">Certification</span>
              <span className="article-date">15 mars 2026</span>
            </div>
            <h2>
              GIGALAB renouvelle sa certification ISO 13485 pour ses dispositifs médicaux de
              diagnostic
            </h2>
            <p>
              Après un audit rigoureux de trois jours conduit par Bureau Veritas, GIGALAB obtient
              le renouvellement de sa certification ISO 13485:2016, confirmant l'excellence de son
              système de management de la qualité pour la conception, la fabrication et la
              distribution de dispositifs médicaux de diagnostic in vitro.
            </p>
            <div className="article-tags">
              <span className="tag">ISO 13485</span>
              <span className="tag">Qualité</span>
              <span className="tag">Dispositifs médicaux</span>
              <span className="tag">Bureau Veritas</span>
            </div>
            <Link to="/actualites" className="btn btn-primary">
              Lire l'article
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
