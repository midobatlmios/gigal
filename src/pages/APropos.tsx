import { Link } from 'react-router-dom';

export default function APropos() {
  return (
    <>
      {/* ═══════════════════ PAGE HERO ═══════════════════ */}
      <section className="page-hero">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        <div className="page-hero-inner">
          <div className="container">
            <div className="breadcrumb fade-up fade-up-1">
              <Link to="/">Accueil</Link>
              <div className="breadcrumb-sep" />
              <span>À propos</span>
            </div>
            <h1 className="page-title fade-up fade-up-1">
              À <em>propos.</em>
            </h1>
            <p className="page-subtitle fade-up fade-up-2">
              Premiers tests antigéniques salivaires{' '}
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>
                made in Africa
              </em>
              . De la R&D à l'industrialisation — GIGALAB maîtrise l'ensemble de la chaîne.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NOTRE HISTOIRE ═══════════════════ */}
      <section className="histoire-section">
        <div className="container">
          <div className="histoire-inner">
            <div className="histoire-content fade-up fade-up-1">
              <div className="overline">Notre histoire</div>
              <h2>
                L'innovation,
                <br />
                fabriquée <em>ici.</em>
              </h2>
              <p>
                Fondée à Casablanca, GIGALAB s'est imposée comme le premier fabricant africain de tests
                diagnostiques rapides — avec une maîtrise complète de la chaîne, de la recherche &
                développement jusqu'à la production industrielle.
              </p>
              <p>
                Premiers tests antigéniques salivaires <em>made in Africa</em>. De la R&D à
                l'industrialisation, GIGALAB maîtrise l'ensemble de la chaîne — et distribue les
                meilleures technologies médicales mondiales.
              </p>
              <Link to="/solutions" className="btn btn-primary">
                Découvrir nos solutions
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="histoire-photo fade-up fade-up-2">
              <div className="histoire-photo-main">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="4" y="16" width="40" height="28" rx="2" />
                  <path d="M16 16V10a8 8 0 0116 0v6" />
                  <circle cx="24" cy="30" r="4" />
                </svg>
                <span>Photo du siège / équipe GIGALAB</span>
              </div>
              <div className="histoire-photo-badge">
                <div className="histoire-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="histoire-badge-num">
                    1<span style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>er</span>
                  </div>
                  <div className="histoire-badge-label">Fabricant africain</div>
                </div>
                <div className="histoire-badge-dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSION + VISION ═══════════════════ */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-card-number">01</div>
              <div className="mv-card-label">Notre mission</div>
              <h3>
                Rendre le diagnostic fiable,
                <br />
                accessible et local.
              </h3>
              <p>
                Rendre le diagnostic fiable, accessible et fabriqué localement — pour les laboratoires,
                hôpitaux et industriels du Maroc et d'Afrique.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-number">02</div>
              <div className="mv-card-label">Notre vision</div>
              <h3>
                Leader africain du
                <br />
                diagnostic biologique.
              </h3>
              <p>
                Devenir le leader africain du diagnostic biologique — en combinant fabrication locale,
                distribution multi-marques et excellence technologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ÉQUIPE DIRIGEANTE ═══════════════════ */}
      <section className="equipe-section">
        <div className="container">
          <div className="section-header">
            <div className="overline">Les personnes derrière la vision</div>
            <h2 className="section-title">Notre équipe dirigeante.</h2>
            <p className="section-sub">
              Une équipe combinant expertise scientifique, vision industrielle et ambition africaine.
            </p>
          </div>
          <div className="team-grid">
            {/* PDG */}
            <div className="team-card">
              <div className="team-photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21a9 9 0 0118 0" />
                </svg>
                <div className="team-photo-label">Photo</div>
                <div className="team-photo-accent" />
              </div>
              <div className="team-info">
                <div className="team-role">Président Directeur Général</div>
                <div className="team-name">M. Karim Zaher</div>
                <p className="team-bio">
                  Fondateur et PDG de GIGALAB, M. Karim Zaher porte la vision d'une industrie du
                  diagnostic biologique entièrement ancrée en Afrique. Sous sa direction, GIGALAB a
                  réalisé une première mondiale en produisant les premiers tests antigéniques salivaires
                  sur le continent africain.
                </p>
                <a href="#" className="team-linkedin">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Directeur Technique */}
            <div className="team-card">
              <div className="team-photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21a9 9 0 0118 0" />
                </svg>
                <div className="team-photo-label">Photo</div>
                <div className="team-photo-accent" />
              </div>
              <div className="team-info">
                <div className="team-role">Directeur Technique</div>
                <div className="team-name">M. Abdelmoutalib Aarab</div>
                <p className="team-bio">
                  Garant de la qualité et de la performance industrielle, M. Aarab transforme la vision
                  GIGALAB en réalité opérationnelle à chaque étape de la production. Il supervise
                  l'ensemble des processus de fabrication, de R&D et de contrôle qualité.
                </p>
                <a href="#" className="team-linkedin">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALEURS ═══════════════════ */}
      <section className="values-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 56 }}>
            <div className="overline" style={{ justifyContent: 'center', color: 'var(--red)' }}>
              Ce qui nous guide
            </div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              Nos valeurs.
            </h2>
          </div>
          <div className="values-grid-page">
            <div className="value-card-page">
              <span className="value-number">01</span>
              <div className="value-name">Innovation</div>
              <p className="value-desc">
                Notre cellule R&D prospecte en continu les nouvelles technologies pour distinguer et
                intégrer les meilleures solutions disponibles.
              </p>
            </div>
            <div className="value-card-page">
              <span className="value-number">02</span>
              <div className="value-name">Excellence</div>
              <p className="value-desc">
                Les règles de l'art du métier sont notre priorité absolue. Nous nous y engageons à chaque
                étape, de la production à la livraison.
              </p>
            </div>
            <div className="value-card-page">
              <span className="value-number">03</span>
              <div className="value-name">Esprit d'équipe</div>
              <p className="value-desc">
                Le succès de GIGALAB repose sur le dévouement et la collaboration de l'ensemble de nos
                équipes. Chaque talent compte.
              </p>
            </div>
            <div className="value-card-page">
              <span className="value-number">04</span>
              <div className="value-name">Intégrité</div>
              <p className="value-desc">
                Nous agissons avec transparence et rigueur envers nos clients, nos partenaires et nos
                équipes. Sans compromis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CERTIFICATIONS ═══════════════════ */}
      <section className="certifs-section">
        <div className="container">
          <div className="certifs-header">
            <div className="overline" style={{ justifyContent: 'center' }}>
              Qualité & Conformité
            </div>
            <h2>Certifié aux normes les plus exigeantes.</h2>
            <p>Chaque produit GIGALAB répond aux standards internationaux de qualité et de sécurité.</p>
          </div>
          <div className="certifs-grid">
            {[
              { name: 'ISO 9001', desc: 'Management de la qualité' },
              { name: 'ISO 13485', desc: 'Dispositifs médicaux' },
              { name: 'CE', desc: 'Conformité aux directives européennes' },
              { name: 'IMANOR', desc: 'Certification nationale marocaine' },
              { name: 'MDS Maroc', desc: 'Homologation Ministère de la Santé' },
            ].map((cert) => (
              <div className="certif-card" key={cert.name}>
                <div className="certif-logo-placeholder">LOGO</div>
                <div className="certif-card-name">{cert.name}</div>
                <div className="certif-card-desc">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="cta-section-page">
        <div className="container cta-inner-page">
          <div className="cta-text-block">
            <span className="cta-overline">Travaillons ensemble</span>
            <h2 className="cta-title">Un projet ? Un besoin ?</h2>
            <p className="cta-sub">Notre équipe commerciale et technique est disponible pour vous accompagner.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-cta-white">
              Nous contacter
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </Link>
            <Link to="/ressources" className="btn-cta-outline">
              Télécharger notre catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
