interface Props {
  activeTab: string;
  setActiveTab: (v: string) => void;
}

const filterTabs = [
  { label: 'Tout', icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="2" width="4" height="20" rx="1" />
      <rect x="6" y="2" width="4" height="20" rx="1" />
    </svg>
  ) },
  { label: 'Documentation', icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ) },
  { label: 'Fiches produits', icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h4" />
    </svg>
  ) },
  { label: 'Vidéos formation', icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  ) },
  { label: 'Logiciels', icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ) },
  { label: 'Certifications', icon: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ) },
];

export default function FilterBarRessources({ activeTab, setActiveTab }: Props) {
  return (
    <div className="filter-bar-ressources">
      <div className="filter-inner-ressources">
        {filterTabs.map((tab) => (
          <div
            className={`filter-tab-ressources ${activeTab === tab.label ? 'active' : ''}`}
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            style={{ cursor: 'pointer' }}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}
