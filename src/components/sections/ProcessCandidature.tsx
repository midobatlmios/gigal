const processSteps = [
  { num: 1, label: 'Candidature\nen ligne', active: true, icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
  { num: 2, label: 'Appel RH\n30 minutes', active: true, icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 013.56 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.08 6.08l.9-.9a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg> },
  { num: 3, label: 'Entretien\ntechnique', active: false },
  { num: 4, label: 'Rencontre\néquipe & manager', active: false },
  { num: 5, label: 'Offre &\nonboarding', active: false, icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /></svg> },
];

export default function ProcessCandidature() {
  return (
    <section className="process-section fade-in-section">
      <div className="container">
        <div className="overline">Comment ça marche</div>
        <h2 className="section-title">Notre processus de recrutement</h2>
        <div className="recrutement-steps">
          {processSteps.map((step) => (
            <div className="recrutement-step fade-up" key={step.num}>
              <div className={`step-circle-recrutement ${step.active ? 'active' : ''}`}>
                {step.icon || step.num}
              </div>
              <div className={`step-label-recrutement ${step.active ? 'active-label' : ''}`}>
                {step.label.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < step.label.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: 40,
            fontSize: 14,
            color: 'rgba(255,255,255,0.45)',
            textAlign: 'center',
          }}
        >
          Délai moyen de recrutement :{' '}
          <strong style={{ color: 'var(--white)' }}>3 semaines</strong> du dépôt au contrat signé.
        </p>
      </div>
    </section>
  );
}
