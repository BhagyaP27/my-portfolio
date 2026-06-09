import React from 'react';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Engineering — Software Engineering (Co-op)",
      school: "Carleton University",
      location: "Ottawa, ON",
      year: "Sept. 2023 – Apr. 2028 (Expected)",
    }
  ];

  const experience = [
    {
      title: "Grocery Worker",
      company: "Food Basics",
      location: "Pembroke, ON",
      period: "Mar. 2023 – July 2023",
      responsibilities: [
        "Organized products, handled multiple departments, and ensured scheduled tasks were completed",
        "Assisted customers by answering questions and providing support"
      ]
    },
    {
      title: "Sandwich Artist",
      company: "Subway",
      location: "Pembroke, ON",
      period: "June 2019 – Jan 2020",
      responsibilities: [
        "Prepared sandwiches as per order and handled cash transactions",
        "Reviewed and organized food material stock"
      ]
    },
    {
      title: "Library Staff",
      company: "Pembroke Public Library",
      location: "Pembroke, ON",
      period: "June 2019 – Aug 2019",
      responsibilities: [
        "Organized books in the database to improve accessibility",
        "Assisted in community events and helped visitors find resources"
      ]
    }
  ];

  const projects = [
    {
      title: "Customer Personality Segmentation",
      description: "End-to-end customer segmentation analysis to group customers based on purchasing behavior and demographics.",
      technologies: ["Python", "pandas", "NumPy", "Scikit-learn", "K-Means", "PCA"]
    },
    {
      title: "Potential Customers Prediction",
      description: "ML classification model to predict potential customers from behavioral and demographic data.",
      technologies: ["Python", "Logistic Regression", "Decision Trees", "Random Forests", "Gradient Boosting"]
    },
    {
      title: "Large Data Processing & Graphing",
      description: "Data processing tool using Python OOP principles; processed 500,230 row dataset and created graphs.",
      technologies: ["Python", "OOP", "Data Manipulation", "Graphing Libraries"]
    },
    {
      title: "Digital Resume Website",
      description: "Designed and built a basic resume website from scratch.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const skills = {
    "Languages": ["Python", "C", "C#", "Java", "JavaScript", "HTML", "CSS", "React"],
    "Data Science & ML": ["pandas", "NumPy", "Scikit-learn", "PyTorch", "K-Means", "PCA", "Logistic Regression", "Random Forests"],
    "Tools & Platforms": ["Git", "Unity", "Raspberry Pi", "Excel"],
    "Communication": ["Technical Presentations", "Team Collaboration", "English / Hindi / Gujarati", "Basic German"],
  };

  const sectionTitle = (label) => (
    <div style={{ marginBottom: '1.5rem' }}>
      <p className="section-label">{label}</p>
      <hr style={{ border: 'none', borderTop: '1px solid rgba(56,189,248,0.12)', marginTop: '0.5rem' }} />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#e2e8f0',
            letterSpacing: '-0.02em',
            marginBottom: '0.25rem',
          }}>
            Bhagya Patel
          </h1>
          <p style={{ color: '#38bdf8', fontSize: '0.95rem', fontFamily: "'JetBrains Mono', monospace", marginBottom: '1rem' }}>
            Software Engineering Student
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="mailto:bhagyapatel000@gmail.com" style={{ color: '#64748b', fontSize: '0.825rem', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}>
              bhagyapatel000@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/bhagya-patel05/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.825rem', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}>
              LinkedIn ↗
            </a>
            <a href="https://github.com/BhagyaP27" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.825rem', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Education */}
        <section style={{ marginBottom: '3rem' }}>
          {sectionTitle('Education')}
          {education.map((edu, i) => (
            <div key={i} className="card-glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.975rem', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                  <p style={{ color: '#38bdf8', fontSize: '0.875rem', fontFamily: "'JetBrains Mono', monospace" }}>{edu.school}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{edu.location}</p>
                  <p style={{ color: '#475569', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '3rem' }}>
          {sectionTitle('Skills')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat} className="card-glass" style={{ padding: '1.25rem' }}>
                <p style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {cat}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {list.map((s, i) => (
                    <span key={i} className="tag-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '3rem' }}>
          {sectionTitle('Work Experience')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experience.map((exp, i) => (
              <div key={i} className="card-glass" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.975rem', marginBottom: '0.2rem' }}>{exp.title}</h3>
                    <p style={{ color: '#38bdf8', fontSize: '0.825rem', fontFamily: "'JetBrains Mono', monospace" }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{exp.location}</p>
                    <p style={{ color: '#475569', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</p>
                  </div>
                </div>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '3rem' }}>
          {sectionTitle('Applied Projects')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="card-glass" style={{ padding: '1.25rem' }}>
                <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.825rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {p.technologies.map((t, j) => (
                    <span key={j} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download */}
        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#38bdf8',
            padding: '0.65rem 2rem',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            border: '1px solid rgba(56,189,248,0.35)',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.05em',
          }}>
            Download PDF Resume ↓
          </a>
        </div>

      </div>
    </div>
  );
}

export default Resume;