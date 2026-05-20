import { Link } from 'react-router-dom';

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

export default function OffresEmploi() {
  return (
    <section className="offres-section fade-in-section">
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
                <Link to="/contact" className="btn-postuler">
                  Postuler
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
