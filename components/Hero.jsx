'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Beams = dynamic(() => import('./Beams'), { ssr: false })

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#000',
    }}>
      {/* Beams background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.55 }}>
        <Beams
          beamWidth={1.8}
          beamHeight={18}
          beamNumber={10}
          lightColor="#ffffff"
          speed={1.4}
          noiseIntensity={1.5}
          scale={0.18}
          rotation={0}
        />
      </div>

      {/* Gradient fade bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '300px', zIndex: 1,
        background: 'linear-gradient(to bottom, transparent, #000)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1200px', margin: '0 auto',
        padding: '100px 24px 40px',
        width: '100%',
      }}>
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          marginBottom: '24px',
        }}>
          <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
          }}>
            Strategic Semiconductor Sourcing & B2B Matchmaking
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 7vw, 96px)',
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          color: '#fff',
          maxWidth: '900px',
          marginBottom: '24px',
        }}>
          Your bridge to the global semiconductor supply chain.
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px', lineHeight: 1.75,
          color: 'rgba(255,255,255,0.4)',
          maxWidth: '560px',
          marginBottom: '32px',
        }}>
          SSG connects qualified buyers, OEMs, and distributors with trusted manufacturers, 
          materials suppliers, and global MNCs across the semiconductor value chain.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          <a href="#contact" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#000', background: '#fff',
            padding: '14px 32px', textDecoration: 'none',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.85)'}
          onMouseLeave={e => e.target.style.background = '#fff'}
          >
            Book a Consultation
          </a>
          <a href="#services" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '14px 32px', textDecoration: 'none',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.color = '#fff'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            Explore Services
          </a>
        </motion.div>

        {/* 3 stat cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
          style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'rgba(255,255,255,0.07)',
          maxWidth: '740px',
        }}>
          {[
            { title: 'B2B Matchmaking', desc: 'Buyer-to-supplier and OEM connection support' },
            { title: 'Global Reach', desc: 'Asia, Europe & North America coverage' },
            { title: 'Strategic Advisory', desc: 'Sourcing, qualification & relationship building' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(0,0,0,0.6)',
              padding: '24px 20px',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '17px', fontWeight: 500,
                color: '#fff', marginBottom: '8px',
              }}>{s.title}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px', color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.6,
              }}>{s.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
