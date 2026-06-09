import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const inputStyle = {
    width: '100%',
    background: '#0f1629',
    border: '1px solid rgba(56,189,248,0.15)',
    borderRadius: '8px',
    padding: '0.65rem 1rem',
    color: '#e2e8f0',
    fontSize: '0.875rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    color: '#64748b',
    fontSize: '0.8rem',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.05em',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="section-label">Contact</p>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          color: '#e2e8f0',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}>
          Get In Touch
        </h1>
        <p style={{ color: '#64748b', marginBottom: '3rem', fontSize: '0.95rem' }}>
          Have a question or want to work together?
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

          {/* Form */}
          <div className="card-glass" style={{ padding: '2rem' }}>
            <h2 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Send a Message
            </h2>

            {submitted && (
              <div style={{
                background: 'rgba(56,189,248,0.1)',
                border: '1px solid rgba(56,189,248,0.25)',
                color: '#38bdf8',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                marginBottom: '1.25rem',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                ✓ Message sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(56,189,248,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(56,189,248,0.15)'}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(56,189,248,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(56,189,248,0.15)'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(56,189,248,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(56,189,248,0.15)'}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#38bdf8',
                  color: '#080d1a',
                  padding: '0.7rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.15s',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card-glass" style={{ padding: '1.5rem' }}>
              <h2 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem' }}>
                Contact Info
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <p style={{ color: '#475569', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace', textTransform: 'uppercase", letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                    Email
                  </p>
                  <a href="mailto:bhagyapatel000@gmail.com" style={{ color: '#38bdf8', fontSize: '0.875rem', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}>
                    bhagyapatel000@gmail.com
                  </a>
                </div>
                <div>
                  <p style={{ color: '#475569', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                    Location
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Ottawa, Canada</p>
                </div>
              </div>
            </div>

            <div className="card-glass" style={{ padding: '1.5rem' }}>
              <h2 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem' }}>
                Social Links
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/BhagyaP27' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhagya-patel05/' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >
                    ↗ {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;