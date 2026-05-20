export default function NewsletterSection() {
  return (
    <section className="newsletter-section fade-in-section">
      <div className="newsletter-inner">
        <div className="newsletter-text">
          <div className="overline">Newsletter</div>
          <h2>
            Restez informé
            <br />
            des avancées GIGALAB
          </h2>
          <p>
            Recevez nos actualités, lancements produits et invitations aux événements
            directement dans votre boîte mail. Désinscription possible à tout moment.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="newsletter-row">
            <input className="nl-input" type="text" placeholder="Prénom" />
            <input className="nl-input" type="text" placeholder="Nom" />
          </div>
          <input className="nl-input" type="email" placeholder="Adresse email professionnelle" />
          <select className="nl-select">
            <option value="" disabled selected>
              Votre spécialité
            </option>
            <option>Biologiste médical</option>
            <option>Médecin</option>
            <option>Responsable de laboratoire</option>
            <option>Distributeur / Revendeur</option>
            <option>Autre</option>
          </select>
          <label className="nl-check">
            <input type="checkbox" />
            J'accepte de recevoir les communications de GIGALAB et confirme avoir lu la politique
            de confidentialité.
          </label>
          <button type="submit" className="btn-nl">
            S'abonner à la newsletter
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
