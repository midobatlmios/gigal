import { Link } from 'react-router-dom';

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

export default function QualiteConformite() {
  return (
    <section className="qualite-section fade-in-section">
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
  );
}
