import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
  { icon: '🏢', label: 'Current Company', value: 'PT Bank Negara Indonesia Tbk' },
  { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia' },
  { icon: '🎓', label: 'Education', value: 'S1 Informatika — Cum Laude, GPA 3.68' },
  { icon: '⚡', label: 'Specialization', value: 'Full-stack Developer · AI Agent/Automation' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// 01. about</p>
        <h2 className="section-heading">About Me</h2>
        <div style={{ width: '48px', height: '3px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)', borderRadius: '2px', marginBottom: '2.5rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left: bio */}
          <div>
            <p style={{ fontSize: '1.1rem', color: '#c4cfe8', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Experienced in large-scale system development, data processing, and data integration.
              Focused on delivering data-driven solutions and automating manual processes.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#7a8aaa', lineHeight: 1.85 }}>
              Strong analytical skills with a track record of cross-team coordination and fast delivery —
              from health information systems to banking backoffice platforms.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:muhammadahjahh@gmail.com" style={{
                padding: '0.7rem 1.5rem',
                background: '#3b82f6',
                color: '#fff',
                borderRadius: '7px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'background 0.2s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#2563eb')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3b82f6')}
              >
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/muhammad-met/" target="_blank" rel="noopener noreferrer" style={{
                padding: '0.7rem 1.5rem',
                background: 'transparent',
                color: '#93c5fd',
                border: '1px solid rgba(59,130,246,0.35)',
                borderRadius: '7px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)')}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: '#0e1420',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{h.icon}</span>
                <div>
                  <p style={{ fontSize: '0.72rem', color: '#7a8aaa', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>{h.label}</p>
                  <p style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>{h.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 700px) {
          #about > div > div > div:last-child { grid-column: 1; }
          #about > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
