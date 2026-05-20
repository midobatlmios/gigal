export default function VisionPDG() {
  return (
    <section className="vision-section fade-in-section">
      <div className="container">
        <div className="vision-inner">
          <div className="vision-photo">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="5" />
              <path d="M3 21a9 9 0 0118 0" />
            </svg>
            <span>Photo M. Karim Zaher</span>
            <div className="vision-photo-name">
              <div className="vision-photo-name-text">M. Karim Zaher</div>
              <div className="vision-photo-name-role">Président Directeur Général, GIGALAB</div>
            </div>
          </div>
          <div className="vision-quote-wrap">
            <div className="overline">Vision industrielle</div>
            <span className="vision-quote-mark">&ldquo;</span>
            <p className="vision-quote-text">
              Nous avons fait le choix de l'innovation et de la souveraineté. Notre objectif est
              clair : apporter au Maroc et au continent des solutions de diagnostic fiables,
              accessibles et fabriquées chez nous. Ensemble, nous construisons la souveraineté
              sanitaire.
            </p>
            <div className="vision-quote-author">
              <div className="vision-quote-author-line" />
              <div>
                <div className="vision-quote-author-name">M. Karim Zaher</div>
                <div className="vision-quote-author-role">PDG de GIGALAB Diagnostic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
