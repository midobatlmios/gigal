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

export default function GammeManufacturing() {
  return (
    <section className="gamme-section fade-in-section">
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
  );
}
