import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function CellOutput({ outputs }) {
  if (!outputs || outputs.length === 0) return null;

  return (
    <div style={{ borderTop: '1px solid rgba(56,189,248,0.08)', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
      {outputs.map((output, i) => {
        if (output.output_type === 'stream') {
          const text = Array.isArray(output.text) ? output.text.join('') : (output.text || '');
          if (!text) return null;
          return (
            <pre key={i} style={{
              margin: 0, color: '#94a3b8', fontSize: '0.78rem',
              fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap', wordBreak: 'break-word',
            }}>{text}</pre>
          );
        }

        if (output.output_type === 'execute_result' || output.output_type === 'display_data') {
          const data = output.data || {};
          if (data['image/png']) {
            const src = data['image/png'];
            const b64 = typeof src === 'string' ? src : src.join('');
            return (
              <img key={i} src={`data:image/png;base64,${b64}`} alt="cell output"
                style={{ maxWidth: '100%', borderRadius: '6px', marginTop: '0.5rem', display: 'block' }} />
            );
          }
          if (data['text/plain']) {
            const text = Array.isArray(data['text/plain']) ? data['text/plain'].join('') : data['text/plain'];
            return (
              <pre key={i} style={{
                margin: 0, color: '#94a3b8', fontSize: '0.78rem',
                fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap',
              }}>{text}</pre>
            );
          }
        }

        if (output.output_type === 'error') {
          const tb = (output.traceback || []).join('\n').replace(/\x1b\[[0-9;]*m/g, '');
          return (
            <pre key={i} style={{
              margin: 0, color: '#f87171', fontSize: '0.75rem',
              fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap',
            }}>{tb}</pre>
          );
        }
        return null;
      })}
    </div>
  );
}

function NotebookCell({ cell }) {
  const [collapsed, setCollapsed] = useState(false);
  const source = Array.isArray(cell.source) ? cell.source.join('') : (cell.source || '');

  if (cell.cell_type === 'markdown') {
    return (
      <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(56,189,248,0.06)' }}>
        <ReactMarkdown
          components={{
            h1: ({ ...p }) => <h1 style={{ color: '#e2e8f0', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }} {...p} />,
            h2: ({ ...p }) => <h2 style={{ color: '#e2e8f0', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem' }} {...p} />,
            h3: ({ ...p }) => <h3 style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 600, marginBottom: '0.35rem' }} {...p} />,
            p: ({ ...p }) => <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '0.75rem', fontSize: '0.875rem' }} {...p} />,
            ul: ({ ...p }) => <ul style={{ paddingLeft: '1.5rem', color: '#94a3b8', marginBottom: '0.75rem' }} {...p} />,
            ol: ({ ...p }) => <ol style={{ paddingLeft: '1.5rem', color: '#94a3b8', marginBottom: '0.75rem' }} {...p} />,
            li: ({ ...p }) => <li style={{ marginBottom: '0.3rem', fontSize: '0.875rem' }} {...p} />,
            strong: ({ ...p }) => <strong style={{ color: '#e2e8f0' }} {...p} />,
            code: ({ ...p }) => (
              <code style={{
                background: '#1e293b', color: '#7dd3fc', padding: '1px 5px',
                borderRadius: '4px', fontSize: '0.82em', fontFamily: "'JetBrains Mono', monospace",
              }} {...p} />
            ),
            blockquote: ({ ...p }) => (
              <blockquote style={{
                borderLeft: '3px solid #38bdf8', paddingLeft: '1rem',
                color: '#64748b', margin: '0.75rem 0',
              }} {...p} />
            ),
            table: ({ ...p }) => (
              <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                <table style={{ borderCollapse: 'collapse', fontSize: '0.8rem', width: '100%' }} {...p} />
              </div>
            ),
            th: ({ ...p }) => <th style={{ color: '#38bdf8', padding: '0.4rem 0.75rem', borderBottom: '1px solid rgba(56,189,248,0.2)', textAlign: 'left', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.05em' }} {...p} />,
            td: ({ ...p }) => <td style={{ color: '#94a3b8', padding: '0.35rem 0.75rem', borderBottom: '1px solid rgba(56,189,248,0.06)' }} {...p} />,
          }}
        >
          {source}
        </ReactMarkdown>
      </div>
    );
  }

  if (cell.cell_type === 'code') {
    const hasOutput = cell.outputs && cell.outputs.length > 0;
    const execCount = cell.execution_count;

    return (
      <div style={{ borderBottom: '1px solid rgba(56,189,248,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.4rem 1rem 0', gap: '0.6rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#334155', minWidth: '3.5rem' }}>
            In [{execCount ?? ' '}]
          </span>
          {hasOutput && (
            <button onClick={() => setCollapsed(c => !c)} style={{
              background: 'none', border: 'none', color: '#475569', cursor: 'pointer',
              fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace", padding: 0, marginLeft: 'auto',
            }}>
              {collapsed ? '▶ show output' : '▼ hide output'}
            </button>
          )}
        </div>

        <pre style={{
          margin: '0.3rem 1rem 0', padding: '0.75rem 1rem',
          background: '#0a0f1e', borderRadius: '6px',
          border: '1px solid rgba(56,189,248,0.08)', overflowX: 'auto',
          fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace",
          color: '#7dd3fc', lineHeight: 1.6, whiteSpace: 'pre',
        }}>
          <code>{source}</code>
        </pre>

        {hasOutput && !collapsed && (
          <div style={{
            margin: '0.35rem 1rem 0.75rem', padding: '0.6rem 1rem',
            background: 'rgba(0,0,0,0.2)', borderRadius: '6px',
            border: '1px solid rgba(56,189,248,0.06)',
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem',
              color: '#334155', display: 'block', marginBottom: '0.4rem',
            }}>
              Out [{execCount ?? ' '}]
            </span>
            <CellOutput outputs={cell.outputs} />
          </div>
        )}
      </div>
    );
  }

  return null;
}

// LoadingState component
function NotebookSkeleton() {
  return (
    <div style={{ background: '#0d1221', border: '1px solid rgba(56,189,248,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
      {[...Array(4)].map((_, i) => (
        <div key={i} style={{
          padding: '1rem 1.25rem', borderBottom: '1px solid rgba(56,189,248,0.06)',
          background: i % 2 === 0 ? 'transparent' : '#0a0f1e',
        }}>
          <div style={{
            height: i % 2 === 0 ? '12px' : '48px', borderRadius: '4px',
            background: 'rgba(56,189,248,0.05)',
            width: i % 2 === 0 ? `${60 + i * 10}%` : '100%',
          }} />
        </div>
      ))}
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <span style={{ color: '#334155', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem' }}>
          Loading notebook...
        </span>
      </div>
    </div>
  );
}

/**
 * NotebookViewer
 *
 * Props (pick one):
 *   notebookUrl  — path to a .ipynb in public/ e.g. "/notebooks/foo.ipynb"
 *   notebookJson — already-parsed notebook object
 *   (neither)    — shows drag-and-drop upload zone
 */
function NotebookViewer({ notebookUrl, notebookJson: propJson }) {
  const [notebook, setNotebook] = useState(propJson || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [manualMode, setManualMode] = useState(false); // user wants to upload instead

  // Fetch from URL if provided
  useEffect(() => {
    if (!notebookUrl || propJson || manualMode) return;
    setLoading(true);
    setError(null);
    fetch(notebookUrl)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        setNotebook(data);
        setLoading(false);
      })
      .catch(err => {
        setError(`Could not load notebook: ${err.message}`);
        setLoading(false);
      });
  }, [notebookUrl, propJson, manualMode]);

  const loadFile = (file) => {
    if (!file) return;
    if (!file.name.endsWith('.ipynb')) { setError('Please upload a .ipynb file.'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        setNotebook(JSON.parse(e.target.result));
        setError(null);
      } catch {
        setError('Could not parse notebook — make sure it is valid JSON.');
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e) => { e.preventDefault(); setDragging(false); loadFile(e.dataTransfer.files[0]); };

  if (loading) return <NotebookSkeleton />;

  if (!notebook) {
    return (
      <div>
        {error && (
          <p style={{ color: '#f87171', fontSize: '0.8rem', marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
            ⚠ {error}
          </p>
        )}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${dragging ? '#38bdf8' : 'rgba(56,189,248,0.25)'}`,
            borderRadius: '10px', padding: '2.5rem', textAlign: 'center',
            cursor: 'pointer', background: dragging ? 'rgba(56,189,248,0.05)' : 'transparent',
            transition: 'all 0.15s',
          }}
          onClick={() => document.getElementById('nb-file-input').click()}
        >
          <p style={{ color: '#38bdf8', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            📓 Drop your .ipynb file here
          </p>
          <p style={{ color: '#475569', fontSize: '0.75rem' }}>or click to browse</p>
          <input id="nb-file-input" type="file" accept=".ipynb" style={{ display: 'none' }}
            onChange={e => loadFile(e.target.files[0])} />
        </div>
      </div>
    );
  }

  const cells = notebook.cells || [];
  const kernelName = notebook.metadata?.kernelspec?.display_name || 'Python 3';
  const nbformat = `${notebook.nbformat}.${notebook.nbformat_minor}`;
  const codeCells = cells.filter(c => c.cell_type === 'code').length;
  const mdCells = cells.filter(c => c.cell_type === 'markdown').length;

  return (
    <div>
      {/* Meta bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.6rem 1rem', background: '#0a0f1e',
        borderRadius: '8px 8px 0 0', borderBottom: '1px solid rgba(56,189,248,0.1)',
        flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1rem' }}>📓</span>
          <span style={{ color: '#7dd3fc', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem' }}>
            {kernelName}
          </span>
          <span style={{ color: '#334155', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>
            nbformat {nbformat}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ color: '#334155', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>
            {codeCells} code · {mdCells} markdown
          </span>
          {/* Allow switching to manual upload */}
          {notebookUrl && (
            <button onClick={() => { setNotebook(null); setManualMode(true); }} style={{
              background: 'none', border: 'none', color: '#475569',
              cursor: 'pointer', fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace", padding: 0,
            }}>
              upload different ↑
            </button>
          )}
        </div>
      </div>

      {/* Cells */}
      <div style={{
        background: '#0d1221', border: '1px solid rgba(56,189,248,0.1)',
        borderTop: 'none', borderRadius: '0 0 8px 8px', overflow: 'hidden',
      }}>
        {cells.map((cell, i) => (
          <NotebookCell key={i} cell={cell} />
        ))}
      </div>
    </div>
  );
}

export default NotebookViewer;