import { Link } from 'react-router-dom';

const newsCards = [
  {
    bg: 'linear-gradient(135deg, #1a3a5c, #0d2240)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    cat: 'Produit',
    catClass: 'cat-produit',
    date: '8 mars 2026',
    title: 'Biolis i50 Superior : notre nouveau fleuron pour la biochimie à haut débit',
    desc: "L'analyseur Biolis i50 Superior atteint 480 tests/heure avec intégration HbA1c et interface tactile intuitive.",
    views: '1 243',
    delay: 'delay-1',
  },
  {
    bg: 'linear-gradient(135deg, #2d1b4e, #1a0f30)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    cat: 'Événement',
    catClass: 'cat-evenement',
    date: '22 févr. 2026',
    title: 'GIGALAB au Salon Maghrébin de Biologie Médicale 2026 — Alger',
    desc: 'Retour sur notre participation au SMBM 2026 : démonstrations live, rencontres avec 300+ biologistes et 5 nouveaux partenariats signés.',
    views: '876',
    delay: 'delay-2',
  },
  {
    bg: 'linear-gradient(135deg, #1e3a2e, #0f2018)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    cat: 'Partenariat',
    catClass: 'cat-partenariat',
    date: '10 févr. 2026',
    title: 'Partenariat stratégique avec Nihon Kohden pour l\'hématologie de nouvelle génération',
    desc: 'GIGALAB renforce son accord de distribution exclusive avec Nihon Kohden, intégrant la gamme Celltac G avec laser et cytométrie en flux.',
    views: '692',
    delay: 'delay-3',
  },
  {
    bg: 'linear-gradient(135deg, #3a1a1a, #200f0f)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" />
      </svg>
    ),
    cat: 'Innovation',
    catClass: 'cat-innovation',
    date: '28 janv. 2026',
    title: 'Blue Diver Platinum : l\'immunodot sans fluides qui simplifie l\'autoimmunité',
    desc: 'Découvrez comment le Blue Diver Platinum révolutionne le diagnostic autoimmun avec 24 tests en 60 minutes, zéro manipulation de réactifs liquides.',
    views: '508',
    delay: 'delay-1',
  },
  {
    bg: 'linear-gradient(135deg, #1a2a3a, #0d1a26)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    cat: 'Certification',
    catClass: 'cat-certification',
    date: '15 janv. 2026',
    title: 'Première unité de fabrication africaine certifiée CE pour les milieux de culture',
    desc: "Nos milieux de culture GIGALAB obtiennent le marquage CE, ouvrant l'accès aux marchés européens et renforçant notre positionnement continental.",
    views: '1 087',
    delay: 'delay-2',
  },
  {
    bg: 'linear-gradient(135deg, #2a1a3a, #190f26)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    cat: 'Événement',
    catClass: 'cat-evenement',
    date: '5 janv. 2026',
    title: 'Journées de formation CalproSmart : 80 biologistes formés en décembre 2025',
    desc: 'Bilan de nos journées de formation sur le CalproSmart pour le diagnostic des MICI — 80 professionnels formés dans 6 villes du Maroc.',
    views: '743',
    delay: 'delay-3',
  },
];

export default function DernieresNews() {
  return (
    <section className="actualites-section fade-in-section">
      <div className="container">
        <div className="news-header">
          <div>
            <div className="overline">Récentes</div>
            <h2 className="section-title">Dernières nouvelles</h2>
          </div>
          <Link to="/actualites" className="btn btn-outline-dark">
            Toutes les actualités
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="actualites-grid">
          {newsCards.map((card) => (
            <div className={`actualite-card fade-up ${card.delay}`} key={card.title}>
              <div className="actualite-card-image">
                <div className="actualite-card-image-bg" style={{ background: card.bg }} />
                <div className="actualite-card-image-grid" />
                <div className="card-image-accent">{card.icon}</div>
              </div>
              <div className="actualite-card-body">
                <div className="article-meta">
                  <span className={`article-cat ${card.catClass}`}>{card.cat}</span>
                  <span className="article-date">{card.date}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="card-footer">
                  <Link to="/actualites" className="card-read-more">
                    Lire
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="card-views">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {card.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
