export default function Values() {
  const values = [
    {
      num: '01',
      name: 'Innovation',
      desc: "Notre cellule R&D prospecte en continu les nouvelles technologies pour distinguer et intégrer les meilleures solutions disponibles.",
    },
    {
      num: '02',
      name: 'Excellence',
      desc: "Les règles de l'art du métier sont notre priorité absolue. Nous nous y engageons à chaque étape, de la production à la livraison.",
    },
    {
      num: '03',
      name: "Esprit d'équipe",
      desc: "Le succès de GIGALAB repose sur le dévouement et la collaboration de l'ensemble de nos équipes. Chaque talent compte.",
    },
    {
      num: '04',
      name: 'Intégrité',
      desc: 'Nous agissons avec transparence et rigueur envers nos clients, nos partenaires et nos équipes. Sans compromis.',
    },
  ];

  return (
    <section className="values">
      <div className="container">
        <div className="section-header">
          <div className="overline" style={{ justifyContent: 'center' }}>Ce qui nous guide</div>
          <h2 className="section-title">Nos valeurs.</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.num}>
              <span className="value-number">{value.num}</span>
              <div className="value-name">{value.name}</div>
              <p className="value-desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
