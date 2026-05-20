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

export default function ValeursEmployeur() {
  return (
    <section className="valeurs-section fade-in-section">
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
  );
}
