import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { initParticleBackground } from '../three/ParticleBackground'
import myPhoto from '../assets/MyPhoto.jpeg'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const cleanup = initParticleBackground(canvasRef.current)
    return cleanup
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '0 2rem',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(8,11,18,0.25) 0%, rgba(8,11,18,0.82) 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '780px', width: '100%' }}>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.65, ease: 'easeOut' }}
          style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: '240px',
            height: '268px',
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1.5px solid rgba(59,130,246,0.45)',
            boxShadow: '0 0 0 5px rgba(59,130,246,0.07), 0 12px 50px rgba(59,130,246,0.2)',
            position: 'relative',
          }}>
            <img src={myPhoto} alt="Muhammad" style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top center', display: 'block',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
              background: 'linear-gradient(to bottom, transparent, rgba(8,11,18,0.5))',
              pointerEvents: 'none',
            }} />
          </div>
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.82rem',
            color: '#3b82f6',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Software Engineer &amp; AI Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.65 }}
          style={{
            fontSize: 'clamp(3.2rem, 9vw, 6rem)',
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            fontFamily: "'Outfit', sans-serif",
            color: '#f0f4ff',
          }}
        >
          Muhammad
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.55 }}
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: '#7a8aaa',
            maxWidth: '500px',
            margin: '0 auto 1.75rem',
            lineHeight: 1.75,
          }}
        >
          Building scalable systems. Automating the boring stuff. Shipping fast.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '3+', label: 'Companies' },
            { value: '5+', label: 'Projects Shipped' },
            { value: '3.68', label: 'GPA Cum Laude' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3b82f6', lineHeight: 1, fontFamily: "'Outfit', sans-serif" }}>{s.value}</p>
              <p style={{ fontSize: '0.78rem', color: '#7a8aaa', marginTop: '4px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button onClick={() => scrollTo('experience')} style={{
            padding: '0.85rem 2rem',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: "'Outfit', sans-serif",
            transition: 'background 0.2s, transform 0.15s',
            letterSpacing: '0.01em',
          }}
            onMouseEnter={(e) => { e.target.style.background = '#2563eb'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.target.style.background = '#3b82f6'; e.target.style.transform = 'translateY(0)' }}
          >
            View My Work
          </button>
          <button onClick={() => scrollTo('contact')} style={{
            padding: '0.85rem 2rem',
            background: 'transparent',
            color: '#c4cfe8',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: "'Outfit', sans-serif",
            transition: 'border-color 0.2s, transform 0.15s, color 0.2s',
          }}
            onMouseEnter={(e) => { e.target.style.borderColor = '#3b82f6'; e.target.style.color = '#f0f4ff'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.color = '#c4cfe8'; e.target.style.transform = 'translateY(0)' }}
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: '#3a4a6a', fontSize: '0.68rem',
          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.12em',
        }}
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, #3b82f6, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
