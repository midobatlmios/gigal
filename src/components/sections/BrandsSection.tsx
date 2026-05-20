const brands = [
  { name: 'Nihon Kohden', specialty: 'Hématologie — Gamme Celltac' },
  { name: 'Snibe Diagnostic', specialty: 'Immunoanalyse — Maglumi / Biolumi' },
  { name: 'Orion Diagnostica', specialty: 'Réactifs & tests de spécialité' },
  { name: 'AESKU', specialty: 'Auto-immunité & Blue Diver' },
];

export default function BrandsSection() {
  return (
    <section className="brands-section fade-in-section">
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
  );
}
