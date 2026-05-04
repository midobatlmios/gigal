export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <div className="hero-overline fade-up fade-up-1">GIGALAB Diagnostic</div>
            <h1 className="hero-h1 fade-up fade-up-2">
              We Move<br />Behind <em>Science.</em>
            </h1>
            <p className="hero-sub fade-up fade-up-3">
              Leader africain en fabrication de tests diagnostiques et distribution multi-marques.
            </p>
            <div className="hero-actions fade-up fade-up-4">
              <a href="#" className="btn btn-primary">
                Découvrir nos solutions
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </a>
              <a href="#" className="btn btn-outline-white">Nous contacter</a>
            </div>
            <div className="hero-certifs fade-up fade-up-5">
              <span className="hero-certif-label">Certifié</span>
              <span className="certif-pill">ISO 9001</span>
              <span className="certif-pill">ISO 13485</span>
              <span className="certif-pill">CE</span>
              <span className="certif-pill">IMANOR</span>
            </div>
          </div>
          <div className="hero-photo-wrap fade-up fade-up-3">
            <img
              src="/Gigalab-photo-2.jpg"
              alt="Siège GIGALAB"
              className="hero-photo-img"
            />
            <div className="hero-photo-badge">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div className="hero-photo-badge-dot" />
                  <div className="hero-photo-badge-text">GIGALAB Diagnostic</div>
                </div>
                <div className="hero-photo-badge-sub">Casablanca, Maroc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
