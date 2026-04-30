import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import imgMorhuman from '../assets/Morbis-Morhuman.jpeg'
import imgMorbis from '../assets/Morbis-SIMRS.jpeg'
import imgDigitalWorkspace from '../assets/MKI-Digital_Workspace.jpeg'
import imgSimapan from '../assets/MKI-SIMAPAN.jpeg'
import imgBNIDirect from '../assets/BNI-BNIDirect.jpeg'

import logoBNI from '../assets/BNI-Logo.jpeg'
import logoMKI from '../assets/MKI-Logo.jpeg'
import logoMorbis from '../assets/Morbis-Logo.jpeg'

const experiences = [
  {
    company: 'PT Bank Negara Indonesia Tbk',
    shortName: 'BNI',
    logo: logoBNI,
    role: 'Full-stack Developer',
    period: 'Jan 2026 – Present',
    location: 'Jakarta, Indonesia',
    current: true,
    projects: [
      {
        name: 'BNIDirect CXO',
        subtitle: 'Corporate banking backoffice — CXO module',
        bullets: [
          'Backoffice system for corporate and multinational clients',
          'AI-assisted development using Kiro.ai — 2–3× faster than estimated',
          'Cross-team collaboration with System Analysts, Scrum Masters, and stakeholders',
        ],
        stack: ['React.js', 'Tailwind CSS', 'Chakra UI'],
        image: imgBNIDirect,
      },
      {
        name: 'CIDM',
        subtitle: 'Corporate Identity & Data Management module',
        bullets: [
          'Identity and data management for BNIDirect corporate clients',
          'Built with enterprise Java stack, integrated with Oracle DB',
        ],
        stack: ['Java', 'Spring Boot', 'Oracle'],
        image: null,
      },
    ],
  },
  {
    company: 'PT Mediatama Kreasi Informatika',
    shortName: 'MKI',
    logo: logoMKI,
    role: 'Full-Stack Developer (PIC)',
    period: 'Aug 2025 – Jan 2026',
    location: 'Bandung, Indonesia',
    current: false,
    projects: [
      {
        name: 'Digital Workspace Portal',
        subtitle: 'Internal employee portal — Kementerian Investasi / BKPM',
        bullets: [
          'Portal system used by 1,000+ employees',
          'Led full-stack development as Person in Charge',
          'Stakeholder coordination and feature delivery aligned to business requirements',
        ],
        stack: ['Next.js', 'Adonis.js', 'PostgreSQL', 'Sass / SCSS'],
        image: imgDigitalWorkspace,
      },
      {
        name: 'SIMAPAN',
        subtitle: 'Sistem Manajemen Kearsipan — Digital archive management',
        bullets: [
          'Document archiving system for government records',
          'Golang microservice backend + Svelte frontend',
        ],
        stack: ['Golang (Fiber)', 'Svelte', 'PostgreSQL', 'Tailwind CSS'],
        image: imgSimapan,
      },
    ],
  },
  {
    company: 'PT Medika Digital Nusantara',
    shortName: 'MDN',
    logo: logoMorbis,
    role: 'Programmer',
    period: 'Feb 2025 – Aug 2025',
    location: 'Yogyakarta, Indonesia',
    current: false,
    projects: [
      {
        name: 'Morhuman',
        subtitle: 'HR management system for hospital staff',
        bullets: [
          'Covers attendance, payroll, and employee data management',
          'Containerized deployment with Docker',
        ],
        stack: ['Laravel', 'MySQL', 'Docker'],
        image: imgMorhuman,
      },
      {
        name: 'SIMRS Morbis',
        subtitle: 'Health Information System — 10,000+ patients, 10+ hospitals',
        bullets: [
          'Patient data management across 10+ partner hospitals',
          'Relational database with 100+ tables',
          'Data visualization dashboard for stakeholders',
        ],
        stack: ['PHP', 'jQuery', 'Oracle'],
        image: imgMorbis,
      },
    ],
  },
]

function Badge({ label }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      background: 'rgba(59,130,246,0.1)',
      border: '1px solid rgba(59,130,246,0.25)',
      borderRadius: '5px',
      fontSize: '0.78rem',
      color: '#93c5fd',
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {label}
    </span>
  )
}

function ProjectCard({ project, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        background: '#0e1420',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Screenshot */}
      {project.image ? (
        <div style={{ width: '100%', height: '200px', overflow: 'hidden', background: '#060a10', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <img src={project.image} alt={project.name} style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
            display: 'block', transition: 'transform 0.5s ease',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      ) : (
        <div style={{
          width: '100%', height: '90px', background: 'rgba(59,130,246,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#2a3a5a', letterSpacing: '0.1em' }}>
            no preview available
          </span>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '4px' }}>{project.name}</h4>
        <p style={{ fontSize: '0.85rem', color: '#7a8aaa', marginBottom: '1rem', lineHeight: 1.5 }}>{project.subtitle}</p>

        <ul style={{ paddingLeft: '1.1rem', marginBottom: '1.25rem', flex: 1 }}>
          {project.bullets.map((b, i) => (
            <li key={i} style={{ fontSize: '0.9rem', color: '#c4cfe8', lineHeight: 1.7, marginBottom: '5px' }}>{b}</li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {project.stack.map((s) => <Badge key={s} label={s} />)}
        </div>
      </div>
    </motion.div>
  )
}

function ExperienceBlock({ exp, blockIndex }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: blockIndex * 0.08 }}
      style={{ marginBottom: '4rem' }}
    >
      {/* Company header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        marginBottom: '1.75rem',
        padding: '1.25rem 1.5rem',
        background: '#0e1420',
        border: '1px solid rgba(255,255,255,0.07)',
        borderLeft: `3px solid ${exp.current ? '#3b82f6' : '#1e3a5f'}`,
        borderRadius: '10px',
      }}>
        {/* Logo */}
        <div style={{
          width: '52px', height: '52px', borderRadius: '10px', flexShrink: 0,
          background: '#fff',
          border: `1px solid ${exp.current ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.12)'}`,
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img
            src={exp.logo}
            alt={exp.shortName}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f0f4ff' }}>{exp.company}</h3>
              <p style={{ fontSize: '0.95rem', color: '#06b6d4', fontWeight: 500, marginTop: '3px' }}>{exp.role}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: '#7a8aaa' }}>{exp.period}</p>
              <p style={{ fontSize: '0.82rem', color: '#7a8aaa', marginTop: '3px' }}>{exp.location}</p>
              {exp.current && (
                <span style={{
                  display: 'inline-block', marginTop: '6px',
                  padding: '2px 10px',
                  background: 'rgba(59,130,246,0.15)',
                  border: '1px solid rgba(59,130,246,0.4)',
                  borderRadius: '20px',
                  fontSize: '0.72rem', color: '#93c5fd',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>● current</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
        paddingLeft: '0.5rem',
      }}>
        {exp.projects.map((project, pi) => (
          <ProjectCard key={project.name} project={project} delay={pi * 0.1} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" style={{ padding: '7rem 2rem', maxWidth: '1060px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p className="section-label">// 02. experience</p>
        <h2 className="section-heading">Work Experience</h2>
        <div style={{ width: '48px', height: '3px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)', borderRadius: '2px', marginBottom: '0.75rem' }} />
        <p className="section-subheading">3 companies · 5 projects shipped · Jakarta & Yogyakarta</p>
      </motion.div>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceBlock key={exp.company} exp={exp} blockIndex={i} />
        ))}
      </div>
    </section>
  )
}
