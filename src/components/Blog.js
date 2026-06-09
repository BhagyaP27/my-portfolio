import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogData';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div style={{ minHeight: '100vh', background: '#080d1a', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <button
            onClick={() => setSelectedPost(null)}
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
            ← Back to blog
          </button>

          <article className="card-glass" style={{ padding: '2.5rem' }}>
            {selectedPost.coverImage && (
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
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

            <p style={{
              color: '#475569',
              fontSize: '0.8rem',
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: '0.75rem',
            }}>
              {selectedPost.date}
            </p>

            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '1.25rem',
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
            }}>
              {selectedPost.title}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>

            <div style={{ color: '#94a3b8', lineHeight: 1.8 }}>
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => <h3 style={{ color: '#e2e8f0', fontWeight: 700, marginTop: '1.75rem', marginBottom: '0.5rem', fontSize: '1.15rem' }} {...props} />,
                  p: ({ node, ...props }) => <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.8 }} {...props} />,
                  ul: ({ node, ...props }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#94a3b8' }} {...props} />,
                  ol: ({ node, ...props }) => <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#94a3b8' }} {...props} />,
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
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="section-label">Writing</p>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          color: '#e2e8f0',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}>
          Blog
        </h1>
        <p style={{ color: '#64748b', marginBottom: '3rem', fontSize: '0.95rem' }}>
          Deep dives into AI engineering, vector search, and architecture.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="card-glass"
              style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              onClick={() => setSelectedPost(post)}
            >
              <div style={{
                height: '160px',
                background: 'linear-gradient(135deg, #0f1629 0%, #1e293b 100%)',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(56,189,248,0.08)',
              }}>
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#334155', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem',
                  }}>
                    no preview
                  </div>
                )}
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p style={{
                  color: '#475569',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  marginBottom: '0.5rem',
                }}>
                  {post.date}
                </p>
                <h2 style={{
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  marginBottom: '0.5rem',
                  lineHeight: 1.4,
                }}>
                  {post.title}
                </h2>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.825rem',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
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

export default Blog;