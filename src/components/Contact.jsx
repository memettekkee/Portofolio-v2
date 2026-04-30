import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  {
    label: 'Email',
    value: 'muhammadahjahh@gmail.com',
    href: 'mailto:muhammadahjahh@gmail.com',
    color: '#3b82f6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+62 811 590 7100',
    href: 'tel:+628115907100',
    color: '#06b6d4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-met',
    href: 'https://www.linkedin.com/in/muhammad-met/',
    color: '#8b5cf6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

function ContactItem({ c, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={c.href}
      target={c.label === 'LinkedIn' ? '_blank' : undefined}
      rel={c.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '1.25rem 1.5rem',
        background: '#0e1420',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px',
        textDecoration: 'none',
        color: '#c4cfe8',
        transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${c.color}55`
        e.currentTarget.style.background = `${c.color}08`
        e.currentTarget.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.background = '#0e1420'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      <div style={{
        width: '46px', height: '46px', borderRadius: '10px', flexShrink: 0,
        background: `${c.color}15`, border: `1px solid ${c.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: c.color,
      }}>
        {c.icon}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#7a8aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{c.label}</p>
        <p style={{ fontSize: '1rem', color: '#f0f4ff', fontWeight: 500 }}>{c.value}</p>
      </div>
      <svg style={{ color: '#3a4a6a', flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </motion.a>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" style={{ padding: '7rem 2rem 9rem', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p className="section-label">// 06. contact</p>
        <h2 className="section-heading">Get in Touch</h2>
        <div style={{ width: '48px', height: '3px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)', borderRadius: '2px', marginBottom: '1rem' }} />
        <p className="section-subheading">
          Open to new roles, freelance projects, and interesting collaborations.
          Drop a message — I'll get back to you.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {contacts.map((c, i) => (
          <ContactItem key={c.label} c={c} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.45, duration: 0.5 }}
        style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: '14px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.1rem', color: '#c4cfe8', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Prefer a direct line? Send an email and I'll respond within 24 hours.
        </p>
        <a href="mailto:muhammadahjahh@gmail.com" style={{
          display: 'inline-block',
          padding: '0.9rem 2.5rem',
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: 700,
          fontFamily: "'Outfit', sans-serif",
          transition: 'opacity 0.2s, transform 0.15s',
          letterSpacing: '0.01em',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Send Email →
        </a>
      </motion.div>

      <p style={{
        textAlign: 'center', marginTop: '5rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.75rem', color: '#2a3a5a', letterSpacing: '0.06em',
      }}>
        Built with React · Three.js · Framer Motion · Tailwind CSS
      </p>
    </section>
  )
}
