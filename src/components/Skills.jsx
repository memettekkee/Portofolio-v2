import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    skills: [
      'JavaScript', 'TypeScript', 'PHP', 'Java', 'Golang', 'Python', 'Kotlin',
      'React.js', 'Next.js', 'Angular.js', 'Laravel', 'Spring Boot',
      'Express.js', 'Adonis.js', 'Svelte', 'Fiber',
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    skills: ['Google Cloud Platform', 'Kubernetes', 'Docker', 'Linux', 'Git', 'Firebase'],
  },
  {
    category: 'Data & AI',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    skills: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis', 'LangChain', 'N8N', 'Agentic AI', 'Tableau'],
  },
  {
    category: 'Tools & Others',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    skills: ['Figma', 'Tailwind CSS', 'Sass / SCSS', 'Websocket', 'Prisma / JPA'],
  },
]

function SkillPill({ label, color, bg, border }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 14px',
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: '6px',
      fontSize: '0.85rem',
      color: '#c4cfe8',
      fontFamily: "'JetBrains Mono', monospace",
      transition: 'background 0.2s, color 0.2s',
      cursor: 'default',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.background = `${color}22`; e.currentTarget.style.color = '#f0f4ff' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = bg; e.currentTarget.style.color = '#c4cfe8' }}
    >
      {label}
    </span>
  )
}

function SkillGroup({ group, index }) {
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
        borderTop: `3px solid ${group.color}`,
        borderRadius: '12px',
        padding: '1.75rem',
      }}
    >
      <h3 style={{
        fontSize: '0.88rem',
        fontWeight: 700,
        color: group.color,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: '1.25rem',
      }}>
        {group.category}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {group.skills.map((s) => (
          <SkillPill key={s} label={s} color={group.color} bg={group.bg} border={group.border} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ padding: '7rem 2rem', maxWidth: '1060px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p className="section-label">// 04. skills</p>
        <h2 className="section-heading">Tech Stack</h2>
        <div style={{ width: '48px', height: '3px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)', borderRadius: '2px', marginBottom: '0.75rem' }} />
        <p className="section-subheading">Full-stack across web, backend, cloud, and AI tooling.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {skillGroups.map((g, i) => (
          <SkillGroup key={g.category} group={g} index={i} />
        ))}
      </div>
    </section>
  )
}
