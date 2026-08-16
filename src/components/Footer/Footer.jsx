import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: '💼', href: 'https://www.linkedin.com/in/yogesh-saini-ab24182bb', label: 'LinkedIn' },
  { icon: '🐙', href: 'https://github.com/yogeshsaini7172', label: 'GitHub' },
  { icon: '📧', href: 'mailto:yogeshsaini7172@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-name">Yogesh<span>.</span></div>
            <p className="footer-tagline">
              A passionate Android App Developer building useful, elegant mobile experiences. 
              Open to opportunities and collaborations.
            </p>
            <div className="footer-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="footer-social"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                  onClick={e => handleNavClick(e, link.href)}
                >
                  › {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact quick info */}
          <div>
            <div className="footer-col-title">Get In Touch</div>
            <div className="footer-links">
              <a href="mailto:yogeshsaini7172@gmail.com" className="footer-link">
                📧 yogeshsaini7172@gmail.com
              </a>
              <a href="tel:+919244208213" className="footer-link">
                📞 +91 9244208213
              </a>
              <span className="footer-link" style={{ cursor: 'default' }}>
                📍 Bhopal, India
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Yogesh Saini. Made with{' '}
            <span className="footer-bottom-heart">❤️</span> in Bhopal, India.
          </span>
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
