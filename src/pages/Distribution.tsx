import { Link } from 'react-router-dom';

export default function Distribution() {
  const biochimie = [
    {
      name: 'Biolis 30i',
      desc: 'Analyseur de biochimie compact avec module ISE intégré, cuvette autolavable et plateau réfrigéré pour une performance optimale.',
      specs: ['450 tests/h', 'ISE inclus', 'Plateau réfrigéré'],
    },
    {
      name: 'Biolis i24 Premium',
      desc: 'Analyseur performant avec 39 paramètres en ligne simultanés et connexion bidirectionnelle LIS pour une intégration laboratoire complète.',
      specs: ['400 tests/h', '39 paramètres', 'Connexion LIS'],
    },
    {
      name: 'Biolis i50 Superior',
      desc: 'Analyseur haut débit avec dosage HbA1c sans prétraitement et écran tactile intuitif. La référence pour les grands laboratoires hospitaliers.',
      specs: ['480 tests/h', 'HbA1c direct', 'Écran tactile'],
    },
  ];

  const hematologie = [
    { name: 'Celltac G', desc: 'Analyseur haut débit — laser scatter et cytométrie en flux pour une précision maximale.', specs: ['90 éch/h', 'Laser scatter', 'Cytométrie'] },
    { name: 'Celltac F', desc: 'NFS 5 parties complète avec faible consommation de réactifs — idéal pour les laboratoires privés.', specs: ['22 paramètres', 'WBC 5-part'] },
    { name: 'Celltac Es', desc: 'Sans passeur de tubes — mesure de micro-échantillons, parfait pour la pédiatrie et les urgences.', specs: ['23 paramètres', 'Micro-éch.'] },
    { name: 'Celltac α', desc: 'Analyseur compact 3 parties avec écran tactile intuitif — la solution économique et fiable.', specs: ['19 paramètres', 'WBC 3-part', 'Tactile'] },
  ];

  const immunoanalyse = [
    { name: 'Maglumi X8', desc: 'Automate de chimiluminescence haute performance — immunologie, hormones, marqueurs tumoraux.', specs: ['CLIA', 'Haute perf.', 'Snibe'] },
    { name: 'IDS-ISYS', desc: 'Système chimiluminescence spécialisé hormonologie et auto-immunité — 120 tests/heure en continu.', specs: ['120 tests/h', 'Hormonologie', 'Auto-immunité'] },
    { name: 'Blue Diver', desc: 'Automate immunodots sans fluides — traite 24 tests simultanément en 60 minutes, auto-immunité.', specs: ['24 tests/run', '60 min', 'Sans fluides'] },
    { name: 'Alfa Reader', desc: 'Lecteur allergie flux latéral portable — résultats en 20 minutes, compatible lecture mobile.', specs: ['Allergie', '20 min', 'Mobile'] },
    { name: 'CalproSmart', desc: 'Autotest calprotectine fécale pour le diagnostic et suivi des MICI — résultats en 18 minutes.', specs: ['MICI', '18 min', 'Calprotectine'] },
    { name: 'Biolumi CX8', desc: 'Système intégré combinant biochimie et immunologie — Biossays C8 + Maglumi X8 en une seule plateforme.', specs: ['Biochimie', 'Immunologie', 'Snibe'] },
  ];

  const coagulation = [
    { name: 'Coag 2D', desc: 'Analyseur de coagulation 2 canaux optiques — tests de dépistage (TP, TCA, fibrinogène) et D-dimère pour les urgences et les bilans préopératoires.', specs: ['2 canaux optiques', 'D-dimère', 'Dépistage'] },
    { name: 'Coag 4D', desc: 'Analyseur avancé 4 canaux — compatible méthodes chromogènes, turbidimétriques et optiques pour une couverture hémostase complète.', specs: ['4 canaux', 'Chromogène', 'Turbidimétrique'] },
  ];

  const autres = [
    { name: "LED'S GO & HELPS+", desc: 'Systèmes d\'éclairage et d\'aide à la prise en charge — solutions d\'éclairage médical spécialisées pour les environnements de laboratoire.' },
    { name: 'HELMED', desc: 'Équipement médical général pour les environnements hospitaliers et cliniques — fiabilité et conformité aux normes médicales.' },
    { name: 'HELIOS & Roller 20PN', desc: 'Système laboratoire HELIOS et agitateur Roller 20PN — équipements auxiliaires pour les processus pré-analytiques en laboratoire.' },
  ];

  const brands = [
    { name: 'Nihon Kohden', specialty: 'Hématologie — Gamme Celltac' },
    { name: 'Snibe Diagnostic', specialty: 'Immunoanalyse — Maglumi / Biolumi' },
    { name: 'Orion Diagnostica', specialty: 'Réactifs & tests de spécialité' },
    { name: 'AESKU', specialty: 'Auto-immunité & Blue Diver' },
  ];

  const supportItems = [
    { name: 'Installation & mise en service', desc: 'Nos techniciens se déplacent pour installer et qualifier chaque équipement sur site' },
    { name: 'Formation des utilisateurs', desc: 'Formation complète sur site pour les opérateurs — protocoles, maintenance de routine et bonnes pratiques' },
    { name: 'Support technique de proximité', desc: 'Hotline dédiée + interventions terrain rapides — un interlocuteur unique pour chaque client' },
    { name: 'Maintenance préventive & corrective', desc: 'Contrats de maintenance adaptés pour garantir la disponibilité maximale des équipements' },
    { name: 'Approvisionnement régulier', desc: 'Stock réactifs et consommables maintenu — livraisons programmées pour éviter toute rupture' },
  ];

  const reseau = [
    { country: 'Maroc', desc: 'Couverture nationale — équipes terrain dans les principales villes. Hôpitaux, cliniques et laboratoires privés.', status: 'active', label: 'Actif' },
    { country: 'Afrique', desc: 'Expansion active via notre Direction Commerciale Export — marchés africains en développement prioritaire.', status: 'growing', label: 'En croissance' },
  ];

  const productIcon = (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <rect x="6" y="10" width="36" height="28" rx="3" />
      <path d="M14 38v4M34 38v4M6 24h36" />
      <circle cx="24" cy="24" r="6" />
    </svg>
  );

  const renderProductCard = (product: any, idx: number, withSpecs = true, smallPhoto = false) => (
    <div className="dist-product-card" key={idx}>
      <div className="dist-product-photo" style={smallPhoto ? { height: 100 } : undefined}>
        {productIcon}
        <div className="dist-product-photo-label">Photo produit</div>
        {product.brand && <span className="product-brand-badge">{product.brand}</span>}
      </div>
      <div className="dist-product-body">
        <div className="dist-product-name">{product.name}</div>
        <div className="dist-product-desc">{product.desc}</div>
        {withSpecs && product.specs && (
          <div className="dist-product-specs">
            {product.specs.map((s: string) => (
              <span className="spec-tag" key={s}>{s}</span>
            ))}
          </div>
        )}
        <a href="#" className="dist-product-link">Fiche technique →</a>
      </div>
    </div>
  );

  return (
    <>
      {/* ═══════════════════ PAGE HERO ═══════════════════ */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-glow" />
        <div className="page-hero-inner">
          <div className="container">
            <div className="breadcrumb fade-up fade-up-1">
              <Link to="/">Accueil</Link>
              <div className="breadcrumb-sep" />
              <span>Distribution</span>
            </div>
            <h1 className="page-title fade-up fade-up-2">
              <em>Distribution.</em>
            </h1>
            <p className="page-subtitle fade-up fade-up-3">
              Les meilleures technologies médicales mondiales. Livrées, installées, soutenues par nos
              équipes.
            </p>
            <div className="hero-brands-row fade-up fade-up-3">
              <span className="hero-brand-label">Marques</span>
              <span className="hero-brand-pill">Nihon Kohden</span>
              <span className="hero-brand-pill">Snibe Diagnostic</span>
              <span className="hero-brand-pill">Orion Diagnostica</span>
              <span className="hero-brand-pill">AESKU</span>
              <span className="hero-brand-pill">+ partenaires</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TABS ═══════════════════ */}
      <div className="section-tabs">
        <div className="container">
          <a href="#biochimie" className="tab-link active">Biochimie</a>
          <a href="#hematologie" className="tab-link">Hématologie</a>
          <a href="#immunoanalyse" className="tab-link">Immunoanalyse</a>
          <a href="#coagulation" className="tab-link">Coagulation</a>
          <a href="#autres" className="tab-link">Autres</a>
        </div>
      </div>

      {/* ═══════════════════ CATALOGUE ═══════════════════ */}
      <section className="catalogue-section">
        <div className="container">
          {/* ── BIOCHIMIE ── */}
          <div className="cat-block" id="biochimie">
            <div className="cat-header">
              <div className="cat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v7.31M14 9.3V2M4.22 10.81A10 10 0 0012 21a10 10 0 007.78-10.19M10 2h4" />
                </svg>
              </div>
              <div>
                <div className="cat-title">Analyseurs de Biochimie</div>
              </div>
              <div className="cat-brand-tag">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Gamme Biolis
              </div>
            </div>
            <div className="dist-products-grid">
              {biochimie.map((p, i) => renderProductCard({ ...p, brand: 'Biolis' }, i))}
            </div>
          </div>

          {/* ── HÉMATOLOGIE ── */}
          <div className="cat-block" id="hematologie">
            <div className="cat-header">
              <div className="cat-icon" style={{ background: '#1a3a5c' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <div className="cat-title">Hématologie</div>
              </div>
              <div className="cat-brand-tag">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Celltac — Nihon Kohden
              </div>
            </div>
            <div className="dist-products-grid col-4">
              {hematologie.map((p, i) => renderProductCard({ ...p, brand: 'Nihon Kohden' }, i))}
            </div>
          </div>

          {/* ── IMMUNOANALYSE ── */}
          <div className="cat-block" id="immunoanalyse">
            <div className="cat-header">
              <div className="cat-icon" style={{ background: '#2d1a3a' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="cat-title">Immunoanalyse & Tests Rapides</div>
              </div>
              <div className="cat-brand-tag">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Multi-marques
              </div>
            </div>
            <div className="dist-products-grid col-4">
              {immunoanalyse.map((p, i) => renderProductCard(p, i))}
            </div>
          </div>

          {/* ── COAGULATION ── */}
          <div className="cat-block" id="coagulation">
            <div className="cat-header">
              <div className="cat-icon" style={{ background: '#1a3a2a' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <div className="cat-title">Coagulation</div>
              </div>
              <div className="cat-brand-tag">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Gamme Coag
              </div>
            </div>
            <div className="dist-products-grid col-2">
              {coagulation.map((p, i) => renderProductCard(p, i))}
            </div>
          </div>

          {/* ── AUTRES PRODUITS ── */}
          <div className="cat-block" id="autres">
            <div className="cat-header">
              <div className="cat-icon" style={{ background: '#2d2d1a' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </div>
              <div>
                <div className="cat-title">Équipements & Accessoires</div>
              </div>
            </div>
            <div className="dist-products-grid">
              {autres.map((p, i) => renderProductCard(p, i, false, true))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NOS MARQUES ═══════════════════ */}
      <section className="brands-section">
        <div className="container">
          <div className="section-header centered" style={{ marginBottom: 48 }}>
            <div className="overline">Nos partenaires</div>
            <h2 className="section-title">
              Les marques que
              <br />
              nous <em>représentons.</em>
            </h2>
          </div>
          <div className="brands-grid">
            {brands.map((b) => (
              <div className="brand-card" key={b.name}>
                <div className="brand-logo-ph">LOGO</div>
                <div className="brand-name">{b.name}</div>
                <div className="brand-specialty">{b.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SUPPORT & RÉSEAU ═══════════════════ */}
      <section className="support-section">
        <div className="container">
          <div className="support-inner">
            <div className="support-content">
              <div className="overline">Plus qu'une livraison</div>
              <h2>
                Notre engagement
                <br />
                de <em>proximité.</em>
              </h2>
              <p>
                La distribution ne s'arrête pas à la livraison. GIGALAB accompagne ses partenaires à
                chaque étape — de l'installation à la maintenance — avec des équipes terrain dédiées.
              </p>
              <div className="support-items">
                {supportItems.map((item) => (
                  <div className="support-item" key={item.name}>
                    <div className="support-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div className="support-item-name">{item.name}</div>
                      <div className="support-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reseau-wrap">
              <div className="reseau-title">Notre réseau</div>
              <div className="reseau-cards">
                {reseau.map((r) => (
                  <div className="reseau-card" key={r.country}>
                    <div className="reseau-card-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                      </svg>
                    </div>
                    <div>
                      <div className="reseau-card-country">{r.country}</div>
                      <div className="reseau-card-desc">{r.desc}</div>
                    </div>
                    <div className={`reseau-card-status status-${r.status}`}>
                      <div className="status-dot" />
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary">
                  Devenir partenaire
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M1 7h12M7 1l6 6-6 6" />
                  </svg>
                </a>
                <a href="#" className="btn btn-outline-dark">
                  Télécharger notre catalogue
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
