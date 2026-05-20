interface Software {
  title: string;
  desc: string;
  version: string;
  delay: string;
  icon: React.ReactNode;
}

interface Props {
  software: Software[];
}

export default function SoftwareSection({ software }: Props) {
  if (software.length === 0) return null;

  return (
    <section className="software-section fade-in-section">
      <div className="container">
        <div className="sec-header">
          <div>
            <div className="overline">Téléchargements</div>
            <h2 className="section-title">Logiciels & pilotes</h2>
          </div>
        </div>
        <div className="software-grid">
          {software.map((sw) => (
            <div className={`software-card fade-up ${sw.delay}`} key={sw.title}>
              <div className="sw-icon">{sw.icon}</div>
              <div className="sw-info">
                <h3>{sw.title}</h3>
                <p>{sw.desc}</p>
              </div>
              <div className="sw-meta">
                <span className="sw-version">{sw.version}</span>
                <a href="#" className="sw-dl-btn">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
