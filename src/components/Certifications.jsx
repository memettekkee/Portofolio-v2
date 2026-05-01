import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    title: 'Oracle Academy: Database Design & Programming with SQL',
    year: '2023',
    type: 'cert',
    issuer: 'Oracle Academy',
  },
  {
    title: 'Kaltim Tuntas Scholarship',
    year: '2023–2025',
    type: 'award',
    issuer: 'Kalimantan Timur Governor',
  },
  {
    title: 'BUMA Workers Children Achievement Scholarship',
    year: '2024',
    type: 'award',
    issuer: 'PT Bukit Makmur Mandiri Utama',
  },
  {
    title: '2nd Place — Internal Coding Challenge',
    year: '2025',
    type: 'trophy',
    issuer: 'PT Medika Digital Nusantara',
  },
]

const typeConfig = {
  cert:   { icon: '📜', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)',  label: 'Certificate' },
  award:  { icon: '🏅', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', label: 'Scholarship' },
  trophy: { icon: '🏆', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)',  border: 'rgba(6,182,212,0.25)',  label: 'Achievement' },
}

function CertItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const cfg = typeConfig[item.type]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '1.25rem 1.5rem',
        background: '#0e1420',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = cfg.border)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      {/* Icon badge */}
      <div style={{
        width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
        background: cfg.bg, border: `1px solid ${cfg.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.3rem',
      }}>
        {cfg.icon}
      </div>

      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '1rem', color: '#f0f4ff', fontWeight: 600, lineHeight: 1.4, marginBottom: '4px' }}>{item.title}</p>
        <p style={{ fontSize: '0.82rem', color: '#7a8aaa' }}>{item.issuer}</p>
      </div>

      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <span style={{
          display: 'block',
          padding: '3px 10px',
          background: cfg.bg, border: `1px solid ${cfg.border}`,
          borderRadius: '20px',
          fontSize: '0.72rem', color: cfg.color,
          fontFamily: "'JetBrains Mono', monospace",
          marginBottom: '4px',
        }}>{cfg.label}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#7a8aaa' }}>{item.year}</span>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" style={{ padding: '7rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p className="section-label">// 06. certifications & achievements</p>
        <h2 className="section-heading">Certs & Awards</h2>
        <div style={{ width: '48px', height: '3px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)', borderRadius: '2px' }} />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {items.map((item, i) => (
          <CertItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
