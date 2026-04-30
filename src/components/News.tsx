export default function News() {
  const articles = [
    {
      icon: '🏆',
      cat: 'Innovation',
      date: '01 Avril 2026',
      title: 'Premiers tests antigéniques salivaires made in Africa',
      excerpt: 'GIGALAB franchit une étape historique en maîtrisant la production de tests salivaires de bout en bout, de la R&D à l\'industrialisation.',
    },
    {
      icon: '🌍',
      cat: 'Événement',
      date: '05 Mai 2026',
      title: 'GIGALAB présent à GITEX Health Casablanca',
      excerpt: 'Retrouvez nos équipes les 5 et 6 mai à GITEX Health, l\'événement majeur dédié aux technologies de la santé en Afrique.',
    },
    {
      icon: '🌾',
      cat: 'Événement',
      date: 'Mars 2026',
      title: 'GIGALAB au SIAM de Meknès',
      excerpt: 'Présents au Salon International de l\'Agriculture du Maroc pour présenter nos solutions en équipements scientifiques et contrôle agroalimentaire.',
    },
  ];

  return (
    <section className="news">
      <div className="container">
        <div className="news-header">
          <div>
            <div className="overline">Blog & Actualités</div>
            <h2 className="section-title">Dernières actualités.</h2>
          </div>
          <a href="#" className="btn btn-outline-dark">
            Toutes les actualités
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 13, height: 13 }}>
              <path d="M1 7h12M7 1l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="news-grid">
          {articles.map((article) => (
            <div className="news-card" key={article.title}>
              <div className="news-card-img">
                <div className="news-card-img-bg" />
                <div className="news-card-img-icon">{article.icon}</div>
                <span className="news-card-cat">{article.cat}</span>
              </div>
              <div className="news-card-body">
                <div className="news-card-date">{article.date}</div>
                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-excerpt">{article.excerpt}</p>
                <a href="#" className="news-card-link">Lire la suite →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
