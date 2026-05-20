import { Link } from 'react-router-dom';

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

export default function ContactHero() {
  return (
    <section className="page-hero-contact">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
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
  );
}
