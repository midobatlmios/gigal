const events = [
  { day: '14', month: 'Mai 2026', title: 'Congrès National de Biologie Médicale — Casablanca', desc: 'Stand GIGALAB Hall B – Démonstrations live Biolis i50, Celltac G et Blue Diver Platinum. Conférences sur le diagnostic de précision.', location: 'Casablanca, Maroc', status: 'upcoming', label: 'À venir', delay: 'delay-1' },
  { day: '3', month: 'Jun 2026', title: 'MEDLAB Africa — Dakar', desc: 'Premier salon panafricain de biologie médicale. GIGALAB présentera sa gamme Manufacturing et ses solutions pour les laboratoires d\'Afrique subsaharienne.', location: 'Dakar, Sénégal', status: 'upcoming', label: 'À venir', delay: 'delay-2' },
  { day: '18', month: 'Sep 2026', title: 'EuroMedLab 2026 — Paris', desc: 'GIGALAB participe pour la première fois au principal congrès européen de médecine de laboratoire, aux côtés des grands acteurs mondiaux du DIV.', location: 'Paris, France', status: 'upcoming', label: 'À venir', delay: 'delay-3' },
  { day: '22', month: 'Fév 2026', title: 'SMBM 2026 — Alger', desc: 'Salon Maghrébin de Biologie Médicale. 300+ participants, 5 partenariats signés. Retour sur notre participation réussite.', location: 'Alger, Algérie', status: 'passed', label: 'Passé', dimmed: true, delay: 'delay-4' },
];

export default function EvenementsSection() {
  return (
    <section className="events-section fade-in-section">
      <div className="container">
        <div className="overline fade-up">Agenda</div>
        <h2 className="section-title fade-up delay-1">Événements à venir</h2>
        <p className="section-sub fade-up delay-2" style={{ marginBottom: 40 }}>
          Retrouvez GIGALAB dans les principaux événements du secteur de la biologie médicale en
          Afrique et en Europe.
        </p>

        <div className="events-list">
          {events.map((event) => (
            <div
              className={`event-card fade-up ${event.delay || ''}`}
              key={event.title}
              style={event.dimmed ? { opacity: 0.6 } : undefined}
            >
              <div className="event-date-block" style={event.dimmed ? { background: 'var(--gray-100)' } : undefined}>
                <div className="event-day" style={event.dimmed ? { color: 'var(--gray-600)' } : undefined}>
                  {event.day}
                </div>
                <div className="event-month">{event.month}</div>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
              <div className="event-meta">
                <div className="event-location">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {event.location}
                </div>
                <span className={`event-badge badge-${event.status}`}>{event.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
