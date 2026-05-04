import { Link } from 'react-router-dom';

export default function Solutions() {
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
              <span>Solutions</span>
            </div>
            <h1 className="page-title fade-up fade-up-1">
              Nos <em>Solutions.</em>
            </h1>
            <p className="page-subtitle fade-up fade-up-2">
              Des équipements distribués. Des tests fabriqués. Un seul partenaire.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TABS NAVIGATION ═══════════════════ */}
      <div className="section-tabs">
        <div className="container">
          <a href="#equipements" className="tab-link active">Équipements</a>
          <a href="#tests-rapides" className="tab-link">Tests Rapides GLD</a>
          <a href="#milieux" className="tab-link">Milieux de Culture</a>
        </div>
      </div>

      {/* ═══════════════════ ÉQUIPEMENTS ═══════════════════ */}
      <section className="equipements-section" id="equipements">
        <div className="container">
          <div className="section-header">
            <div className="overline">Assemblés & distribués</div>
            <h2 className="section-title">
              Équipements de
              <br />
              biologie <em>médicale.</em>
            </h2>
            <p className="section-sub">
              De la conception locale à la distribution multi-marques — les meilleures technologies
              médicales mondiales, livrées et soutenues par nos équipes.
            </p>
          </div>

          {/* Microscopes Giga-Infinity */}
          <div className="micro-card">
            <div className="micro-photo">
              <svg width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <circle cx="20" cy="22" r="10" />
                <path d="M28 28l10 10" />
                <path d="M20 8v4M20 30v4M8 22h4M28 22h4" />
                <circle cx="20" cy="22" r="4" />
              </svg>
              <div className="micro-photo-label">Photo produit</div>
              <div className="micro-badge">Assemblé par GIGALAB</div>
            </div>
            <div className="micro-info">
              <div className="overline">Conception locale</div>
              <h3>
                Microscopes
                <br />
                Giga-Infinity
              </h3>
              <p>
                Conçus et assemblés au Maroc par les équipes GIGALAB. Optique plan corrigée à
                l'infini, objectifs multi-grossissements, conception ergonomique — idéal pour les
                analyses scientifiques exigeantes.
              </p>
              <div className="micro-specs">
                <div className="micro-spec">
                  <div className="micro-spec-dot" />
                  Optique plan corrigée à l'infini
                </div>
                <div className="micro-spec">
                  <div className="micro-spec-dot" />
                  Objectifs 4x · 10x · 40x · 100x
                </div>
                <div className="micro-spec">
                  <div className="micro-spec-dot" />
                  Conception ergonomique
                </div>
                <div className="micro-spec">
                  <div className="micro-spec-dot" />
                  Idéal analyses scientifiques exigeantes
                </div>
              </div>
              <a href="#" className="btn btn-primary">
                Fiche technique
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Analyseurs distribués */}
          <div style={{ marginTop: 56 }}>
            <div className="analyseurs-title">Automates & analyseurs — Distribution multi-marques</div>
            <div className="analyseurs-grid">
              {[
                {
                  name: 'Maglumi X8',
                  desc: "Automate de chimiluminescence haute performance pour l'immunoanalyse — Snibe Diagnostic",
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                },
                {
                  name: 'Automates biochimie',
                  desc: 'Analyseurs de biochimie de dernière génération pour les laboratoires hospitaliers et privés',
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0M9 3a3 3 0 000 6h6a3 3 0 000-6" />
                    </svg>
                  ),
                },
                {
                  name: 'Automates hématologie',
                  desc: 'Numération formule sanguine complète — automates rapides et précis pour les bilans biologiques',
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  ),
                },
                {
                  name: 'Automates immunologie',
                  desc: 'Marqueurs tumoraux, hormones, maladies infectieuses — analyse immunologique de précision',
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  name: 'Auto-immunité',
                  desc: 'Diagnostic des maladies auto-immunes — systèmes d\'analyse spécialisés haute sensibilité',
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v16H4zM9 9h6M9 12h6M9 15h4" />
                    </svg>
                  ),
                },
                {
                  name: 'Réactifs & consommables',
                  desc: 'Approvisionnement régulier en réactifs certifiés et consommables de laboratoire de qualité',
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3h18M3 9h18M3 15h18M3 21h18" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div className="analyseur-card" key={item.name}>
                  <div className="analyseur-icon">{item.svg}</div>
                  <div className="analyseur-name">{item.name}</div>
                  <div className="analyseur-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTS RAPIDES GLD ═══════════════════ */}
      <section className="tests-section" id="tests-rapides">
        <div className="tests-glow" />
        <div className="container">
          <div className="tests-inner">
            <div className="tests-content">
              <div className="overline">Gamme GLD</div>
              <h2>
                Tests rapides
                <br />
                fabriqués au Maroc.
              </h2>
              <p>
                GIGALAB est la première entreprise africaine à produire des tests antigéniques
                salivaires. Notre gamme GLD couvre les principaux enjeux de santé publique — conçus
                ici, livrés pour l'Afrique.
              </p>
              <div className="tests-origin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
                Conçus, développés et fabriqués au Maroc — pour l'Afrique
              </div>
            </div>

            <div className="tests-table-wrap">
              <table className="tests-table">
                <thead>
                  <tr>
                    <th>Test</th>
                    <th>Spécification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'COVID-19 Ag', badge: 'Salivaire', spec: 'Résultat en 10 minutes' },
                    { name: 'HIV 1+2', spec: 'Dépistage rapide' },
                    { name: 'Hépatite B (HBsAg)', spec: 'Détection antigène de surface' },
                    { name: 'Hépatite C (HCV)', spec: 'Sérologie rapide' },
                    { name: 'Malaria Pf/Pan', spec: 'Diagnostic différentiel' },
                    { name: 'Syphilis', spec: 'Dépistage rapide' },
                    { name: 'Monkeypox', spec: 'Test antigénique' },
                    { name: 'HCG (grossesse)', spec: 'Détection bêta-HCG' },
                  ].map((test) => (
                    <tr key={test.name}>
                      <td>
                        {test.name}
                        {test.badge && <span className="test-badge">{test.badge}</span>}
                      </td>
                      <td>{test.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 28 }}>
                <a href="#" className="btn btn-outline-white">
                  Télécharger le catalogue GLD
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
                    <path d="M7 1v8M3 6l4 4 4-4M1 12h12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MILIEUX DE CULTURE ═══════════════════ */}
      <section className="milieux-section" id="milieux">
        <div className="container">
          <div className="milieux-inner">
            <div className="milieux-content">
              <div className="overline">Microbiologie de précision</div>
              <h2>
                Milieux de culture
                <br />
                prêts à l'emploi.
              </h2>
              <p>
                Notre gamme de milieux de culture est conçue pour trois domaines d'application
                critiques — du diagnostic médical au contrôle industriel.
              </p>
              <div className="milieux-domains">
                <div className="milieux-domain">
                  <div className="milieux-domain-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <div className="milieux-domain-name">Diagnostic microbiologique médical</div>
                    <div className="milieux-domain-desc">Laboratoires d'analyses et hôpitaux</div>
                  </div>
                </div>
                <div className="milieux-domain">
                  <div className="milieux-domain-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0M12 12v5M10 14l2 2 2-2" />
                    </svg>
                  </div>
                  <div>
                    <div className="milieux-domain-name">Contrôle microbiologique pharmaceutique</div>
                    <div className="milieux-domain-desc">Industries pharmaceutiques</div>
                  </div>
                </div>
                <div className="milieux-domain">
                  <div className="milieux-domain-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10" />
                    </svg>
                  </div>
                  <div>
                    <div className="milieux-domain-name">Contrôle microbiologique agroalimentaire</div>
                    <div className="milieux-domain-desc">Industries agroalimentaires</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="milieux-refs-wrap">
              <div className="milieux-refs-title">Références disponibles</div>
              <div className="milieux-refs-grid">
                {['Urichrome', 'Candida Chrome', 'Salmonella Chrome', 'Columbia Sang', 'Chocolat Multivita', 'Sabouraud'].map(
                  (ref) => (
                    <div className="milieux-ref" key={ref}>
                      <div className="milieux-ref-dot" />
                      {ref}
                    </div>
                  )
                )}
              </div>
              <div className="milieux-more">
                + formulations chromogènes, sélectives et enrichies sur demande
              </div>
              <div style={{ marginTop: 32 }}>
                <div className="milieux-tagline">
                  Derrière chaque diagnostic précis, il y a un milieu de culture fiable.
                </div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary">
                  Demander une documentation
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M1 7h12M7 1l6 6-6 6" />
                  </svg>
                </a>
                <a href="#" className="btn btn-outline-dark">
                  Contacter l'équipe commerciale
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="cta-section-page">
        <div className="container cta-inner-page">
          <div>
            <span className="cta-overline">Travaillons ensemble</span>
            <h2 className="cta-title">Un projet ? Un besoin ?</h2>
            <p className="cta-sub">Notre équipe commerciale et technique est disponible pour vous accompagner.</p>
          </div>
          <div className="cta-actions">
            <a href="#" className="btn-cta-white">
              Nous contacter
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </a>
            <a href="#" className="btn-cta-outline">
              Télécharger notre catalogue
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
