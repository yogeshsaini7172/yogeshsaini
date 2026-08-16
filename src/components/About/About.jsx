import { useEffect, useRef, useState } from 'react';
import './About.css';

const SKILLS = [
  { name: 'Android Development', pct: 90 },
  { name: 'Machine Learning & AI', pct: 85 },
  { name: 'Backend & APIs', pct: 80 },
  { name: 'Data Structures & Algorithms', pct: 85 },
  { name: 'Databases & Cloud', pct: 80 },
];

const TOOLS = [
  'Kotlin', 'Python', 'Java', 'TensorFlow', 'Flask', 'MongoDB', 
  'Firebase', 'REST APIs', 'Jetpack Compose', 'MVVM', 'Git', 'GitHub'
];

const INFO = [
  { label: 'Name', value: 'Yogesh Saini' },
  { label: 'Role', value: 'Software Engineer — Android & ML' },
  { label: 'Location', value: 'Bhopal, India' },
  { label: 'Languages', value: 'English, Hindi' },
  { label: 'Programming', value: 'C, C++, Java, Kotlin' },
  { label: 'Databases', value: 'SQL' },
  { label: 'Interests', value: 'Movies & Chess ♟️' },
];

export default function About() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* LEFT */}
          <div className="about-left reveal-left">
            <div className="about-profile-card">
              <div className="about-avatar">
                <img src="/profile.jpg" alt="Yogesh Saini" />
              </div>
              <div className="about-profile-name">Yogesh Saini</div>
              <div className="about-profile-role">Software Engineer · CSE Student</div>
              <div className="about-profile-info">
                {INFO.map(row => (
                  <div key={row.label} className="about-info-row">
                    <span className="about-info-label">{row.label}</span>
                    <span className="about-info-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-skills-card">
              <div className="about-skills-title">Technical Skills</div>
              {SKILLS.map(skill => (
                <div key={skill.name} className="about-skill-item">
                  <div className="about-skill-meta">
                    <span className="about-skill-name">{skill.name}</span>
                    <span className="about-skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="about-skill-track">
                    <div
                      className={`about-skill-fill${animated ? ' animated' : ''}`}
                      style={{ width: animated ? `${skill.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right reveal-right">
            <div className="section-tag">
              <span className="dot" /> About Me
            </div>
            <h2 className="section-heading">
              Passionate Developer &amp; <span>Problem Solver</span>
            </h2>

            <p className="about-bio">
              👋 Hi there! I&apos;m a versatile <strong>Android Developer and ML Engineer</strong> with
              a strong passion for building scalable, high-performance mobile applications across the entire stack.
              I thrive on designing intuitive Android interfaces, robust back-end APIs, and integrating machine learning
              models to deliver reliable, production-ready products.
            </p>
            <p className="about-bio">
              Here&apos;s a sneak peek into what I build:
              I&apos;ve built <strong>DualShield AI</strong>, a production-grade app for real-time road accident detection using TensorFlow and sensor fusion, 
              and <strong>AgriSense AI</strong>, a full-stack crop disease detection app featuring a Llama LLM-powered RAG pipeline and precision fertilizer engine.
            </p>
            <p className="about-bio">
              With a solid foundation in Data Structures &amp; Algorithms and clean architecture, I enjoy taking complex problems
              and turning them into elegant, working solutions. Always learning, always building.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-card">
                <span className="about-highlight-icon">📱</span>
                <div className="about-highlight-info">
                  <div className="about-highlight-value">3+</div>
                  <div className="about-highlight-label">Projects Built</div>
                </div>
              </div>
              <div className="about-highlight-card">
                <span className="about-highlight-icon">🎓</span>
                <div className="about-highlight-info">
                  <div className="about-highlight-value">B.Tech</div>
                  <div className="about-highlight-label">CSE Student</div>
                </div>
              </div>
              <div className="about-highlight-card">
                <span className="about-highlight-icon">🏆</span>
                <div className="about-highlight-info">
                  <div className="about-highlight-value">90%</div>
                  <div className="about-highlight-label">OOP Proficiency</div>
                </div>
              </div>
              <div className="about-highlight-card">
                <span className="about-highlight-icon">🌍</span>
                <div className="about-highlight-info">
                  <div className="about-highlight-value">India</div>
                  <div className="about-highlight-label">Based in Bhopal</div>
                </div>
              </div>
            </div>

            <div className="about-tools-section">
              <div className="about-tools-title">Tools &amp; Technologies</div>
              <div className="about-tools-grid">
                {TOOLS.map(tool => (
                  <span key={tool} className="about-tool-chip">{tool}</span>
                ))}
              </div>
            </div>

            <div className="about-actions">
              <a
                href="https://www.linkedin.com/in/yogesh-saini-ab24182bb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                🔗 LinkedIn Profile
              </a>
              <a
                href="https://github.com/yogeshsaini7172"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
