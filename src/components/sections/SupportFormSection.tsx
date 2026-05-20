const contactMethods = [
  {
    label: 'Téléphone',
    value: '+212 522 34 03 15 / 35 29 22',
    sub: 'Lundi – Vendredi · 8h30 – 17h30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email support',
    value: 'support@gigalab.ma',
    sub: 'Réponse sous 24h ouvrées',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: 'Siège GIGALAB',
    value: 'Casablanca, Maroc',
    sub: 'Adresse complète à compléter',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const supportedTags = [
  'Biolis 30i', 'Biolis i24', 'Biolis i50', 'Celltac G', 'Celltac F',
  'Celltac Es', 'Celltac α', 'Maglumi X8', 'Biolumi CX8', 'IDS-ISYS',
  'Blue Diver', 'Coag 2D', 'Coag 4D', 'Microscopes GI',
];

export default function SupportFormSection() {
  return (
    <section className="support-contact-section fade-in-section" id="demande">
      <div className="container">
        <div className="support-contact-inner">
          {/* Formulaire */}
          <div className="support-form-wrap">
            <div className="overline">Demande de support</div>
            <h2 className="support-form-title">
              Soumettre une
              <br />
              <em>demande.</em>
            </h2>
            <p className="support-form-subtitle">
              Décrivez votre problème ou besoin — notre équipe technique vous recontacte sous 24h
              ouvrées.
            </p>
            <form>
              <div className="support-form-row">
                <div>
                  <label className="support-form-label">Nom complet</label>
                  <input type="text" className="support-form-input" placeholder="Dr. Ahmed Benali" />
                </div>
                <div>
                  <label className="support-form-label">Établissement</label>
                  <input type="text" className="support-form-input" placeholder="Laboratoire / Hôpital" />
                </div>
              </div>
              <div className="support-form-row">
                <div>
                  <label className="support-form-label">Téléphone</label>
                  <input type="tel" className="support-form-input" placeholder="+212 6XX XXX XXX" />
                </div>
                <div>
                  <label className="support-form-label">Email</label>
                  <input type="email" className="support-form-input" placeholder="contact@labo.ma" />
                </div>
              </div>
              <div className="support-form-group">
                <label className="support-form-label">Équipement concerné</label>
                <select className="support-form-select">
                  <option value="" disabled selected>
                    Sélectionner un équipement
                  </option>
                  <optgroup label="Biochimie">
                    <option>Biolis 30i</option>
                    <option>Biolis i24 Premium</option>
                    <option>Biolis i50 Superior</option>
                  </optgroup>
                  <optgroup label="Hématologie">
                    <option>Celltac G</option>
                    <option>Celltac F</option>
                    <option>Celltac Es</option>
                    <option>Celltac α</option>
                  </optgroup>
                  <optgroup label="Immunoanalyse">
                    <option>Maglumi X8</option>
                    <option>Biolumi CX8</option>
                    <option>IDS-ISYS</option>
                    <option>Blue Diver</option>
                    <option>Alfa Reader</option>
                    <option>CalproSmart</option>
                  </optgroup>
                  <optgroup label="Coagulation">
                    <option>Coag 2D</option>
                    <option>Coag 4D</option>
                  </optgroup>
                  <option>Autre équipement</option>
                </select>
              </div>
              <div className="support-form-group">
                <label className="support-form-label">Description du problème</label>
                <textarea
                  className="support-form-textarea"
                  placeholder="Décrivez le dysfonctionnement, le message d'erreur affiché, ou la nature de votre demande..."
                />
              </div>
              <div className="support-form-group">
                <label className="support-form-label">Niveau d'urgence</label>
                <div className="urgence-group">
                  <button type="button" className="urgence-btn selected-low">
                    Faible
                  </button>
                  <button type="button" className="urgence-btn selected-med">
                    Modérée
                  </button>
                  <button type="button" className="urgence-btn selected-high">
                    Urgente — arrêt d'activité
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary support-form-submit">
                Soumettre la demande
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 7h12M7 1l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>

          {/* Bloc contact */}
          <div className="support-contact-aside">
            <div className="support-aside-title">Nous contacter directement</div>
            <div className="support-contact-methods">
              {contactMethods.map((m) => (
                <div className="support-contact-method" key={m.label}>
                  <div className="support-method-icon">{m.icon}</div>
                  <div>
                    <div className="support-method-label">{m.label}</div>
                    <div className="support-method-value">{m.value}</div>
                    <div className="support-method-sub">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="supported-wrap">
              <div className="supported-title">Équipements supportés</div>
              <div className="supported-tags">
                {supportedTags.map((tag) => (
                  <span className="supported-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
