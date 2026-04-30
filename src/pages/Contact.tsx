import { Link } from 'react-router-dom';

export default function Contact() {
  const heroContacts = [
    {
      label: 'Téléphone',
      value: '+212 522 34 03 15 / 35 29 22',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 013.56 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.08 6.08l.9-.9a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Email général',
      value: 'info@gigalab.ma',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
    {
      label: 'Adresse',
      value: 'Casablanca, Maroc',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const depts = [
    {
      name: 'Commercial général',
      email: 'contact@gigalab.ma',
      desc: 'Devis, tarifs, démonstrations, partenariats',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
    },
    {
      name: 'Export Afrique',
      email: 'export@gigalab.ma',
      desc: 'Distribution internationale, marchés africains',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
      ),
    },
    {
      name: 'Support technique',
      email: 'support@gigalab.ma',
      desc: 'Installation, maintenance, hotline, dépannage',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      label: 'LinkedIn',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ═══════════════════ PAGE HERO ═══════════════════ */}
      <section className="page-hero-contact">
        <div className="page-hero-grid-contact" />
        <div className="page-hero-glow-contact" />
        <div className="page-hero-glow-2-contact" />
        <div className="page-hero-inner-contact">
          <div className="container">
            <div className="breadcrumb-contact fade-up fade-up-1">
              <Link to="/">Accueil</Link>
              <div className="breadcrumb-sep-contact" />
              <span>Contact</span>
            </div>
            <div className="contact-hero-layout">
              <div>
                <h1 className="page-title-contact fade-up fade-up-2">
                  <em>Contact.</em>
                </h1>
                <p className="page-subtitle-contact fade-up fade-up-3">
                  Une question ? Un projet ? On vous répond.
                </p>
                <a href="#formulaire" className="btn btn-primary fade-up fade-up-4">
                  Envoyer un message
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M1 7h12M7 1l6 6-6 6" />
                  </svg>
                </a>
              </div>
              <div className="hero-contacts fade-up fade-up-3">
                {heroContacts.map((c) => (
                  <div className="hero-contact-item" key={c.label}>
                    <div className="hero-contact-icon">{c.icon}</div>
                    <div>
                      <div className="hero-contact-label">{c.label}</div>
                      <div className="hero-contact-value">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FORMULAIRE + INFOS ═══════════════════ */}
      <section className="contact-main" id="formulaire">
        <div className="container">
          <div className="contact-main-inner">
            {/* Formulaire */}
            <div className="contact-form-block">
              <div className="overline">Écrivez-nous</div>
              <h2 className="contact-form-title">
                Votre <em>message.</em>
              </h2>
              <p className="contact-form-sub">
                Notre équipe vous répond sous 24h ouvrées. Pour les urgences techniques, utilisez la{' '}
                <Link to="/" style={{ color: 'var(--red)', fontWeight: 700 }}>
                  page Support
                </Link>
                .
              </p>
              <form>
                <div className="contact-form-row">
                  <div>
                    <label className="contact-form-label">Nom complet</label>
                    <input type="text" className="contact-form-input" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="contact-form-label">Société / Établissement</label>
                    <input type="text" className="contact-form-input" placeholder="Nom de votre structure" />
                  </div>
                </div>
                <div className="contact-form-row">
                  <div>
                    <label className="contact-form-label">Email</label>
                    <input type="email" className="contact-form-input" placeholder="vous@exemple.ma" />
                  </div>
                  <div>
                    <label className="contact-form-label">Téléphone</label>
                    <input type="tel" className="contact-form-input" placeholder="+212 6XX XXX XXX" />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Objet de la demande</label>
                  <select className="contact-form-select">
                    <option value="" disabled selected>
                      Sélectionner un objet
                    </option>
                    <option>Demande commerciale — Équipements</option>
                    <option>Demande commerciale — Tests rapides GLD</option>
                    <option>Demande commerciale — Milieux de culture</option>
                    <option>Partenariat / Distribution</option>
                    <option>Export Afrique</option>
                    <option>Support technique</option>
                    <option>Candidature spontanée</option>
                    <option>Presse / Médias</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea
                    className="contact-form-textarea"
                    placeholder="Décrivez votre besoin, votre projet ou votre question..."
                  />
                </div>
                <button type="submit" className="btn btn-primary contact-form-submit">
                  Envoyer le message
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M1 7h12M7 1l6 6-6 6" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Infos contact */}
            <div className="contact-info-block">
              <div className="contact-info-title">Nos départements</div>
              <div className="contact-dept-cards">
                {depts.map((d) => (
                  <div className="contact-dept-card" key={d.name}>
                    <div className="contact-dept-icon">{d.icon}</div>
                    <div>
                      <div className="contact-dept-name">{d.name}</div>
                      <div className="contact-dept-email">{d.email}</div>
                      <div className="contact-dept-desc">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-card-label">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Horaires
                  </div>
                  <div className="contact-info-card-content">
                    <span>Lundi – Vendredi</span>
                    <span style={{ fontWeight: 800 }}>8h30 – 17h30</span>
                    <span style={{ fontSize: 11, color: 'var(--gray-400)', marginTop: 4 }}>
                      Fermé weekends &amp; jours fériés
                    </span>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-card-label">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Adresse
                  </div>
                  <div className="contact-info-card-content">
                    <span style={{ fontWeight: 800 }}>GIGALAB Diagnostic</span>
                    <span>[Adresse à compléter]</span>
                    <span>Casablanca, Maroc</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="contact-social-wrap">
                <div className="contact-social-label">Suivez-nous</div>
                <div className="contact-social-row">
                  {socials.map((s) => (
                    <a href="#" className="contact-social-btn" key={s.label}>
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MAP ═══════════════════ */}
      <div className="contact-map-section">
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
    </>
  );
}
