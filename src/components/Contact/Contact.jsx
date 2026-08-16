import { useState } from 'react';
import './Contact.css';

const CONTACT_INFO = [
  { icon: '📍', label: 'Location', value: 'Bhopal, Madhya Pradesh, India' },
  { icon: '📞', label: 'Phone', value: <a href="tel:+919244208213">+91 9244208213</a> },
  { icon: '📧', label: 'Email', value: <a href="mailto:yogeshsaini7172@gmail.com">yogeshsaini7172@gmail.com</a> },
  { icon: '💼', label: 'LinkedIn', value: <a href="https://www.linkedin.com/in/yogesh-saini-ab24182bb" target="_blank" rel="noopener noreferrer">linkedin.com/in/yogesh-saini</a> },
];

const SOCIALS = [
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/yogesh-saini-ab24182bb' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/yogeshsaini7172' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Open mailto
    const mailto = `mailto:yogeshsaini7172@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--clr-bg-section)' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <span className="dot" /> Contact
          </div>
          <h2 className="section-heading">
            Let&apos;s <span>Connect</span>
          </h2>
          <p className="section-subheading">
            Have a question or want to collaborate? I&apos;d love to hear from you. Reach out
            through any of the channels below or drop me a message.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-left reveal-left">
            <div className="contact-info-stack">
              {CONTACT_INFO.map(item => (
                <div key={item.label} className="contact-info-card">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials-title">Find me on</div>
            <div className="contact-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right reveal-right">
            <div className="contact-form-card">
              <div className="contact-form-title">Send a Message 📬</div>
              <div className="contact-form-subtitle">
                I&apos;ll get back to you as soon as possible.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Send Message 🚀
                </button>

                {sent && (
                  <div className="form-success">
                    ✅ Message ready! Your email client has been opened.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
