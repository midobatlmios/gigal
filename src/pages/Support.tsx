import { Link } from 'react-router-dom';

export default function Support() {
  const services = [
    {
      title: 'Hotline technique',
      desc: 'Une ligne dédiée pour répondre à vos questions et vous guider en temps réel — un technicien GIGALAB toujours disponible.',
      featured: true,
      metaIcon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      meta: 'Lun – Ven · 8h30 – 17h30',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      title: 'Installation & Mise en service',
      desc: 'Nos techniciens se déplacent sur site pour installer et configurer vos équipements selon les standards constructeur.',
      featured: false,
      metaIcon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      meta: 'Qualification incluse',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: 'Formation utilisateur',
      desc: "Sessions de formation adaptées à votre équipe — sur site ou dans nos locaux. Protocoles, maintenance de routine et bonnes pratiques.",
      featured: false,
      metaIcon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      meta: 'Sur site ou en présentiel',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      title: 'Maintenance préventive',
      desc: 'Programme de maintenance planifiée pour garantir la performance et la longévité de vos équipements sur le long terme.',
      featured: false,
      metaIcon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      meta: 'Contrat annuel disponible',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Dépannage sur site',
      desc: 'Intervention rapide de nos techniciens qualifiés en cas de panne ou dysfonctionnement — délai de réponse maîtrisé.',
      featured: false,
      metaIcon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      meta: 'Intervention rapide',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: 'Approvisionnement réactifs',
      desc: 'Stock réactifs et consommables maintenu — livraisons régulières programmées pour garantir la continuité de vos analyses.',
      featured: false,
      metaIcon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      meta: 'Zéro rupture de stock',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v11a2 2 0 002 2h10a2 2 0 002-2V8M10 12h4" />
        </svg>
      ),
    },
  ];

  const contactMethods = [
    {
      label: 'Téléphone',
      value: '+212 522 34 03 15 / 35 29 22',
      sub: 'Lundi – Vendredi · 8h30 – 17h30',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Email support',
      value: 'support@gigalab.ma',
      sub: 'Réponse sous 24h ouvrées',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
    {
      label: 'Siège GIGALAB',
      value: 'Casablanca, Maroc',
      sub: 'Adresse complète à compléter',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const supportedTags = [
    'Biolis 30i', 'Biolis i24', 'Biolis i50', 'Celltac G', 'Celltac F',
    'Celltac Es', 'Celltac α', 'Maglumi X8', 'Biolumi CX8', 'IDS-ISYS',
    'Blue Diver', 'Coag 2D', 'Coag 4D', 'Microscopes GI',
  ];

  const processSteps = [
    { num: '01', name: 'Soumission', desc: 'Formulaire en ligne ou appel hotline — décrivez votre problème en 2 minutes' },
    { num: '02', name: 'Qualification', desc: "Notre équipe technique analyse votre demande et évalue le niveau d'urgence" },
    { num: '03', name: 'Prise en charge', desc: "Support à distance ou planification d'une intervention terrain selon la situation" },
    { num: '04', name: 'Résolution', desc: "Confirmation de la résolution et compte-rendu d'intervention transmis au client" },
  ];

  return (
    <>
      {/* ═══════════════════ PAGE HERO ═══════════════════ */}
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

      {/* ═══════════════════ NOS SERVICES ═══════════════════ */}
      <section className="services-section">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <div className="overline">Ce que nous faisons</div>
            <h2 className="support-section-title">
              Nos services
              <br />
              de <em>support.</em>
            </h2>
            <p className="support-section-sub">
              De l'installation initiale au suivi quotidien — une équipe technique dédiée à la
              disponibilité de vos équipements.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className={`service-card ${s.featured ? 'featured' : ''}`} key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-meta">
                  {s.metaIcon}
                  {s.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FORMULAIRE + CONTACT ═══════════════════ */}
      <section className="support-contact-section" id="demande">
        <div className="container">
          <div className="support-contact-inner">
            {/* Formulaire */}
            <div className="support-form-wrap">
              <div className="overline">Demande de support</div>
              <h2 className="support-form-title">
                Soumettre une
                <br />
                <em>demande.</em>
              </h2>
              <p className="support-form-subtitle">
                Décrivez votre problème ou besoin — notre équipe technique vous recontacte sous 24h
                ouvrées.
              </p>
              <form>
                <div className="support-form-row">
                  <div>
                    <label className="support-form-label">Nom complet</label>
                    <input type="text" className="support-form-input" placeholder="Dr. Ahmed Benali" />
                  </div>
                  <div>
                    <label className="support-form-label">Établissement</label>
                    <input type="text" className="support-form-input" placeholder="Laboratoire / Hôpital" />
                  </div>
                </div>
                <div className="support-form-row">
                  <div>
                    <label className="support-form-label">Téléphone</label>
                    <input type="tel" className="support-form-input" placeholder="+212 6XX XXX XXX" />
                  </div>
                  <div>
                    <label className="support-form-label">Email</label>
                    <input type="email" className="support-form-input" placeholder="contact@labo.ma" />
                  </div>
                </div>
                <div className="support-form-group">
                  <label className="support-form-label">Équipement concerné</label>
                  <select className="support-form-select">
                    <option value="" disabled selected>
                      Sélectionner un équipement
                    </option>
                    <optgroup label="Biochimie">
                      <option>Biolis 30i</option>
                      <option>Biolis i24 Premium</option>
                      <option>Biolis i50 Superior</option>
                    </optgroup>
                    <optgroup label="Hématologie">
                      <option>Celltac G</option>
                      <option>Celltac F</option>
                      <option>Celltac Es</option>
                      <option>Celltac α</option>
                    </optgroup>
                    <optgroup label="Immunoanalyse">
                      <option>Maglumi X8</option>
                      <option>Biolumi CX8</option>
                      <option>IDS-ISYS</option>
                      <option>Blue Diver</option>
                      <option>Alfa Reader</option>
                      <option>CalproSmart</option>
                    </optgroup>
                    <optgroup label="Coagulation">
                      <option>Coag 2D</option>
                      <option>Coag 4D</option>
                    </optgroup>
                    <option>Autre équipement</option>
                  </select>
                </div>
                <div className="support-form-group">
                  <label className="support-form-label">Description du problème</label>
                  <textarea
                    className="support-form-textarea"
                    placeholder="Décrivez le dysfonctionnement, le message d'erreur affiché, ou la nature de votre demande..."
                  />
                </div>
                <div className="support-form-group">
                  <label className="support-form-label">Niveau d'urgence</label>
                  <div className="urgence-group">
                    <button type="button" className="urgence-btn selected-low">
                      Faible
                    </button>
                    <button type="button" className="urgence-btn selected-med">
                      Modérée
                    </button>
                    <button type="button" className="urgence-btn selected-high">
                      Urgente — arrêt d'activité
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary support-form-submit">
                  Soumettre la demande
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M1 7h12M7 1l6 6-6 6" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Bloc contact */}
            <div className="support-contact-aside">
              <div className="support-aside-title">Nous contacter directement</div>
              <div className="support-contact-methods">
                {contactMethods.map((m) => (
                  <div className="support-contact-method" key={m.label}>
                    <div className="support-method-icon">{m.icon}</div>
                    <div>
                      <div className="support-method-label">{m.label}</div>
                      <div className="support-method-value">{m.value}</div>
                      <div className="support-method-sub">{m.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="supported-wrap">
                <div className="supported-title">Équipements supportés</div>
                <div className="supported-tags">
                  {supportedTags.map((tag) => (
                    <span className="supported-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESSUS D'INTERVENTION ═══════════════════ */}
      <section className="support-process-section">
        <div className="container">
          <div className="support-process-header">
            <div className="overline" style={{ justifyContent: 'center' }}>
              Comment ça marche
            </div>
            <h2>
              De la demande à la <em>résolution.</em>
            </h2>
            <p>Un processus clair et réactif — vous savez toujours où en est votre demande.</p>
          </div>
          <div className="process-steps-row">
            {processSteps.map((step) => (
              <div className="process-step-col" key={step.num}>
                <div className="process-step-circle">{step.num}</div>
                <div className="process-step-name">{step.name}</div>
                <div className="process-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="cta-support">
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
    </>
  );
}
