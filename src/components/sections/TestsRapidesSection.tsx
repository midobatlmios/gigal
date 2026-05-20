import { Link } from 'react-router-dom';

const tests = [
  { name: 'COVID-19 Ag', badge: 'Salivaire', spec: 'Résultat en 10 minutes' },
  { name: 'HIV 1+2', spec: 'Dépistage rapide' },
  { name: 'Hépatite B (HBsAg)', spec: 'Détection antigène de surface' },
  { name: 'Hépatite C (HCV)', spec: 'Sérologie rapide' },
  { name: 'Malaria Pf/Pan', spec: 'Diagnostic différentiel' },
  { name: 'Syphilis', spec: 'Dépistage rapide' },
  { name: 'Monkeypox', spec: 'Test antigénique' },
  { name: 'HCG (grossesse)', spec: 'Détection bêta-HCG' },
];

export default function TestsRapidesSection() {
  return (
    <section className="tests-section fade-in-section" id="tests-rapides">
      <div className="tests-glow" />
      <div className="container">
        <div className="tests-inner">
          <div className="tests-content">
            <div className="overline">Gamme GLD</div>
            <h2>
              Tests rapides
              <br />
              fabriqués au Maroc.
            </h2>
            <p>
              GIGALAB est la première entreprise africaine à produire des tests antigéniques
              salivaires. Notre gamme GLD couvre les principaux enjeux de santé publique — conçus
              ici, livrés pour l'Afrique.
            </p>
            <div className="tests-origin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              Conçus, développés et fabriqués au Maroc — pour l'Afrique
            </div>
          </div>

          <div className="tests-table-wrap">
            <table className="tests-table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Spécification</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test) => (
                  <tr key={test.name}>
                    <td>
                      {test.name}
                      {test.badge && <span className="test-badge">{test.badge}</span>}
                    </td>
                    <td>{test.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 28 }}>
              <Link to="/ressources" className="btn btn-outline-white">
                Télécharger le catalogue GLD
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
                  <path d="M7 1v8M3 6l4 4 4-4M1 12h12" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
