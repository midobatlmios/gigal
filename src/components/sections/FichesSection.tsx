interface Fiche {
  name: string;
  brand: string;
  bg: string;
  specs: string[];
  delay: string;
  icon: React.ReactNode;
}

interface Props {
  fiches: Fiche[];
}

export default function FichesSection({ fiches }: Props) {
  if (fiches.length === 0) return null;

  return (
    <section className="fiches-section fade-in-section">
      <div className="container">
        <div className="sec-header">
          <div>
            <div className="overline">Téléchargements</div>
            <h2 className="section-title">Fiches techniques produits</h2>
          </div>
        </div>
        <div className="fiches-grid">
          {fiches.map((f) => (
            <div className={`fiche-card fade-up ${f.delay}`} key={f.name}>
              <div className="fiche-header">
                <div className="fiche-thumb" style={{ background: f.bg }}>{f.icon}</div>
                <div>
                  <div className="fiche-name">{f.name}</div>
                  <div className="fiche-brand">{f.brand}</div>
                </div>
              </div>
              <div className="fiche-body">
                <div className="fiche-specs">
                  {f.specs.map((s) => (
                    <div className="fiche-spec" key={s}>{s}</div>
                  ))}
                </div>
              </div>
              <div className="fiche-footer">
                <a href="#" className="fiche-dl">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Fiche PDF
                </a>
                <span className="fiche-format">PDF</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
