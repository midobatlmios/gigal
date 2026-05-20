const perks = [
  'CV examiné par un humain (pas un ATS) dans les 72h',
  'Profil conservé 24 mois dans notre base active',
  'Alertes automatiques pour les nouveaux postes correspondant à votre profil',
  'Réponse systématique à chaque candidature reçue',
];

export default function CandidatureSpontanee() {
  return (
    <section className="spontane-section fade-in-section">
      <div className="spontane-inner">
        <div className="spontane-text">
          <div className="overline">Toujours intéressé ?</div>
          <h2>Déposez votre candidature spontanée</h2>
          <p>
            Le poste parfait n'est pas encore ouvert ? Envoyez-nous votre CV. Nous constituons une
            base de candidats que nous consultons en priorité avant de publier des offres.
          </p>
          <div className="perks-list">
            {perks.map((perk) => (
              <div className="perk-item" key={perk}>
                <div className="perk-check">
                  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                {perk}
              </div>
            ))}
          </div>
        </div>
        <div className="spontane-form">
          <h3>Candidature spontanée</h3>
          <div className="form-row">
            <div>
              <label className="form-label">Prénom</label>
              <input type="text" className="form-input" placeholder="Votre prénom" />
            </div>
            <div>
              <label className="form-label">Nom</label>
              <input type="text" className="form-input" placeholder="Votre nom" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email professionnel</label>
            <input type="email" className="form-input" placeholder="votre@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Téléphone</label>
            <input type="tel" className="form-input" placeholder="+212 6 XX XX XX XX" />
          </div>
          <div className="form-group">
            <label className="form-label">Domaine de compétence</label>
            <select className="form-select">
              <option value="" disabled selected>
                Choisir votre domaine
              </option>
              <option>Biologie / Biochimie / Microbiologie</option>
              <option>Maintenance biomédicale / SAV</option>
              <option>Commercial / Business Development</option>
              <option>R&D / Innovation</option>
              <option>Qualité / Réglementaire</option>
              <option>Informatique / Logiciel</option>
              <option>Marketing / Communication</option>
              <option>Finance / Administration</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Motivation (optionnel)</label>
            <textarea
              className="form-textarea"
              placeholder="Pourquoi souhaitez-vous rejoindre GIGALAB ? Quelles sont vos aspirations ?"
            />
          </div>
          <div className="form-group">
            <label className="form-label">CV & Lettre de motivation</label>
            <div className="upload-area">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p>
                Glissez vos fichiers ici ou{' '}
                <strong style={{ color: 'var(--red)', cursor: 'pointer' }}>parcourez</strong>
              </p>
              <span>PDF, DOC, DOCX — max 5 Mo par fichier</span>
            </div>
          </div>
          <button type="submit" className="btn-submit">
            Envoyer ma candidature
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
