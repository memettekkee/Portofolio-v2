import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0 3rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,11,18,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <a href="#hero" style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '1rem',
        fontWeight: 500,
        color: '#f0f4ff',
        textDecoration: 'none',
        letterSpacing: '0.04em',
      }}>
        <span style={{ color: '#3b82f6' }}>{'<'}</span>
        Muhammad
        <span style={{ color: '#3b82f6' }}>{' />'}</span>
      </a>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className="nav-desktop">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{
              color: '#7a8aaa',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#7a8aaa')}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:muhammadahjahh@gmail.com"
        className="nav-desktop"
        style={{
          padding: '0.5rem 1.25rem',
          background: 'rgba(59,130,246,0.12)',
          border: '1px solid rgba(59,130,246,0.35)',
          borderRadius: '6px',
          color: '#93c5fd',
          textDecoration: 'none',
          fontSize: '0.88rem',
          fontWeight: 600,
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(59,130,246,0.22)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(59,130,246,0.12)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)' }}
      >
        Hire Me
      </a>

      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#f0f4ff', padding: '4px' }}
        className="nav-hamburger"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {menuOpen ? (
            <><line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
          ) : (
            <><line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
          )}
        </svg>
      </button>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          style={{ position: 'absolute', top: '68px', left: 0, right: 0, background: 'rgba(8,11,18,0.98)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 2rem' }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ color: '#c4cfe8', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500 }}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
