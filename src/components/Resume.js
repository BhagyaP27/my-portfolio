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

  const certifications = [
    {
      title: "Data Science & Machine Learning: Making Data-Driven Decisions",
      issuer: "MIT Schwarzman College of Computing — MIT IDSS",
      date: "June 2025",
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "Go", "SQL", "Java", "Racket"],
    "Frameworks & ML": ["FastAPI", "React", "Flask", "PyTorch", "sentence-transformers", "LangChain", "FAISS", "T5", "LSTM", "Ollama"],
    "DevOps & Cloud": ["Docker", "GitHub Actions", "Terraform", "AWS ECS Fargate", "AWS S3", "AWS CloudFront", "AWS EFS", "AWS ECR"],
    "Databases": ["SQLite", "PostgreSQL", "FAISS (vector store)"],
  };

  const projects = [
    {
      title: "RAG Document Assistant",
      period: "2025",
      description: "Architected a full-stack RAG pipeline for document-intelligence search, ingesting PDF, DOCX, TXT, and Markdown. Built semantic search with FAISS and sentence-transformers, chunked via LangChain's RecursiveCharacterTextSplitter, and streamed LLM responses token-by-token from FastAPI to React through a provider-agnostic layer (Ollama, OpenAI, Anthropic). Deployed to AWS ECS Fargate with EFS-backed vector persistence and S3+CloudFront frontend, provisioned via Terraform and GitHub Actions CI/CD with OIDC.",
      technologies: ["Python", "FastAPI", "React", "FAISS", "Docker", "AWS", "Terraform"]
    },
    {
      title: "ML-Powered Bash Agent",
      period: "2024 – 2025",
      description: "Built a natural-language-to-bash translator using a hybrid LSTM seq2seq + T5 transformer with custom attention and entity extraction. Designed a confidence-gated inference pipeline that falls back from LSTM to T5 below a configurable threshold, improving reliability without retraining either model. Exposed via a FastAPI inference endpoint with a React UI and an automated GitHub Actions CI/CD pipeline.",
      technologies: ["Python", "PyTorch", "T5", "LSTM", "FastAPI", "React"]
    },
    {
      title: "MyTunes+ Music Database",
      period: "2024",
      description: "Designed a 10-table, 3NF-normalized schema for a music collection app seeded with 14 artists, 27 albums, and 172 tracks, derived through ER modeling, FD analysis, and minimal cover reduction. Built CRUD and multi-table JOIN queries in Flask, and evaluated collaborative vs. content-based recommendation approaches against the dataset.",
      technologies: ["Python", "Flask", "SQLite", "HTML/CSS"]
    }
  ];

  const experience = [
    {
      title: "Grocery Associate",
      company: "Food Basics",
      location: "Pembroke, ON",
      period: "Summer 2023",
      responsibilities: [
        "Managed inventory rotation, shelf stocking, and product merchandising while supporting daily team operations in a high-volume environment"
      ]
    },
    {
      title: "Team Member",
      company: "Subway",
      location: "Pembroke, ON",
      period: "Summers 2019 & 2021",
      responsibilities: [
        "Processed customer transactions and prepared orders to food safety standards; cross-trained across multiple stations across two seasons"
      ]
    },
    {
      title: "Community Volunteer",
      company: "Ottawa Public Library",
      location: "Pembroke, ON",
      period: "2019",
      responsibilities: [
        "Coordinated event setup and logistics for community programming; engaged patrons to encourage participation and foster an inclusive library environment"
      ]
    }
  ];

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

        {/* Certifications */}
        <section style={{ marginBottom: '3rem' }}>
          {sectionTitle('Certifications')}
          {certifications.map((cert, i) => (
            <div key={i} className="card-glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.975rem', marginBottom: '0.25rem' }}>{cert.title}</h3>
                  <p style={{ color: '#38bdf8', fontSize: '0.875rem', fontFamily: "'JetBrains Mono', monospace" }}>{cert.issuer}</p>
                </div>
                <p style={{ color: '#475569', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{cert.date}</p>
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

        {/* Projects */}
        <section style={{ marginBottom: '3rem' }}>
          {sectionTitle('Projects')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="card-glass" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.975rem' }}>{p.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{p.period}</p>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '0.85rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.technologies.map((t, j) => (
                    <span key={j} className="tag-pill">{t}</span>
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

        {/* Download */}
        <div style={{ textAlign: 'center' }}>
          <a href="/resume/Resume_V4.pdf" target="_blank" rel="noopener noreferrer" style={{
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