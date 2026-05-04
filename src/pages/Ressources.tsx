import { Link } from 'react-router-dom';

export default function Ressources() {
  const stats = [
    { num: '120', suffix: '+', label: 'Documents' },
    { num: '48', suffix: '+', label: 'Vidéos' },
    { num: '15', suffix: '+', label: 'Logiciels' },
  ];

  const searchTags = ['Biolis', 'Celltac G', 'Blue Diver', 'ISO 13485', 'CalproSmart', 'Coag 4D'];

  const filterTabs = [
    { label: 'Tout', icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="2" width="4" height="20" rx="1" />
        <rect x="6" y="2" width="4" height="20" rx="1" />
      </svg>
    ) },
    { label: 'Documentation', icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ) },
    { label: 'Fiches produits', icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ) },
    { label: 'Vidéos formation', icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ) },
    { label: 'Logiciels', icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ) },
    { label: 'Certifications', icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ) },
  ];

  const docs = [
    {
      cat: 'Manuel',
      title: "Manuel d'utilisation Biolis i50 Superior",
      desc: "Guide complet d'installation, calibration, maintenance et dépannage de l'analyseur Biolis i50 Superior — 480 t/h, HbA1c intégré.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '4.2 Mo — v3.1',
      delay: 'delay-1',
      iconWrapClass: 'doc-icon-red',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      cat: 'Manuel',
      title: 'Manuel utilisateur Celltac G — Hématologie',
      desc: "Procédures d'exploitation complètes pour l'analyseur hématologique Celltac G — 90 éch/h, laser + cytométrie en flux.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '3.8 Mo — v2.4',
      delay: 'delay-2',
      iconWrapClass: 'doc-icon-dark',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
    {
      cat: 'Protocole',
      title: 'Protocole de contrôle qualité — Maglumi X8',
      desc: "Procédures CQ, intervalles de référence et validation des méthodes pour l'immunoanalyse sur Maglumi X8 (Snibe).",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '1.9 Mo — v1.2',
      delay: 'delay-3',
      iconWrapClass: 'doc-icon-blue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6m-6 0-4 3m10-3 4 3M9 14h6" />
        </svg>
      ),
    },
    {
      cat: 'Certification',
      title: 'Certificat ISO 13485:2016 — GIGALAB Manufacturing',
      desc: "Certificat officiel ISO 13485:2016 délivré par Bureau Veritas, valable jusqu'en mars 2029. Couvre conception, fabrication et distribution.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '0.5 Mo',
      delay: 'delay-1',
      iconWrapClass: 'doc-icon-green',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      cat: 'Guide rapide',
      title: 'Quick Start Guide — Blue Diver Platinum',
      desc: "Guide de démarrage rapide en 5 étapes pour l'immunodot Blue Diver Platinum. Mise en route en moins de 30 minutes.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '0.8 Mo — v1.5',
      delay: 'delay-2',
      iconWrapClass: 'doc-icon-purple',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
        </svg>
      ),
    },
    {
      cat: 'Catalogue',
      title: 'Catalogue complet GIGALAB 2026',
      desc: "Catalogue produits complet : biochimie, hématologie, immunoanalyse, coagulation, tests rapides et milieux de culture — édition 2026.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '12.4 Mo',
      delay: 'delay-3',
      iconWrapClass: 'doc-icon-orange',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
  ];

  const fiches = [
    { name: 'Biolis 30i', brand: 'Tokyo Boeki / Biolis', bg: '#1a3a5c', specs: ['450 tests/heure', 'ISE Na/K/Cl intégré', 'Plateau réfrigéré'], delay: 'delay-1', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" /></svg> },
    { name: 'Biolis i24 Premium', brand: 'Tokyo Boeki / Biolis', bg: '#1a3a5c', specs: ['400 tests/heure', '39 paramètres', 'Connexion LIS'], delay: 'delay-2', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" /></svg> },
    { name: 'Celltac G', brand: 'Nihon Kohden', bg: '#2d1b4e', specs: ['90 échantillons/heure', 'Laser + cytométrie', 'WBC 5-part diff'], delay: 'delay-3', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg> },
    { name: 'Maglumi X8', brand: 'Snibe Diagnostic', bg: '#1e3a2e', specs: ['Chimiluminescence CLIA', 'Chargement continu', 'Connexion LIS/HIS'], delay: 'delay-4', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg> },
    { name: 'Blue Diver Platinum', brand: 'D-Tek', bg: '#3a1a1a', specs: ['24 tests / 60 minutes', 'Sans fluides', 'Immunodot autoimmunité'], delay: 'delay-1', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
    { name: 'Coag 4D', brand: 'GIGALAB / STA', bg: '#1a2a3a', specs: ['4 canaux simultanés', 'Chromogénique + turbid.', 'D-dimère intégré'], delay: 'delay-2', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" /></svg> },
    { name: 'CalproSmart', brand: 'CALPRO AS', bg: '#2a1a3a', specs: ['Calprotectine fécale', 'Résultat en 18 min', 'MICI & rectocolite'], delay: 'delay-3', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg> },
    { name: 'IDS-ISYS', brand: 'Immunodiagnostic Systems', bg: '#1e3a1a', specs: ['120 tests/heure', 'Vitamin D, PTH, AMH', 'Chimiluminescence'], delay: 'delay-4', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  ];

  const videos = [
    {
      title: 'Installation et première mise en route du Biolis i50 Superior',
      desc: "De l'unboxing à la première calibration — étape par étape avec notre ingénieur.",
      duration: '14:32',
      level: 'Initiation',
      levelClass: 'level-init',
      bg: 'linear-gradient(135deg, #1a3a5c, #0d2240)',
      author: 'Dr. Karim Z.',
      role: 'Ingénieur Applications',
      avatar: 'KZ',
      delay: 'delay-1',
    },
    {
      title: 'Maintenance préventive mensuelle du Celltac G',
      desc: "Nettoyage des fluidiques, remplacement des lampes, vérification du laser — procédures complètes.",
      duration: '08:15',
      level: 'Intermédiaire',
      levelClass: 'level-inter',
      bg: 'linear-gradient(135deg, #2d1b4e, #1a0f30)',
      author: 'A. Rahmani',
      role: 'Dir. Technique',
      avatar: 'AR',
      delay: 'delay-2',
    },
    {
      title: 'Validation de méthode et contrôle qualité sur Blue Diver Platinum',
      desc: 'Protocole complet de validation analytique : précision, exactitude, valeurs de référence.',
      duration: '22:48',
      level: 'Avancé',
      levelClass: 'level-adv',
      bg: 'linear-gradient(135deg, #1e3a2e, #0f2018)',
      author: 'Dr. S. Benali',
      role: 'Biologiste Référent',
      avatar: 'SB',
      delay: 'delay-3',
    },
  ];

  const software = [
    {
      title: 'GIGALAB LIS Connector v4.2',
      desc: "Interface universelle de connexion au Système d'Information de Laboratoire. Compatible HL7, ASTM, FHIR. Supporte tous les appareils du catalogue.",
      version: 'v4.2.1 — Avr 2026',
      delay: 'delay-1',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      title: 'Biolis DataManager v3.0',
      desc: "Logiciel de gestion des données analytiques pour la gamme Biolis (30i, i24, i50). Courbes de calibration, archivage CQ, export Excel.",
      version: 'v3.0.5 — Mars 2026',
      delay: 'delay-2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" />
        </svg>
      ),
    },
    {
      title: 'DiverSoft Reporting v2.1',
      desc: "Suite d'analyse et de rapport pour le Blue Diver Platinum. Génération automatique de comptes-rendus au format PDF ou HL7 pour les systèmes experts.",
      version: 'v2.1.0 — Fév 2026',
      delay: 'delay-3',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: 'GIGALAB Remote Diagnostics',
      desc: "Application mobile iOS/Android pour le suivi à distance des équipements, alertes de maintenance et visualisation des paramètres en temps réel.",
      version: 'v1.4.2 — Avr 2026',
      delay: 'delay-4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero-ressources">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        <div className="hero-inner-ressources">
          <div>
            <div className="breadcrumb fade-up">
              <Link to="/">Accueil</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Ressources</span>
            </div>
            <h1 className="fade-up delay-1">
              Centre de
              <br />
              <em>ressources</em>
            </h1>
            <p className="hero-sub fade-up delay-2">
              Fiches produits, manuels d'utilisation, logiciels, vidéos de formation — tous les
              documents dont vous avez besoin pour tirer le meilleur de vos équipements GIGALAB.
            </p>
            <div className="hero-stats-ressources fade-up delay-3">
              {stats.map((s) => (
                <div className="ressources-stat-item" key={s.label}>
                  <div className="ressources-stat-num">
                    {s.num}
                    <span>{s.suffix}</span>
                  </div>
                  <div className="ressources-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-search-wrap-ressources fade-up delay-2">
            <div className="hero-search-ressources">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input type="text" placeholder="Rechercher un document, produit ou équipement…" />
              <button className="hero-search-btn">Rechercher</button>
            </div>
            <div className="hero-search-tags-ressources">
              {searchTags.map((tag) => (
                <span className="search-tag-ressources" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FILTER BAR ═══════════════════ */}
      <div className="filter-bar-ressources">
        <div className="filter-inner-ressources">
          {filterTabs.map((tab, i) => (
            <div className={`filter-tab-ressources ${i === 0 ? 'active' : ''}`} key={tab.label}>
              {tab.icon}
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════ DOCUMENTATION ═══════════════════ */}
      <section className="docs-section">
        <div className="container">
          <div className="sec-header">
            <div>
              <div className="overline">Documents techniques</div>
              <h2 className="section-title">Documentation</h2>
            </div>
            <a href="#" className="btn-outline-ressources">
              Tout télécharger
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
          <div className="docs-grid">
            {docs.map((d) => (
              <div className={`doc-card fade-up ${d.delay}`} key={d.title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className={`doc-icon-wrap ${d.iconWrapClass}`}>{d.icon}</div>
                  <div>
                    <div className="doc-cat">{d.cat}</div>
                    <div className="doc-title">{d.title}</div>
                  </div>
                </div>
                <div className="doc-desc">{d.desc}</div>
                <div className="doc-meta">
                  <span className={`doc-format ${d.fmtClass}`}>{d.format}</span>
                  <span className="doc-size">{d.size}</span>
                  <a href="#" className="doc-dl">
                    Télécharger{' '}
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FICHES PRODUITS ═══════════════════ */}
      <section className="fiches-section">
        <div className="container">
          <div className="sec-header">
            <div>
              <div className="overline">Téléchargements</div>
              <h2 className="section-title">Fiches techniques produits</h2>
            </div>
          </div>
          <div className="fiches-grid">
            {fiches.map((f) => (
              <div className={`fiche-card fade-up ${f.delay}`} key={f.name}>
                <div className="fiche-header">
                  <div className="fiche-thumb" style={{ background: f.bg }}>{f.icon}</div>
                  <div>
                    <div className="fiche-name">{f.name}</div>
                    <div className="fiche-brand">{f.brand}</div>
                  </div>
                </div>
                <div className="fiche-body">
                  <div className="fiche-specs">
                    {f.specs.map((s) => (
                      <div className="fiche-spec" key={s}>{s}</div>
                    ))}
                  </div>
                </div>
                <div className="fiche-footer">
                  <a href="#" className="fiche-dl">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Fiche PDF
                  </a>
                  <span className="fiche-format">PDF</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ VIDÉOS FORMATION ═══════════════════ */}
      <section className="videos-section">
        <div className="container">
          <div className="overline">Formation</div>
          <h2 className="section-title">Vidéos de formation</h2>
          <p className="section-sub">
            Tutoriels d'installation, procédures de calibration et guides de dépannage filmés par nos
            experts techniques.
          </p>
          <div className="videos-grid">
            {videos.map((v) => (
              <div className={`video-card fade-up ${v.delay}`} key={v.title}>
                <div className="video-thumb">
                  <div className="video-thumb-bg" style={{ background: v.bg }} />
                  <div className="video-thumb-grid" />
                  <div className="video-play-btn">
                    <svg viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z" /></svg>
                  </div>
                  <span className="video-duration">{v.duration}</span>
                  <span className={`video-level ${v.levelClass}`}>{v.level}</span>
                </div>
                <div className="video-body">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
                <div className="video-footer">
                  <div className="video-avatar">{v.avatar}</div>
                  <div className="video-author">
                    <strong>{v.author}</strong> — {v.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ LOGICIELS ═══════════════════ */}
      <section className="software-section">
        <div className="container">
          <div className="sec-header">
            <div>
              <div className="overline">Téléchargements</div>
              <h2 className="section-title">Logiciels & pilotes</h2>
            </div>
          </div>
          <div className="software-grid">
            {software.map((sw) => (
              <div className={`software-card fade-up ${sw.delay}`} key={sw.title}>
                <div className="sw-icon">{sw.icon}</div>
                <div className="sw-info">
                  <h3>{sw.title}</h3>
                  <p>{sw.desc}</p>
                </div>
                <div className="sw-meta">
                  <span className="sw-version">{sw.version}</span>
                  <a href="#" className="sw-dl-btn">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Télécharger
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="cta-ressources">
        <div className="cta-inner-ressources">
          <div className="cta-text">
            <h2>Vous ne trouvez pas ce dont vous avez besoin ?</h2>
            <p>
              Notre équipe technique peut vous envoyer tout document spécifique sur demande —
              manuels, protocoles, fiches sécurité.
            </p>
          </div>
          <div className="cta-btns">
            <a href="#" className="btn-white">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contacter le support
            </a>
            <a href="#" className="btn-ghost-white">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 01 3.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 013.56 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.08 6.08l.9-.9a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Hotline support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
