import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { projects } from '../data/projectData';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <div style={{ minHeight: '100vh', background: '#080d1a', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#38bdf8',
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              fontFamily: "'JetBrains Mono', monospace",
              padding: 0,
            }}
          >
            ← Back to projects
          </button>

          <div className="card-glass" style={{ padding: '2.5rem' }}>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  border: '1px solid rgba(56,189,248,0.1)',
                }}
              />
            )}

            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '1rem',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {selectedProject.title}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="tag-pill">{tech}</span>
              ))}
            </div>

            <p style={{
              color: '#94a3b8',
              fontSize: '1rem',
              lineHeight: 1.7,
              borderLeft: '3px solid #38bdf8',
              paddingLeft: '1rem',
              marginBottom: '1.5rem',
            }}>
              {selectedProject.description}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={{
                  background: '#1e293b',
                  color: '#e2e8f0',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(56,189,248,0.15)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  GitHub →
                </a>
              )}
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" style={{
                  background: '#38bdf8',
                  color: '#080d1a',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}>
                  Live Demo ↗
                </a>
              )}
            </div>

            <div style={{ color: '#94a3b8', lineHeight: 1.8 }}>
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => <h3 style={{ color: '#e2e8f0', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.1rem' }} {...props} />,
                  p: ({ node, ...props }) => <p style={{ color: '#94a3b8', marginBottom: '1rem' }} {...props} />,
                  ul: ({ node, ...props }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#94a3b8' }} {...props} />,
                  li: ({ node, ...props }) => <li style={{ marginBottom: '0.4rem' }} {...props} />,
                  strong: ({ node, ...props }) => <strong style={{ color: '#e2e8f0', fontWeight: 600 }} {...props} />,
                  code: ({ node, inline, ...props }) => (
                    <code style={{
                      background: '#1e293b',
                      color: '#7dd3fc',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.85em',
                      fontFamily: "'JetBrains Mono', monospace",
                    }} {...props} />
                  )
                }}
              >
                {selectedProject.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="section-label">Work</p>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          color: '#e2e8f0',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}>
          Projects
        </h1>
        <p style={{ color: '#64748b', marginBottom: '3rem', fontSize: '0.95rem' }}>
          A selection of things I've built.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-glass"
              style={{ cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => setSelectedProject(project)}
            >
              <div style={{
                height: '160px',
                background: 'linear-gradient(135deg, #0f1629 0%, #1e293b 100%)',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(56,189,248,0.08)',
              }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#334155',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                  }}>
                    no preview
                  </div>
                )}
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  marginBottom: '0.5rem',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.825rem',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;