interface Video {
  title: string;
  desc: string;
  duration: string;
  level: string;
  levelClass: string;
  bg: string;
  author: string;
  role: string;
  avatar: string;
  delay: string;
}

interface Props {
  videos: Video[];
}

export default function VideosSection({ videos }: Props) {
  if (videos.length === 0) return null;

  return (
    <section className="videos-section fade-in-section">
      <div className="container">
        <div className="overline">Formation</div>
        <h2 className="section-title">Vidéos de formation</h2>
        <p className="section-sub">
          Tutoriels d'installation, procédures de calibration et guides de dépannage filmés par nos
          experts techniques.
        </p>
        <div className="videos-grid">
          {videos.map((v) => (
            <div className={`video-card fade-up ${v.delay}`} key={v.title}>
              <div className="video-thumb">
                <div className="video-thumb-bg" style={{ background: v.bg }} />
                <div className="video-thumb-grid" />
                <div className="video-play-btn">
                  <svg viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z" /></svg>
                </div>
                <span className="video-duration">{v.duration}</span>
                <span className={`video-level ${v.levelClass}`}>{v.level}</span>
              </div>
              <div className="video-body">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
              <div className="video-footer">
                <div className="video-avatar">{v.avatar}</div>
                <div className="video-author">
                  <strong>{v.author}</strong> — {v.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
