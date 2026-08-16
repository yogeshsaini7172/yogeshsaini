import { useState } from 'react';
import './Resume.css';

const EDUCATION = [
  {
    date: '2023 – 2027',
    title: 'B.Tech in Computer Science and Engineering',
    org: 'Sagar Institute Of Science, Technology And Research, Bhopal',
    desc: (
      <ul>
        <li>Current CGPA: 8.15 / 10</li>
        <li>Specialization in Data Structures, Algorithms, and Software Engineering</li>
      </ul>
    ),
  },
  {
    date: '2022 – 2023',
    title: 'Class XII (Science)',
    org: 'Govt Boys H S School Rehti, Sehore',
    desc: (
      <ul>
        <li>Score: 82.6%</li>
      </ul>
    ),
  },
  {
    date: '2020 – 2021',
    title: 'Class X',
    org: 'Govt Boys H S School Rehti, Sehore',
    desc: (
      <ul>
        <li>Score: 92%</li>
      </ul>
    ),
  },
];

const ACHIEVEMENTS = [
  {
    date: 'Certifications',
    title: 'Cisco Networking Academy',
    org: 'AI, Data Science & Cybersecurity',
    desc: (
      <ul>
        <li>Introduction to Data Science & Data Analytics Essentials</li>
        <li>Introduction to Modern AI & Apply AI: Analyze Customer Reviews</li>
        <li>Introduction to Cybersecurity & Python Essentials 1 & 2</li>
        <li>CCNA: Enterprise Networking, Security, and Automation</li>
        <li>CCNA: Introduction to Networks & Switching, Routing</li>
      </ul>
    ),
  },
  {
    date: 'Achievements',
    title: 'Competitive Programming & DSA',
    org: 'LeetCode, GeeksforGeeks, Coding Ninjas',
    desc: (
      <ul>
        <li>Solved 300+ DSA problems across multiple platforms.</li>
        <li>Demonstrated advanced algorithmic and problem-solving skills.</li>
      </ul>
    ),
  },
];

export default function Resume() {
  const [tab, setTab] = useState('education');

  const items = tab === 'education' ? EDUCATION : ACHIEVEMENTS;

  return (
    <section id="resume" className="section" style={{ background: 'var(--clr-bg-section)' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <span className="dot" /> Resume
          </div>
          <h2 className="section-heading">
            My <span>Journey</span>
          </h2>
          <p className="section-subheading">
            A look at my academic background, technical certifications, and achievements.
          </p>
        </div>

        <div className="resume-tabs">
          <button
            className={`resume-tab${tab === 'education' ? ' active' : ''}`}
            onClick={() => setTab('education')}
          >
            🎓 Education
          </button>
          <button
            className={`resume-tab${tab === 'achievements' ? ' active' : ''}`}
            onClick={() => setTab('achievements')}
          >
            🏆 Certifications &amp; Achievements
          </button>
        </div>

        <div className="resume-timeline">
          {items.map((item, i) => (
            <div className="resume-card reveal" key={i}>
              <div className="resume-card-date">{item.date}</div>
              <div className="resume-card-title">{item.title}</div>
              <div className="resume-card-org">{item.org}</div>
              <div className="resume-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="resume-download">
          <p className="resume-download-text">
            Want a detailed overview of my skills and background?
          </p>
          <a
            href="/Yogesh_Resume.pdf"
            className="btn btn-primary"
            download
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
