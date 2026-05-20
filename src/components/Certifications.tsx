export default function Certifications() {
  const certs = [
    { name: 'ISO 9001', desc: 'Management de la qualité' },
    { name: 'ISO 13485', desc: 'Dispositifs médicaux' },
    { name: 'CE', desc: 'Conformité aux directives européennes' },
    { name: 'IMANOR', desc: 'Certification nationale marocaine' },
    { name: 'MDS Maroc', desc: 'Homologation Ministère de la Santé' },
  ];

  return (
    <section className="certifs-section fade-in-section">
      <div className="container">
        <div className="certifs-header">
          <div className="overline" style={{ justifyContent: 'center' }}>Qualité & Conformité</div>
          <h2>Certifié aux normes les plus exigeantes.</h2>
          <p>Chaque produit GIGALAB répond aux standards internationaux de qualité et de sécurité.</p>
        </div>
        <div className="certifs-grid">
          {certs.map((cert) => (
            <div className="certif-card" key={cert.name}>
              <div className="certif-logo-placeholder">LOGO</div>
              <div className="certif-card-name">{cert.name}</div>
              <div className="certif-card-desc">{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
