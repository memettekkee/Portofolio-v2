import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    institution: 'Universitas Islam Negeri Sunan Kalijaga',
    degree: 'Bachelor of Informatics',
    detail: 'GPA 3.68 / 4.00 — Cum Laude',
    period: 'Sep 2021 – Jun 2025',
    icon: '🎓',
    highlight: true,
  },
  {
    institution: 'Bangkit Academy',
    degree: 'Mobile Developer Cohort',
    detail: 'Supported by Google · Tokopedia · Gojek · Traveloka',
    period: 'Feb 2024 – Jul 2024',
    icon: '📱',
    highlight: false,
  },
  {
    institution: 'Bangkit Academy',
    degree: 'Cloud Computing Cohort',
    detail: 'Supported by Google · Tokopedia · Gojek · Traveloka',
    period: 'Sep 2024 – Jan 2025',
    icon: '☁️',
    highlight: false,
  },
]

function EduCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: '#0e1420',
        border: '1px solid rgba(255,255,255,0.07)',
        borderLeft: item.highlight ? '3px solid #3b82f6' : '3px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '1.5rem 1.75rem',
        display: 'flex',
        gap: '1.25rem',
        alignItems: 'flex-start',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      <span style={{ fontSize: '1.75rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f4ff' }}>{item.institution}</h3>
            <p style={{ fontSize: '0.95rem', color: '#06b6d4', marginTop: '4px', fontWeight: 600 }}>{item.degree}</p>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#7a8aaa', whiteSpace: 'nowrap' }}>
            {item.period}
          </span>
        </div>
        <p style={{ fontSize: '0.88rem', color: '#7a8aaa', marginTop: '8px', lineHeight: 1.6 }}>{item.detail}</p>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" style={{ padding: '7rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p className="section-label">// 05. education</p>
        <h2 className="section-heading">Education & Training</h2>
        <div style={{ width: '48px', height: '3px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)', borderRadius: '2px' }} />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {education.map((item, i) => (
          <EduCard key={`${item.institution}-${i}`} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
