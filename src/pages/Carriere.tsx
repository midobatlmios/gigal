import { Link } from 'react-router-dom';

export default function Carriere() {
  const valeurs = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Impact réel',
      desc: "Votre travail contribue directement au diagnostic de millions de patients au Maroc et en Afrique. Ce n'est pas une startup — c'est une mission de santé publique portée par une entreprise privée.",
      delay: 'delay-1',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
      ),
      title: 'Formation continue',
      desc: 'Formations techniques certifiantes, voyages d\'études chez nos partenaires internationaux (Japon, Belgique, Chine), abonnements e-learning et participation aux congrès scientifiques.',
      delay: 'delay-2',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Culture d'équipe",
      desc: 'Equipes pluridisciplinaires, management participatif, projets transversaux. Chez GIGALAB, les idées remontent. Les meilleurs talents sont promus, pas recrutés en externe.',
      delay: 'delay-3',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
          <path d="M12 6v2m0 8v2" />
        </svg>
      ),
      title: 'Rémunération compétitive',
      desc: 'Salaires au-dessus du marché, primes de performance trimestrielles, intéressement aux résultats, mutuelle santé famille, tickets restaurant et véhicule de service pour les postes terrain.',
      delay: 'delay-1',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Croissance régionale',
      desc: "GIGALAB s'étend au Sénégal, en Côte d'Ivoire et en Tunisie. Des opportunités d'expatriation et de carrière internationale s'ouvrent pour les collaborateurs performants.",
      delay: 'delay-2',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Équilibre vie pro/perso',
      desc: '36h/semaine, congés renforcés, télétravail partiel pour les postes éligibles, crèche entreprise partenaire, programme bien-être : sport, méditation, soutien psychologique.',
      delay: 'delay-3',
    },
  ];

  const offres = [
    {
      title: 'Ingénieur Applications Biochimie',
      tags: [
        { label: 'CDI', className: 'tag-cdi' },
        { label: 'Casablanca', className: 'tag-casa' },
      ],
      desc: 'Formation, installation et support technique des analyseurs Biolis sur sites clients. Formation Bac+5 Biochimie ou Biologie Médicale requise. Expérience en laboratoire d\'analyse souhaitée.',
      date: 'Publié il y a 3 jours',
      iconBg: 'var(--red)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" />
        </svg>
      ),
      delay: 'delay-1',
    },
    {
      title: 'Responsable Développement Commercial — Afrique subsaharienne',
      tags: [
        { label: 'CDI', className: 'tag-cdi' },
        { label: 'Casablanca', className: 'tag-casa' },
        { label: 'Déplacements Afrique', className: 'tag-remote' },
      ],
      desc: 'Développement du réseau de distribution dans les pays cibles (Sénégal, CI, Cameroun). Profil commercial expérimenté, connaissance du secteur médical, bilingue français/anglais.',
      date: 'Publié il y a 5 jours',
      iconBg: 'steelblue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      delay: 'delay-2',
    },
    {
      title: 'Responsable Qualité & Affaires Réglementaires (QA/RA)',
      tags: [
        { label: 'CDI', className: 'tag-cdi' },
        { label: 'Casablanca', className: 'tag-casa' },
      ],
      desc: 'Pilotage du SMQ ISO 13485, gestion des dossiers CE Mark et enregistrements CIMDN. Expérience exigée en dispositifs médicaux DIV. Connaissance des référentiels ISO 15189 appréciée.',
      date: 'Publié il y a 1 semaine',
      iconBg: '#228B22',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      delay: 'delay-3',
    },
    {
      title: 'Ingénieur R&D — Milieux de Culture Microbiologiques',
      tags: [
        { label: 'CDI', className: 'tag-cdi' },
        { label: 'Casablanca', className: 'tag-casa' },
      ],
      desc: "Développement et optimisation de nouvelles formulations de milieux de culture (gélosés et liquides). Bac+5 Microbiologie requis. Expérience en laboratoire R&D industriel souhaitée.",
      date: 'Publié il y a 2 semaines',
      iconBg: 'darkviolet',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
      delay: 'delay-1',
    },
    {
      title: 'Technicien Service Après-Vente — Équipements de Laboratoire',
      tags: [
        { label: 'CDI', className: 'tag-cdi' },
        { label: 'Rabat', className: 'tag-rabat' },
      ],
      desc: "Installation, maintenance préventive et corrective d'analyseurs (Biolis, Celltac, Maglumi). Bac+3 en maintenance biomédicale ou électrotechnique. Permis B requis.",
      date: 'Publié il y a 2 semaines',
      iconBg: '#D2691E',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
      ),
      delay: 'delay-2',
    },
    {
      title: 'Chargé(e) de Communication & Marketing Digital',
      tags: [
        { label: 'CDI', className: 'tag-cdi' },
        { label: 'Casablanca', className: 'tag-casa' },
      ],
      desc: 'Gestion des réseaux sociaux, rédaction de contenus scientifiques vulgarisés, création de supports visuels et coordination des événements. Profil Bac+4/5 Communication ou Marketing.',
      date: 'Publié il y a 3 semaines',
      iconBg: 'var(--charcoal)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
      delay: 'delay-3',
    },
    {
      title: 'Stage PFE — Développement logiciel interfaces LIS (6 mois)',
      tags: [
        { label: 'Stage', className: 'tag-stage' },
        { label: 'Casablanca', className: 'tag-casa' },
      ],
      desc: "Développement d'un module d'interface universelle entre équipements de laboratoire et SIL (HL7/ASTM). Profil Ingénierie informatique ou Génie Logiciel, maîtrise Python ou C# requise.",
      date: 'Publié il y a 1 mois',
      iconBg: 'steelblue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      delay: 'delay-1',
    },
  ];

  const perks = [
    'CV examiné par un humain (pas un ATS) dans les 72h',
    'Profil conservé 24 mois dans notre base active',
    'Alertes automatiques pour les nouveaux postes correspondant à votre profil',
    'Réponse systématique à chaque candidature reçue',
  ];

  const processSteps = [
    { num: 1, label: 'Candidature\nen ligne', active: true, icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
    { num: 2, label: 'Appel RH\n30 minutes', active: true, icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 013.56 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.08 6.08l.9-.9a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg> },
    { num: 3, label: 'Entretien\ntechnique', active: false },
    { num: 4, label: 'Rencontre\néquipe & manager', active: false },
    { num: 5, label: 'Offre &\nonboarding', active: false, icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /></svg> },
  ];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero-carriere">
        <div className="hero-bg-pattern" />
        <div className="hero-red-accent" />
        <div className="hero-inner-carriere">
          <div>
            <div className="breadcrumb fade-up">
              <Link to="/">Accueil</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Carrière</span>
            </div>
            <h1 className="fade-up delay-1">
              Construisez
              <br />
              l'avenir du
              <br />
              <em>diagnostic</em>
            </h1>
            <p className="hero-sub fade-up delay-2">
              Rejoignez une équipe pionnière qui réinvente la biologie médicale en Afrique. Chez
              GIGALAB, votre expertise contribue directement à améliorer la santé de millions de
              patients.
            </p>
            <div className="hero-badges fade-up delay-3">
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Casablanca & Rabat
              </div>
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Certifié Great Place to Work
              </div>
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                7 postes ouverts
              </div>
            </div>
          </div>
          <div className="hero-stats-card fade-up delay-2">
            <h3>GIGALAB en chiffres</h3>
            <div className="stats-row">
              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  120<span>+</span>
                </div>
                <div className="hero-stat-label">Collaborateurs</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  8<span>%</span>
                </div>
                <div className="hero-stat-label">Turnover annuel</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  94<span>%</span>
                </div>
                <div className="hero-stat-label">Satisfaction employés</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">
                  3.2<span>x</span>
                </div>
                <div className="hero-stat-label">Croissance 5 ans</div>
              </div>
            </div>
            <div className="hero-quote">
              « Chez GIGALAB, chaque collaborateur est un <strong>acteur de la santé</strong>. Nous
              investissons dans les personnes autant que dans les technologies. »
              <br />
              <br />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'normal' }}>
                — M. Karim Zaher, PDG GIGALAB
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALEURS EMPLOYEUR ═══════════════════ */}
      <section className="valeurs-section">
        <div className="container">
          <div className="overline fade-up">Pourquoi nous rejoindre</div>
          <h2 className="section-title fade-up delay-1">Ce qui nous différencie</h2>
          <div className="valeurs-grid">
            {valeurs.map((v) => (
              <div className={`valeur-card fade-up ${v.delay}`} key={v.title}>
                <div className="valeur-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ OFFRES D'EMPLOI ═══════════════════ */}
      <section className="offres-section">
        <div className="container">
          <div className="offres-header">
            <div>
              <div className="overline">Postes ouverts</div>
              <h2 className="section-title">7 offres disponibles</h2>
            </div>
            <div className="offres-filter">
              {['Tous', 'Technique', 'Commercial', 'R&D', 'Administration'].map((f) => (
                <div className={`filter-btn ${f === 'Tous' ? 'active' : ''}`} key={f}>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="offres-list">
            {offres.map((offre) => (
              <div className={`offre-card fade-up ${offre.delay}`} key={offre.title}>
                <div className="offre-main">
                  <div className="offre-dept-icon" style={{ background: offre.iconBg }}>
                    {offre.icon}
                  </div>
                  <div className="offre-info">
                    <h3>{offre.title}</h3>
                    <div className="offre-tags">
                      {offre.tags.map((t) => (
                        <span className={`offre-tag ${t.className}`} key={t.label}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                    <p className="offre-desc">{offre.desc}</p>
                  </div>
                </div>
                <div className="offre-cta">
                  <span className="offre-date">{offre.date}</span>
                  <a href="#" className="btn-postuler">
                    Postuler
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS CANDIDATURE ═══════════════════ */}
      <section className="process-section">
        <div className="container">
          <div className="overline">Comment ça marche</div>
          <h2 className="section-title">Notre processus de recrutement</h2>
          <div className="recrutement-steps">
            {processSteps.map((step) => (
              <div className="recrutement-step fade-up" key={step.num}>
                <div className={`step-circle-recrutement ${step.active ? 'active' : ''}`}>
                  {step.icon || step.num}
                </div>
                <div className={`step-label-recrutement ${step.active ? 'active-label' : ''}`}>
                  {step.label.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < step.label.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: 40,
              fontSize: 14,
              color: 'rgba(255,255,255,0.45)',
              textAlign: 'center',
            }}
          >
            Délai moyen de recrutement :{' '}
            <strong style={{ color: 'var(--white)' }}>3 semaines</strong> du dépôt au contrat signé.
          </p>
        </div>
      </section>

      {/* ═══════════════════ CANDIDATURE SPONTANÉE ═══════════════════ */}
      <section className="spontane-section">
        <div className="spontane-inner">
          <div className="spontane-text">
            <div className="overline">Toujours intéressé ?</div>
            <h2>Déposez votre candidature spontanée</h2>
            <p>
              Le poste parfait n'est pas encore ouvert ? Envoyez-nous votre CV. Nous constituons une
              base de candidats que nous consultons en priorité avant de publier des offres.
            </p>
            <div className="perks-list">
              {perks.map((perk) => (
                <div className="perk-item" key={perk}>
                  <div className="perk-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {perk}
                </div>
              ))}
            </div>
          </div>
          <div className="spontane-form">
            <h3>Candidature spontanée</h3>
            <div className="form-row">
              <div>
                <label className="form-label">Prénom</label>
                <input type="text" className="form-input" placeholder="Votre prénom" />
              </div>
              <div>
                <label className="form-label">Nom</label>
                <input type="text" className="form-input" placeholder="Votre nom" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email professionnel</label>
              <input type="email" className="form-input" placeholder="votre@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Téléphone</label>
              <input type="tel" className="form-input" placeholder="+212 6 XX XX XX XX" />
            </div>
            <div className="form-group">
              <label className="form-label">Domaine de compétence</label>
              <select className="form-select">
                <option value="" disabled selected>
                  Choisir votre domaine
                </option>
                <option>Biologie / Biochimie / Microbiologie</option>
                <option>Maintenance biomédicale / SAV</option>
                <option>Commercial / Business Development</option>
                <option>R&D / Innovation</option>
                <option>Qualité / Réglementaire</option>
                <option>Informatique / Logiciel</option>
                <option>Marketing / Communication</option>
                <option>Finance / Administration</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Motivation (optionnel)</label>
              <textarea
                className="form-textarea"
                placeholder="Pourquoi souhaitez-vous rejoindre GIGALAB ? Quelles sont vos aspirations ?"
              />
            </div>
            <div className="form-group">
              <label className="form-label">CV & Lettre de motivation</label>
              <div className="upload-area">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p>
                  Glissez vos fichiers ici ou{' '}
                  <strong style={{ color: 'var(--red)', cursor: 'pointer' }}>parcourez</strong>
                </p>
                <span>PDF, DOC, DOCX — max 5 Mo par fichier</span>
              </div>
            </div>
            <button type="submit" className="btn-submit">
              Envoyer ma candidature
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
