const processSteps = [
  { num: '01', name: 'Soumission', desc: 'Formulaire en ligne ou appel hotline — décrivez votre problème en 2 minutes' },
  { num: '02', name: 'Qualification', desc: "Notre équipe technique analyse votre demande et évalue le niveau d'urgence" },
  { num: '03', name: 'Prise en charge', desc: "Support à distance ou planification d'une intervention terrain selon la situation" },
  { num: '04', name: 'Résolution', desc: "Confirmation de la résolution et compte-rendu d'intervention transmis au client" },
];

export default function ProcessusIntervention() {
  return (
    <section className="support-process-section fade-in-section">
      <div className="container">
        <div className="support-process-header">
          <div className="overline" style={{ justifyContent: 'center' }}>
            Comment ça marche
          </div>
          <h2>
            De la demande à la <em>résolution.</em>
          </h2>
          <p>Un processus clair et réactif — vous savez toujours où en est votre demande.</p>
        </div>
        <div className="process-steps-row">
          {processSteps.map((step) => (
            <div className="process-step-col" key={step.num}>
              <div className="process-step-circle">{step.num}</div>
              <div className="process-step-name">{step.name}</div>
              <div className="process-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
