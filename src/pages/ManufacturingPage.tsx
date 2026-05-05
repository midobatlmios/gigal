import { Link } from 'react-router-dom';

export default function ManufacturingPage() {
  const productionItems = [
    {
      name: 'Microscopes Giga-Infinity',
      desc: 'Assemblés au Maroc — optique plan corrigée à l\'infini, objectifs multi-grossissements',
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      name: 'Tests antigéniques rapides',
      desc: 'Format cassette — dont les premiers tests salivaires made in Africa',
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0" />
          <path d="M12 12v4M10 14l2 2 2-2" />
        </svg>
      ),
    },
    {
      name: 'Tests sérologiques rapides',
      desc: 'HIV, hépatites, syphilis, malaria, monkeypox — gamme GLD complète',
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31M14 9.3V2M4.22 10.81A10 10 0 0012 21a10 10 0 007.78-10.19M10 2h4" />
        </svg>
      ),
    },
    {
      name: 'Milieux de culture',
      desc: 'Chromogènes, sélectifs et enrichis — pour le médical, le pharmaceutique et l\'agroalimentaire',
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      name: 'Réactifs de laboratoire',
      desc: 'Formulations certifiées pour les laboratoires d\'analyses médicales',
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      num: '01',
      name: 'Contrôle des matières premières',
      desc: 'Vérification et qualification de chaque intrant avant entrée en production',
    },
    {
      num: '02',
      name: 'Contrôle en cours de fabrication',
      desc: 'Surveillance en temps réel des paramètres critiques tout au long du processus',
    },
    {
      num: '03',
      name: 'Contrôle du produit fini',
      desc: 'Tests de performance, stabilité et conformité sur chaque lot produit',
    },
    {
      num: '04',
      name: 'Libération par le responsable qualité',
      desc: 'Validation finale et autorisation de mise sur le marché par le QA Manager',
    },
  ];

  const qualiteCertifs = [
    { name: 'ISO 9001', desc: 'Management de la qualité' },
    { name: 'ISO 13485', desc: 'Dispositifs médicaux' },
    { name: 'CE', desc: 'Directives européennes' },
    { name: 'IMANOR', desc: 'Certification marocaine' },
    { name: 'MDS Maroc', desc: 'Homologation Ministère de la Santé marocain', span: true },
  ];

  const testsGLD = [
    { name: 'COVID-19 Ag (salivaire)', spec: '10 min' },
    { name: 'HIV 1+2', spec: 'Rapide' },
    { name: 'Hépatite B (HBsAg)', spec: 'Ag surface' },
    { name: 'Hépatite C (HCV)', spec: 'Sérologie' },
    { name: 'Malaria Pf/Pan', spec: 'Différentiel' },
    { name: 'Syphilis', spec: 'Rapide' },
    { name: 'Monkeypox', spec: 'Antigénique' },
    { name: 'HCG (grossesse)', spec: 'Bêta-HCG' },
  ];

  const milieux = [
    { name: 'Urichrome', spec: 'Chromogène' },
    { name: 'Candida Chrome', spec: 'Sélectif' },
    { name: 'Salmonella Chrome', spec: 'Sélectif' },
    { name: 'Columbia Sang', spec: 'Enrichi' },
    { name: 'Chocolat Multivita', spec: 'Enrichi' },
    { name: 'Sabouraud', spec: 'Mycologie' },
  ];

  return (
    <>
      {/* ═══════════════════ PAGE HERO ═══════════════════ */}
      <section className="page-hero-full">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        <div className="page-hero-photo">
          <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <rect x="4" y="24" width="40" height="20" rx="2" />
            <path d="M4 24l6-10h28l6 24" />
            <path d="M12 44V30h8v14M28 44V30h8v14" />
            <path d="M4 24h40" />
            <circle cx="16" cy="20" r="2" />
            <circle cx="24" cy="20" r="2" />
            <circle cx="32" cy="20" r="2" />
          </svg>
          <span>Photo de l'unité de production GIGALAB</span>
        </div>
        <div className="page-hero-overlay" />

        <div className="page-hero-inner-full">
          <div className="container">
            <div className="breadcrumb fade-up fade-up-1">
              <Link to="/">Accueil</Link>
              <div className="breadcrumb-sep" />
              <span>Manufacturing</span>
            </div>
            <h1 className="page-title fade-up fade-up-2">
              Fabriqué au Maroc.
              <br />
              <em>Pour l'Afrique.</em>
            </h1>
            <p className="page-subtitle fade-up fade-up-3">
              De la R&D à la production industrielle. Tests rapides, milieux de culture, équipements —
              conçus ici, livrés partout en Afrique.
            </p>
            <div className="hero-certif-row fade-up fade-up-4">
              <span className="hero-certif-label">Certifié</span>
              <span className="certif-pill">ISO 9001</span>
              <span className="certif-pill">ISO 13485</span>
              <span className="certif-pill">CE</span>
              <span className="certif-pill">IMANOR</span>
              <span className="certif-pill">MDS Maroc</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BAND ═══════════════════ */}
      <div className="stats-band">
        <div className="container" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '100%' }}>
          <div className="stats-band-grid">
            <div className="stat-band-item">
              <div className="stat-band-number">
                1<sup style={{ fontSize: '1.2rem', verticalAlign: 'super' }}>ère</sup>
              </div>
              <div className="stat-band-label">Entreprise africaine<br />en tests salivaires</div>
            </div>
            <div className="stat-band-item">
              <div className="stat-band-number">+20</div>
              <div className="stat-band-label">Références<br />de tests rapides GLD</div>
            </div>
            <div className="stat-band-item">
              <div className="stat-band-number">5</div>
              <div className="stat-band-label">Certifications<br />internationales</div>
            </div>
            <div className="stat-band-item">
              <div className="stat-band-number">100%</div>
              <div className="stat-band-label">Contrôle qualité<br />à chaque étape</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ CAPACITÉ DE PRODUCTION ═══════════════════ */}
      <section className="capacite-section">
        <div className="container">
          <div className="capacite-inner">
            <div className="capacite-content">
              <div className="overline">Unité industrielle</div>
              <h2>
                Notre capacité
                <br />
                de <em>production.</em>
              </h2>
              <p>
                Notre unité industrielle est équipée pour concevoir, assembler et produire à grande
                échelle des équipements et dispositifs médicaux répondant aux normes internationales
                les plus exigeantes.
              </p>
              <div className="production-list">
                {productionItems.map((item) => (
                  <div className="production-item" key={item.name}>
                    <div className="production-item-icon">{item.svg}</div>
                    <div>
                      <div className="production-item-name">{item.name}</div>
                      <div className="production-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="capacite-photos">
              <div className="photo-main">
                <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3}>
                  <rect x="4" y="20" width="40" height="24" rx="2" />
                  <path d="M4 20l8-14h24l8 14" />
                  <path d="M14 44V28h8v16M26 44V28h8v16" />
                </svg>
                <span>Vue de l'unité de production</span>
              </div>
              <div className="photo-row">
                <div className="photo-small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0" />
                  </svg>
                  <span>Ligne de production</span>
                </div>
                <div className="photo-small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83" />
                  </svg>
                  <span>Contrôle qualité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ QUALITÉ & CONFORMITÉ ═══════════════════ */}
      <section className="qualite-section">
        <div className="qualite-glow" />
        <div className="container">
          <div className="qualite-inner">
            <div className="qualite-content">
              <div className="overline">Rigueur à chaque étape</div>
              <h2>
                Qualité &
                <br />
                Conformité.
              </h2>
              <p>
                Chaque produit fabriqué par GIGALAB Manufacturing est soumis à un contrôle qualité
                rigoureux à chaque étape du processus — de la matière première au lot libéré.
              </p>
              <div className="process-steps">
                {processSteps.map((step) => (
                  <div className="process-step" key={step.num}>
                    <div className="process-step-num">{step.num}</div>
                    <div>
                      <div className="process-step-name">{step.name}</div>
                      <div className="process-step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="qualite-certifs">
              <div className="qualite-certif-title">Certifications & accréditations</div>
              <div className="qualite-certifs-grid">
                {qualiteCertifs.map((cert) => (
                  <div
                    className="qualite-certif-card"
                    key={cert.name}
                    style={cert.span ? { gridColumn: 'span 2' } : undefined}
                  >
                    <div className="qualite-certif-logo">LOGO</div>
                    <div className="qualite-certif-name">{cert.name}</div>
                    <div className="qualite-certif-desc">{cert.desc}</div>
                  </div>
                ))}
              </div>
              <Link to="/apropos" className="btn btn-primary">
                Voir nos certifications
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ GAMME MANUFACTURING ═══════════════════ */}
      <section className="gamme-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="overline" style={{ justifyContent: 'center' }}>Fabriqué par GIGALAB</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--black)' }}>
              Notre gamme
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--red)' }}>Manufacturing.</em>
            </h2>
          </div>
          <div className="gamme-inner">
            {/* Tests Rapides GLD */}
            <div className="gamme-block">
              <div className="gamme-block-header">
                <div className="gamme-block-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a3 3 0 006 0" />
                    <path d="M12 12v4M10 14l2 2 2-2" />
                  </svg>
                </div>
                <div>
                  <div className="gamme-block-title">Tests Rapides GLD</div>
                  <div className="gamme-block-subtitle">Diagnostics · Format cassette</div>
                </div>
              </div>
              <div className="gamme-block-body">
                {testsGLD.map((t) => (
                  <div className="gamme-item" key={t.name}>
                    <div className="gamme-item-dot" />
                    {t.name}
                    <span className="gamme-item-spec">{t.spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milieux de Culture */}
            <div className="gamme-block">
              <div className="gamme-block-header">
                <div className="gamme-block-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
                  </svg>
                </div>
                <div>
                  <div className="gamme-block-title">Milieux de Culture</div>
                  <div className="gamme-block-subtitle">Microbiologie · Prêts à l'emploi</div>
                </div>
              </div>
              <div className="gamme-block-body">
                {milieux.map((m) => (
                  <div className="gamme-item" key={m.name}>
                    <div className="gamme-item-dot" />
                    {m.name}
                    <span className="gamme-item-spec">{m.spec}</span>
                  </div>
                ))}
                <div className="gamme-item" style={{ color: 'var(--gray-400)', fontStyle: 'italic', fontSize: 12 }}>
                  <div className="gamme-item-dot" style={{ background: 'var(--gray-400)' }} />
                  + formulations sur demande
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VISION PDG ═══════════════════ */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-inner">
            <div className="vision-photo">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M3 21a9 9 0 0118 0" />
              </svg>
              <span>Photo M. Karim Zaher</span>
              <div className="vision-photo-name">
                <div className="vision-photo-name-text">M. Karim Zaher</div>
                <div className="vision-photo-name-role">Président Directeur Général, GIGALAB</div>
              </div>
            </div>
            <div className="vision-quote-wrap">
              <div className="overline">Vision industrielle</div>
              <span className="vision-quote-mark">&ldquo;</span>
              <p className="vision-quote-text">
                Nous avons fait le choix de l'innovation et de la souveraineté. Notre objectif est
                clair : apporter au Maroc et au continent des solutions de diagnostic fiables,
                accessibles et fabriquées chez nous. Ensemble, nous construisons la souveraineté
                sanitaire.
              </p>
              <div className="vision-quote-author">
                <div className="vision-quote-author-line" />
                <div>
                  <div className="vision-quote-author-name">M. Karim Zaher</div>
                  <div className="vision-quote-author-role">PDG de GIGALAB Diagnostic</div>
                </div>
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
