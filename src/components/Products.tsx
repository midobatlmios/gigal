export default function Products() {
  const products = [
    {
      name: 'Maglumi X3',
      type: 'Immunoanalyse CLIA',
      desc: "La simplicité d'utilisation sans compromis d'espace. Idéal pour les laboratoires à faible volume.",
      specs: ['CLIA', 'Compact', 'Faible volume'],
    },
    {
      name: 'Maglumi X6',
      type: 'Immunoanalyse CLIA',
      desc: 'Solution CLIA flexible pour les laboratoires à volume moyen et élevé.',
      specs: ['CLIA', 'Volume moyen/élevé', 'Flexible'],
    },
    {
      name: 'Maglumi X8',
      type: 'Immunoanalyse CLIA',
      desc: "Système d'immunoessai par chimiluminescence entièrement automatique. Large menu de 256 tests.",
      specs: ['CLIA', '256 tests', 'Fully auto'],
    },
    {
      name: 'Biolumi CX8',
      type: 'Biochimie + Immunologie',
      desc: 'Système intégré combinant Biossays C8 et Maglumi X8 — tests biochimiques et immunologiques simultanés.',
      specs: ['Biochimie', 'Immunologie', 'Intégré'],
    },
  ];

  return (
    <section className="products-section">
      <div className="container">
        <div className="products-header">
          <div>
            <div className="overline">Distribution exclusive</div>
            <h2 className="section-title">Nos équipements phares.</h2>
          </div>
          <div className="brand-badge">
            <span className="brand-badge-dot" />
            Distributeur exclusif Snibe Diagnostic
          </div>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-img">
                <div className="product-img-ph">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="6" y="14" width="36" height="26" rx="3" />
                    <path d="M16 14V10a2 2 0 012-2h12a2 2 0 012 2v4" />
                    <circle cx="24" cy="27" r="5" />
                    <path d="M14 40v2M34 40v2" />
                  </svg>
                  <span>Photo produit</span>
                </div>
                <span className="product-brand-tag">Snibe</span>
              </div>
              <div className="product-body">
                <div className="product-type">{product.type}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-desc">{product.desc}</div>
                <div className="product-specs">
                  {product.specs.map((spec) => (
                    <span className="product-spec" key={spec}>{spec}</span>
                  ))}
                </div>
                <a href="#" className="product-link">Fiche technique →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
