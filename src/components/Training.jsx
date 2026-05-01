import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import imgResQFood1 from '../assets/ResQFood-1.jpeg'
import imgResQFood2 from '../assets/ResQFood-2.jpeg'
import imgDataAnalyst from '../assets/Data-Analyst.jpeg'
import imgZHealth from '../assets/Z-Health.jpeg'

const trainings = [
  {
    provider: 'Bangkit Academy',
    providerSub: 'led by Google, Tokopedia, Gojek & Traveloka',
    track: 'Mobile Development',
    period: 'Feb 2024 – Jul 2024',
    color: '#3b82f6',
    project: {
      name: 'ResQFood',
      subtitle: 'Food waste management mobile app',
      description:
        'Helps users manage food waste by turning surplus food into something valuable — either by selling it or reprocessing it into new products. Built as a capstone project for Bangkit Academy.',
      stack: ['Kotlin', 'Android Studio'],
      images: [imgResQFood1, imgResQFood2],
    },
  },
  {
    provider: 'Bangkit Academy',
    providerSub: 'led by Google, Tokopedia, Gojek & Traveloka',
    track: 'Cloud Computing',
    period: 'Sep 2024 – Jan 2025',
    color: '#06b6d4',
    project: {
      name: 'Z-Health',
      subtitle: 'Mood tracker, online diary & activity recommender',
      description:
        'A mental wellness app that lets users log their mood and write diary entries, then recommends activities tailored to their current emotional state. Backend deployed on Google Cloud Run with Firestore as the database.',
      stack: ['Express.js', 'Firestore', 'Google Cloud Platform', 'Cloud Run'],
      images: [imgZHealth],
    },
  },
  {
    provider: 'Dicoding Academy',
    providerSub: 'Certified Learning Platform',
    track: 'Data Analyst',
    period: '2024',
    color: '#06b6d4',
    project: {
      name: 'E-Commerce RFM Analysis',
      subtitle: 'Customer segmentation using RFM methodology',
      description:
        'Built a full RFM (Recency, Frequency, Monetary) analysis pipeline on dummy e-commerce data. Segmented customers into actionable groups and visualized insights through an interactive dashboard.',
      stack: ['Python', 'Pandas', 'Matplotlib', 'Supabase', 'Metabase'],
      images: [imgDataAnalyst],
    },
  },
]

function Badge({ label, color }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      background: `${color}12`,
      border: `1px solid ${color}30`,
      borderRadius: '5px',
      fontSize: '0.78rem',
      color: '#93c5fd',
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {label}
    </span>
  )
}

function ImageGallery({ images, name }) {
  const isSingle = images.length === 1

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isSingle ? '1fr' : '1fr 1fr',
      gap: '8px',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: '#060a10',
      overflow: 'hidden',
    }}>
      {images.map((src, i) => (
        <div key={i} style={{ height: isSingle ? '220px' : '180px', overflow: 'hidden' }}>
          <img
            src={src}
            alt={`${name} screenshot ${i + 1}`}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              display: 'block',
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      ))}
    </div>
  )
}

function TrainingCard({ training, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      style={{
        background: '#0e1420',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: `3px solid ${training.color}`,
        borderRadius: '14px',
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${training.color}55`; e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Provider header */}
      <div style={{
        padding: '1.5rem 1.75rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div>
          <p style={{
            fontSize: '0.72rem',
            fontFamily: "'JetBrains Mono', monospace",
            color: training.color,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '4px',
          }}>
            {training.provider}
          </p>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '3px' }}>
            {training.track}
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#7a8aaa' }}>{training.providerSub}</p>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem',
          color: '#7a8aaa',
          whiteSpace: 'nowrap',
          marginTop: '4px',
        }}>
          {training.period}
        </span>
      </div>

      {/* Screenshots */}
      <ImageGallery images={training.project.images} name={training.project.name} />

      {/* Project content */}
      <div style={{ padding: '1.5rem 1.75rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '4px' }}>
            {training.project.name}
          </h4>
          <p style={{ fontSize: '0.85rem', color: training.color, fontWeight: 500 }}>
            {training.project.subtitle}
          </p>
        </div>

        <p style={{
          fontSize: '0.95rem',
          color: '#c4cfe8',
          lineHeight: 1.8,
          marginBottom: '1.25rem',
        }}>
          {training.project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {training.project.stack.map((s) => (
            <Badge key={s} label={s} color={training.color} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Training() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="training" style={{ padding: '7rem 2rem', maxWidth: '1060px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p className="section-label">// 03. training</p>
        <h2 className="section-heading">Training Experience</h2>
        <div style={{
          width: '48px', height: '3px',
          background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
          borderRadius: '2px', marginBottom: '0.75rem',
        }} />
        <p className="section-subheading">
          Hands-on training programs with real project deliverables.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '1.5rem',
      }}>
        {trainings.map((t, i) => (
          <TrainingCard key={t.provider + t.track} training={t} index={i} />
        ))}
      </div>
    </section>
  )
}
