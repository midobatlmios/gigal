export default function ContactMapSection() {
  return (
    <div className="contact-map-section fade-in-section">
      <div className="contact-map-placeholder">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
        <div className="contact-map-label">Google Maps — Adresse GIGALAB à intégrer</div>
        <div className="contact-map-badge">
          <div className="contact-map-dot" />
          <div>
            <div className="contact-map-name">GIGALAB Diagnostic</div>
            <div className="contact-map-city">Casablanca, Maroc</div>
          </div>
        </div>
      </div>
    </div>
  );
}
