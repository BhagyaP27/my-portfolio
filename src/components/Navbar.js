import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'rgba(8, 13, 26, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(56,189,248,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
          {/* Logo */}
          <Link to="/" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            fontWeight: 600,
            color: '#38bdf8',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            bhagya.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex" style={{ gap: '2rem' }}>
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  color: isActive(to) ? '#38bdf8' : '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  transition: 'color 0.15s ease',
                  borderBottom: isActive(to) ? '1px solid #38bdf8' : '1px solid transparent',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => { if (!isActive(to)) e.target.style.color = '#e2e8f0'; }}
                onMouseLeave={e => { if (!isActive(to)) e.target.style.color = '#94a3b8'; }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            borderTop: '1px solid rgba(56,189,248,0.08)',
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}>
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                style={{
                  color: isActive(to) ? '#38bdf8' : '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '0.5rem 0',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;