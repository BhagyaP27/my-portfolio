import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectData';
import { blogPosts } from '../data/blogData';

const skills = [
  'React', 'Node.js', 'JavaScript', 'Java', 'Python', 'PyTorch',
  'Bash', 'MongoDB', 'C', 'C++', 'C#', 'Git',
];

// Case-insensitive tag match helper
const tagMatch = (tags, skill) =>
  tags.some(t => t.toLowerCase() === skill.toLowerCase());

// Broader match: also check if skill appears in technologies / tags array
const techMatch = (techList, skill) =>
  techList.some(t => t.toLowerCase().includes(skill.toLowerCase()) ||
    skill.toLowerCase().includes(t.toLowerCase()));

function TagFilterModal({ skill, onClose }) {
  const navigate = useNavigate();

  const matchedProjects = projects.filter(p =>
    techMatch(p.technologies, skill)
  );
  const matchedPosts = blogPosts.filter(p =>
    tagMatch(p.tags, skill)
  );

  const total = matchedProjects.length + matchedPosts.length;

  return (
    // Backdrop
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(8,13,26,0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      {/* Panel */}
      <div
        style={{
          background: '#0f1629',
          border: '1px solid rgba(56,189,248,0.2)',
          borderRadius: '14px',
          maxWidth: '620px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              color: '#38bdf8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.35rem',
            }}>
              Tag filter
            </p>
            <h2 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.01em' }}>
              #{skill}
            </h2>
            <p style={{ color: '#475569', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", marginTop: '0.25rem' }}>
              {total} result{total !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#475569',
              cursor: 'pointer',
              fontSize: '1.1rem',
              lineHeight: 1,
              padding: '0.2rem',
            }}
          >
            ✕
          </button>
        </div>

        {total === 0 && (
          <p style={{ color: '#475569', fontSize: '0.875rem', fontFamily: "'JetBrains Mono', monospace" }}>
            No projects or posts tagged with this technology yet.
          </p>
        )}

        {/* Projects */}
        {matchedProjects.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              color: '#38bdf8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>
              Projects — {matchedProjects.length}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {matchedProjects.map(p => (
                <div
                  key={p.id}
                  className="card-glass"
                  style={{ padding: '1rem 1.25rem', cursor: 'pointer' }}
                  onClick={() => { onClose(); navigate('/projects'); }}
                >
                  <h3 style={{
                    color: '#e2e8f0',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: '0.35rem',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '0.6rem' }}>
                    {p.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {p.technologies.map(t => (
                      <span
                        key={t}
                        className="tag-pill"
                        style={t.toLowerCase() === skill.toLowerCase() ? {
                          background: 'rgba(56,189,248,0.22)',
                          border: '1px solid rgba(56,189,248,0.5)',
                          color: '#38bdf8',
                        } : {}}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Blog posts */}
        {matchedPosts.length > 0 && (
          <section>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              color: '#38bdf8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>
              Blog Posts — {matchedPosts.length}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {matchedPosts.map(post => (
                <div
                  key={post.id}
                  className="card-glass"
                  style={{ padding: '1rem 1.25rem', cursor: 'pointer', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                  onClick={() => { onClose(); navigate('/blog'); }}
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        border: '1px solid rgba(56,189,248,0.1)',
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div>
                    <p style={{
                      color: '#475569',
                      fontSize: '0.7rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: '0.25rem',
                    }}>
                      {post.date}
                    </p>
                    <h3 style={{
                      color: '#e2e8f0',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                      lineHeight: 1.4,
                    }}>
                      {post.title}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {post.tags.map(t => (
                        <span
                          key={t}
                          className="tag-pill"
                          style={t.toLowerCase() === skill.toLowerCase() ? {
                            background: 'rgba(56,189,248,0.22)',
                            border: '1px solid rgba(56,189,248,0.5)',
                            color: '#38bdf8',
                          } : {}}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Home() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a' }}>
      {/* Tag filter modal */}
      {activeSkill && (
        <TagFilterModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}

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

          {/* Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              border: '2px solid rgba(56,189,248,0.25)',
              overflow: 'hidden',
              boxShadow: '0 0 60px rgba(56,189,248,0.08)'
            }}>
              <img
              src="/images/profile.jpg"
              alt="Bhagya Patel"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
          </div>
        </div>

        {/* Technologies — clickable */}
        <section style={{ marginBottom: '4rem' }}>
          <p className="section-label">Technologies</p>
          <p style={{ color: '#475569', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.75rem' }}>
            Click any tag to see related projects & posts
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => setActiveSkill(skill)}
                style={{
                  background: 'rgba(56,189,248,0.1)',
                  border: '1px solid rgba(56,189,248,0.25)',
                  color: '#7dd3fc',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  transition: 'background 0.15s, border-color 0.15s, color 0.15s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(56,189,248,0.22)';
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.55)';
                  e.currentTarget.style.color = '#38bdf8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(56,189,248,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)';
                  e.currentTarget.style.color = '#7dd3fc';
                }}
              >
                {skill}
              </button>
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
              and building tools that are both useful and well-crafted.
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