interface Doc {
  cat: string;
  title: string;
  desc: string;
  format: string;
  fmtClass: string;
  size: string;
  delay: string;
  iconWrapClass: string;
  icon: React.ReactNode;
}

interface Props {
  docs: Doc[];
}

export default function DocsSection({ docs }: Props) {
  if (docs.length === 0) return null;

  return (
    <section className="docs-section fade-in-section">
      <div className="container">
        <div className="sec-header">
          <div>
            <div className="overline">Documents techniques</div>
            <h2 className="section-title">Documentation</h2>
          </div>
          <a href="#" className="btn-outline-ressources">
            Tout télécharger
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
        <div className="docs-grid">
          {docs.map((d) => (
            <div className={`doc-card fade-up ${d.delay}`} key={d.title}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div className={`doc-icon-wrap ${d.iconWrapClass}`}>{d.icon}</div>
                <div>
                  <div className="doc-cat">{d.cat}</div>
                  <div className="doc-title">{d.title}</div>
                </div>
              </div>
              <div className="doc-desc">{d.desc}</div>
              <div className="doc-meta">
                <span className={`doc-format ${d.fmtClass}`}>{d.format}</span>
                <span className="doc-size">{d.size}</span>
                <a href="#" className="doc-dl">
                  Télécharger{' '}
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
