const features = [
  {
    number: "01",
    title: "Daily planner",
    description: "Bring today's priorities into one clear plan.",
    accent: "violet"
  },
  {
    number: "02",
    title: "Time manager",
    description: "Understand where your time goes and protect your focus.",
    accent: "blue"
  },
  {
    number: "03",
    title: "Smart routine",
    description: "Build a rhythm for mornings, afternoons, and evenings.",
    accent: "mint"
  },
  {
    number: "04",
    title: "Goals & habits",
    description: "Turn long-term intentions into small repeatable actions.",
    accent: "amber"
  }
] as const;

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="Daily Life Time home">
          <span className="brand-mark">d.</span>
          <span className="brand-name">daily life <b>time</b></span>
        </a>

        <div className="workspace-label">WORKSPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          <a className="nav-link active" href="#overview"><span>◫</span> Overview</a>
          <a className="nav-link" href="#planner"><span>▦</span> Daily planner</a>
          <a className="nav-link" href="#time"><span>◷</span> Time manager</a>
          <a className="nav-link" href="#habits"><span>◎</span> Habits & goals</a>
          <a className="nav-link" href="#assistant"><span>✳</span> AI assistant</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="mini-orb" aria-hidden="true">✦</div>
          <p>Your time is your most valuable resource.</p>
          <span>Make it count.</span>
        </div>
      </aside>

      <section className="main-panel" id="overview">
        <header className="topbar">
          <div className="mobile-brand"><span className="brand-mark">d.</span> daily life <b>time</b></div>
          <div className="breadcrumb">Workspace <span>/</span> Overview</div>
          <div className="topbar-right">
            <span className="status-dot" /> Your personal space
            <div className="avatar" aria-label="Profile placeholder">Y</div>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> YOUR LIFE, IN FOCUS</div>
              <h1>Make room for<br /><span>what matters.</span></h1>
              <p className="welcome-copy">
                A little more clarity. A little less chaos.<br className="desktop-break" />
                Your personal command center starts here.
              </p>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-core"><span>✦</span></div>
              <div className="hero-spark spark-one">✧</div>
              <div className="hero-spark spark-two">·</div>
            </div>
          </section>

          <section className="section-heading">
            <div>
              <div className="eyebrow">YOUR TOOLKIT</div>
              <h2>Everything starts with a plan.</h2>
            </div>
            <span className="section-count">04 CORE AREAS</span>
          </section>

          <section className="feature-grid" aria-label="Core platform areas">
            {features.map((feature) => (
              <article className={`feature-card ${feature.accent}`} key={feature.number}>
                <div className="card-top">
                  <span className="feature-number">{feature.number}</span>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="feature-icon" aria-hidden="true">
                  {feature.number === "01" ? "▤" : feature.number === "02" ? "◷" : feature.number === "03" ? "◌" : "✳"}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </section>

          <section className="bottom-grid">
            <article className="focus-card">
              <div className="focus-icon">✦</div>
              <div>
                <span className="eyebrow">THE DAILY LIFE TIME PROMISE</span>
                <h3>Progress over pressure.</h3>
                <p>Plan intentionally, make steady progress, and leave space for life.</p>
              </div>
            </article>
            <article className="setup-card">
              <span className="setup-label">FOUNDATION STATUS</span>
              <div className="setup-status"><span className="status-dot" /> Core workspace initialized</div>
              <div className="setup-track"><span /></div>
              <span className="setup-note">Your personal dashboard is taking shape.</span>
            </article>
          </section>

          <footer className="footer">
            <span>DAILY LIFE TIME <span className="footer-dot">•</span> PERSONAL LIFE MANAGEMENT</span>
            <span>Built for better days.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
