import { useState, useEffect } from 'react';
import './Hero.css';

const TYPED_TEXTS = [
  'Android App Developer',
  'Software Engineer',
  'Machine Learning Engineer',
  'Problem Solver',
];

const SKILLS = [
  { label: 'Android Dev', pct: 90 },
  { label: 'Machine Learning', pct: 85 },
  { label: 'Java / Kotlin', pct: 85 },
  { label: 'Backend (Flask)', pct: 80 },
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPED_TEXTS[textIdx];
    let delay = isDeleting ? 60 : 110;
    if (!isDeleting && charIdx === currentText.length) delay = 1800;
    if (isDeleting && charIdx === 0) delay = 400;

    const timer = setTimeout(() => {
      if (!isDeleting && charIdx < currentText.length) {
        setTypedText(currentText.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!isDeleting && charIdx === currentText.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIdx > 0) {
        setTypedText(currentText.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setIsDeleting(false);
        setTextIdx(i => (i + 1) % TYPED_TEXTS.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, textIdx]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* LEFT: Content */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="hero-greeting-dot" />
              Hello, World! 👋
            </div>

            <h1 className="hero-title">
              I&apos;m{' '}
              <span className="hero-title-name">Yogesh Saini</span>
            </h1>

            <div className="hero-typed-wrapper">
              <span className="hero-typed-text">{typedText}</span>
              <span className="hero-cursor" />
            </div>

            <p className="hero-desc">
              Versatile Android Developer and ML Engineer with experience building scalable, high-performance mobile applications across the entire stack. Proficient in designing intuitive Android interfaces, robust back-end APIs, and seamless database integrations to deliver reliable, production-ready products.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={e => handleNavClick(e, '#projects')}
              >
                🚀 View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={e => handleNavClick(e, '#contact')}
              >
                📬 Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">3+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">B.Tech</div>
                <div className="hero-stat-label">CSE Student</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">∞</div>
                <div className="hero-stat-label">Curiosity</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Card */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-badge hero-badge-1">
                <span className="hero-badge-icon">🤖</span>
                <span>Android Dev</span>
              </div>
              <div className="hero-badge hero-badge-2">
                <span className="hero-badge-icon">🧠</span>
                <span>ML Engineer</span>
              </div>

              <div className="hero-card-avatar">
                <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Yogesh Saini" />
              </div>
              <div className="hero-card-name">Yogesh Saini</div>
              <div className="hero-card-role">Software Engineer · Android & ML</div>

              <div className="hero-card-tags">
                <span className="hero-card-tag">Kotlin</span>
                <span className="hero-card-tag">Python</span>
                <span className="hero-card-tag">TensorFlow</span>
                <span className="hero-card-tag">Flask</span>
                <span className="hero-card-tag">Firebase</span>
                <span className="hero-card-tag">MongoDB</span>
              </div>

              <div className="hero-card-skills">
                {SKILLS.map(skill => (
                  <div key={skill.label} className="hero-skill-row">
                    <span className="hero-skill-label">{skill.label}</span>
                    <div className="hero-skill-bar-bg">
                      <div
                        className="hero-skill-bar-fill"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                    <span className="hero-skill-pct">{skill.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
