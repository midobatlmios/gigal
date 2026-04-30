export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <span className="cta-overline">Travaillons ensemble</span>
        <h2 className="cta-title">Un projet ? Un besoin ?</h2>
        <p className="cta-sub">Notre équipe commerciale et technique est disponible pour vous accompagner.</p>
        <div className="cta-actions">
          <a href="#" className="btn-cta-white">
            Nous contacter
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </a>
          <a href="#" className="btn-cta-outline">Télécharger notre catalogue</a>
        </div>
      </div>
    </section>
  );
}
