export default function ValeursPage() {
  return (
    <section className="values-section fade-in-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 56 }}>
          <div className="overline" style={{ justifyContent: 'center', color: 'var(--red)' }}>
            Ce qui nous guide
          </div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Nos valeurs.
          </h2>
        </div>
        <div className="values-grid-page">
          <div className="value-card-page">
            <span className="value-number">01</span>
            <div className="value-name">Innovation</div>
            <p className="value-desc">
              Notre cellule R&D prospecte en continu les nouvelles technologies pour distinguer et
              intégrer les meilleures solutions disponibles.
            </p>
          </div>
          <div className="value-card-page">
            <span className="value-number">02</span>
            <div className="value-name">Excellence</div>
            <p className="value-desc">
              Les règles de l'art du métier sont notre priorité absolue. Nous nous y engageons à chaque
              étape, de la production à la livraison.
            </p>
          </div>
          <div className="value-card-page">
            <span className="value-number">03</span>
            <div className="value-name">Esprit d'équipe</div>
            <p className="value-desc">
              Le succès de GIGALAB repose sur le dévouement et la collaboration de l'ensemble de nos
              équipes. Chaque talent compte.
            </p>
          </div>
          <div className="value-card-page">
            <span className="value-number">04</span>
            <div className="value-name">Intégrité</div>
            <p className="value-desc">
              Nous agissons avec transparence et rigueur envers nos clients, nos partenaires et nos
              équipes. Sans compromis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
