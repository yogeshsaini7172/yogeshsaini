import './Projects.css';

const PROJECTS = [
  {
    emoji: '🛡️',
    badge: 'AI & Android',
    title: 'DualShield AI',
    desc: 'Production-grade Android application with a dual-detection mechanism (accelerometer + ML model) using TensorFlow to detect road accidents in real time and trigger automated emergency SOS alerts. Features a Flask-powered web dashboard for live monitoring and sensor fusion to minimize false positives.',
    tags: ['Kotlin', 'Python', 'TensorFlow', 'Flask', 'Sensor Fusion'],
    github: 'https://github.com/yogeshsaini7172/DualShield-AI-road-accident',
    live: null,
  },
  {
    emoji: '🌱',
    badge: 'Full Stack ML',
    title: 'AgriSense AI',
    desc: 'Real-time crop disease detection Android app (MobileNetV2) achieving 98.7% accuracy. Features a RAG pipeline with FAISS and Llama LLM for context-aware agronomic advice, and a precision fertilizer recommendation engine using Random Forest & XGBoost. Includes multilingual voice chatbot & IoT integration.',
    tags: ['Kotlin', 'Jetpack Compose', 'LLM', 'Scikit-Learn', 'FAISS'],
    github: 'https://github.com/yogeshsaini7172/Agriculture-disease-detection',
    live: null,
  },
  {
    emoji: '🔐',
    badge: 'Security App',
    title: 'Digital Pass',
    desc: 'Multi-role campus security platform serving 7 user roles with RBAC and JWT authentication. Scalable Flask backend with MongoDB Atlas, Redis caching, and WebSockets for sub-second gate pass approvals. Clean MVVM Android app with Room DB offline persistence and FCM push notifications.',
    tags: ['Kotlin', 'MVVM', 'MongoDB', 'Redis', 'Socket.IO'],
    github: 'https://github.com/yogeshsaini7172/digitalPassCollaborativeRepository12y',
    live: null,
  },
];

const FEATURED_PROJECT = {
  emoji: '⭐',
  badge: 'Real World Project',
  title: 'SISTec Digital Pass',
  team: 'Built by Team Avensoft (Yogesh Saini, Deepak Kumar, Sandeep Kumar Maurya, Utkarsh Mani Mishra)',
  desc: 'A smart, paperless campus gate pass and visitor management system designed to replace traditional manual gate pass processes. It connects students, parents, faculty, and security personnel through a unified digital network with Role-Based Access Control (RBAC), real-time notifications, and GPS Geofencing.',
  tags: ['Flask', 'MongoDB', 'WebSockets', 'Android', 'Kotlin'],
  websites: [
    { label: 'Primary Website', url: 'https://avensoft26-web.github.io/SISTec_digitala_pass/' },
    { label: 'Secondary Website', url: 'https://yogeshsaini7172.github.io/digitalPassWeb/' }
  ],
  github: 'https://github.com/yogeshsaini7172/digitalPassCollaborativeRepository12y',
  youtubeId: 'NrBc7qjgI5Q'
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <span className="dot" /> Projects
          </div>
          <h2 className="section-heading">
            Things I&apos;ve <span>Built</span>
          </h2>
          <p className="section-subheading">
            A showcase of my Android projects — ranging from productivity tools to fun games,
            each crafted with clean code and good UX in mind.
          </p>
        </div>

        <div className="featured-project reveal">
          <div className="featured-project-visual">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${FEATURED_PROJECT.youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="featured-project-body">
            <div className="featured-project-header">
              <span className="project-card-badge">{FEATURED_PROJECT.badge}</span>
            </div>
            <h3 className="project-card-title featured-title">{FEATURED_PROJECT.title}</h3>
            <div className="featured-project-team">👥 {FEATURED_PROJECT.team}</div>
            <p className="project-card-desc">{FEATURED_PROJECT.desc}</p>
            <div className="project-card-tags">
              {FEATURED_PROJECT.tags.map(tag => (
                <span key={tag} className="project-card-tag">{tag}</span>
              ))}
            </div>
            <div className="featured-project-links">
              {FEATURED_PROJECT.websites.map(site => (
                <a key={site.label} href={site.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary featured-btn">
                  🔗 {site.label}
                </a>
              ))}
              <a href={FEATURED_PROJECT.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary featured-btn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>

        <h3 className="section-subheading" style={{ marginTop: '4rem', marginBottom: '2rem' }}>Other Projects</h3>
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article className="project-card reveal" key={i}>
              <div className="project-card-visual">
                <span className="project-card-emoji">{project.emoji}</span>
                <div className="project-card-visual-overlay" />
                <span className="project-card-badge">{project.badge}</span>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link project-link-github"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link project-link-live"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-more">
          <p className="projects-more-text">
            Want to see more of my work? Check out my GitHub profile.
          </p>
          <a
            href="https://github.com/yogeshsaini7172"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
