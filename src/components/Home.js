import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  'React', 'Node.js', 'JavaScript', 'Java', 'Python', 'PyTorch',
  'Bash', 'MongoDB', 'C', 'C++', 'C#', 'Git',
];

function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#080d1a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <p className="section-label">Software Engineer</p>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              color: '#e2e8f0',
              lineHeight: 1.15,
              margin: '0 0 1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Hello! I'm{' '}
              <span style={{ color: '#38bdf8' }}>Bhagya Patel.</span>
            </h1>
            <p style={{
              color: '#94a3b8',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '2rem',
            }}>
              A software engineering student at Carleton University. I specialize in
              building clean, efficient applications and exploring AI/ML systems.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/projects" style={{
                background: '#38bdf8',
                color: '#080d1a',
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                View Projects
              </Link>
              <Link to="/contact" style={{
                background: 'transparent',
                color: '#38bdf8',
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                border: '1px solid rgba(56,189,248,0.35)',
                transition: 'border-color 0.15s',
              }}
                onMouseEnter={e => e.target.style.borderColor = '#38bdf8'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(56,189,248,0.35)'}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Avatar / visual card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              border: '2px solid rgba(56,189,248,0.25)',
              background: 'linear-gradient(135deg, #0f1629 0%, #1e293b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              boxShadow: '0 0 60px rgba(56,189,248,0.08)',
            }}>
              👩‍💻
            </div>
          </div>
        </div>

        {/* Technologies */}
        <section style={{ marginBottom: '4rem' }}>
          <p className="section-label">Technologies</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {skills.map((skill) => (
              <span key={skill} className="tag-pill">{skill}</span>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* About */}
        <section style={{ marginBottom: '4rem' }}>
          <p className="section-label">About Me</p>
          <div className="card-glass" style={{ padding: '2rem', marginTop: '1rem' }}>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1rem', margin: 0 }}>
              I'm a passionate developer with a strong foundation in software engineering and a growing
              interest in AI and machine learning. I love solving complex problems, learning new technologies,
              and building tools that are both useful and well-crafted. When I'm not coding, im trying to learn new technologies, and building a better version of myself..
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* Quick links row */}
        <section>
          <p className="section-label">Contact</p>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1rem' }}>
            I'm always looking for opportunities to work on new and exciting projects.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:bhagyapatel000@gmail.com" style={{
              color: '#38bdf8',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontFamily: "'JetBrains Mono', monospace",
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              ✉ Email
            </a>
            <span style={{ color: '#1e293b' }}>/</span>
            <a href="https://github.com/BhagyaP27" target="_blank" rel="noopener noreferrer" style={{
              color: '#38bdf8',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontFamily: "'JetBrains Mono', monospace",
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              ⌥ GitHub
            </a>
            <span style={{ color: '#1e293b' }}>/</span>
            <a href="https://www.linkedin.com/in/bhagya-patel05/" target="_blank" rel="noopener noreferrer" style={{
              color: '#38bdf8',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              ↗ LinkedIn
            </a>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(56,189,248,0.08)',
        padding: '1.5rem',
        textAlign: 'center',
        color: '#334155',
        fontSize: '0.8rem',
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        © bhagya.dev/portfolio &nbsp;&nbsp; Copyright (c) 2025, Bhagya Patel
      </footer>
    </div>
  );
}

export default Home;