import { Link } from 'react-router-dom';

export default function Actualites() {
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

  const events = [
    { day: '14', month: 'Mai 2026', title: 'Congrès National de Biologie Médicale — Casablanca', desc: 'Stand GIGALAB Hall B – Démonstrations live Biolis i50, Celltac G et Blue Diver Platinum. Conférences sur le diagnostic de précision.', location: 'Casablanca, Maroc', status: 'upcoming', label: 'À venir', delay: 'delay-1' },
    { day: '3', month: 'Jun 2026', title: 'MEDLAB Africa — Dakar', desc: 'Premier salon panafricain de biologie médicale. GIGALAB présentera sa gamme Manufacturing et ses solutions pour les laboratoires d\'Afrique subsaharienne.', location: 'Dakar, Sénégal', status: 'upcoming', label: 'À venir', delay: 'delay-2' },
    { day: '18', month: 'Sep 2026', title: 'EuroMedLab 2026 — Paris', desc: 'GIGALAB participe pour la première fois au principal congrès européen de médecine de laboratoire, aux côtés des grands acteurs mondiaux du DIV.', location: 'Paris, France', status: 'upcoming', label: 'À venir', delay: 'delay-3' },
    { day: '22', month: 'Fév 2026', title: 'SMBM 2026 — Alger', desc: 'Salon Maghrébin de Biologie Médicale. 300+ participants, 5 partenariats signés. Retour sur notre participation réussite.', location: 'Alger, Algérie', status: 'passed', label: 'Passé', dimmed: true, delay: 'delay-4' },
  ];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero-actualites">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        <div className="hero-inner">
          <div className="breadcrumb fade-up">
            <Link to="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Actualités</span>
          </div>
          <h1 className="fade-up delay-1">
            Nos dernières
            <br />
            <em>actualités</em>
          </h1>
          <p className="hero-sub fade-up delay-2">
            Innovations, certifications, événements et partenariats — restez informé de tout ce
            qui fait avancer GIGALAB.
          </p>
        </div>
      </section>

      {/* ═══════════════════ FILTER BAR ═══════════════════ */}
      <div className="filter-bar">
        <div className="filter-inner">
          <nav className="filter-tabs">
            <div className="filter-tab active">
              Toutes <span className="filter-count">12</span>
            </div>
            <div className="filter-tab">Produits</div>
            <div className="filter-tab">Événements</div>
            <div className="filter-tab">Certifications</div>
            <div className="filter-tab">Innovation</div>
            <div className="filter-tab">Partenariats</div>
          </nav>
          <div className="filter-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Rechercher une actualité…" />
          </div>
        </div>
      </div>

      {/* ═══════════════════ À LA UNE ═══════════════════ */}
      <section style={{ background: 'var(--white)', padding: '72px 40px 40px' }}>
        <div className="container">
          <div className="overline fade-up">À la une</div>
          <h2 className="section-title fade-up delay-1">L'actualité phare</h2>

          <div className="featured-article fade-up delay-2">
            <div className="featured-image">
              <div className="featured-image-bg" />
              <div className="featured-image-grid" />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }}>
                <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6m-6 0-4 3m10-3 4 3M9 14h6" />
                </svg>
              </div>
              <div style={{ position: 'absolute', top: 20, left: 20 }}>
                <span style={{ background: 'var(--red)', color: 'var(--white)', fontSize: 10, fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 50 }}>Exclusif</span>
              </div>
              <div className="featured-badge-img">
                <div className="badge-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="badge-text">Certification ISO 13485</div>
                  <div className="badge-sub">Renouvelée mars 2026</div>
                </div>
              </div>
            </div>
            <div className="featured-content">
              <div className="article-meta">
                <span className="article-cat cat-certification">Certification</span>
                <span className="article-date">15 mars 2026</span>
              </div>
              <h2>
                GIGALAB renouvelle sa certification ISO 13485 pour ses dispositifs médicaux de
                diagnostic
              </h2>
              <p>
                Après un audit rigoureux de trois jours conduit par Bureau Veritas, GIGALAB obtient
                le renouvellement de sa certification ISO 13485:2016, confirmant l'excellence de son
                système de management de la qualité pour la conception, la fabrication et la
                distribution de dispositifs médicaux de diagnostic in vitro.
              </p>
              <div className="article-tags">
                <span className="tag">ISO 13485</span>
                <span className="tag">Qualité</span>
                <span className="tag">Dispositifs médicaux</span>
                <span className="tag">Bureau Veritas</span>
              </div>
              <a href="#" className="btn btn-primary">
                Lire l'article
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DERNIÈRES NEWS ═══════════════════ */}
      <section className="actualites-section">
        <div className="container">
          <div className="news-header">
            <div>
              <div className="overline">Récentes</div>
              <h2 className="section-title">Dernières nouvelles</h2>
            </div>
            <a href="#" className="btn btn-outline-dark">
              Toutes les actualités
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
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
                    <a href="#" className="card-read-more">
                      Lire
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
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

      {/* ═══════════════════ ÉVÉNEMENTS À VENIR ═══════════════════ */}
      <section className="events-section">
        <div className="container">
          <div className="overline fade-up">Agenda</div>
          <h2 className="section-title fade-up delay-1">Événements à venir</h2>
          <p className="section-sub fade-up delay-2" style={{ marginBottom: 40 }}>
            Retrouvez GIGALAB dans les principaux événements du secteur de la biologie médicale en
            Afrique et en Europe.
          </p>

          <div className="events-list">
            {events.map((event) => (
              <div
                className={`event-card fade-up ${event.delay || ''}`}
                key={event.title}
                style={event.dimmed ? { opacity: 0.6 } : undefined}
              >
                <div className="event-date-block" style={event.dimmed ? { background: 'var(--gray-100)' } : undefined}>
                  <div className="event-day" style={event.dimmed ? { color: 'var(--gray-600)' } : undefined}>
                    {event.day}
                  </div>
                  <div className="event-month">{event.month}</div>
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
                <div className="event-meta">
                  <div className="event-location">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {event.location}
                  </div>
                  <span className={`event-badge badge-${event.status}`}>{event.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ NEWSLETTER ═══════════════════ */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <div className="overline">Newsletter</div>
            <h2>
              Restez informé
              <br />
              des avancées GIGALAB
            </h2>
            <p>
              Recevez nos actualités, lancements produits et invitations aux événements
              directement dans votre boîte mail. Désinscription possible à tout moment.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="newsletter-row">
              <input className="nl-input" type="text" placeholder="Prénom" />
              <input className="nl-input" type="text" placeholder="Nom" />
            </div>
            <input className="nl-input" type="email" placeholder="Adresse email professionnelle" />
            <select className="nl-select">
              <option value="" disabled selected>
                Votre spécialité
              </option>
              <option>Biologiste médical</option>
              <option>Médecin</option>
              <option>Responsable de laboratoire</option>
              <option>Distributeur / Revendeur</option>
              <option>Autre</option>
            </select>
            <label className="nl-check">
              <input type="checkbox" />
              J'accepte de recevoir les communications de GIGALAB et confirme avoir lu la politique
              de confidentialité.
            </label>
            <button type="submit" className="btn-nl">
              S'abonner à la newsletter
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
