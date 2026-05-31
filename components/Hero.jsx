'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import MarqueeStrip from './MarqueeStrip'

const Hyperspeed = dynamic(() => import('./Hyperspeed'), { ssr: false })
const ScrambledText = dynamic(() => import('./ScrambledText'), { ssr: false })

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
      {/* Hyperspeed background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xffffff, 0xaaaaaa, 0xdddddd],
              rightCars: [0xffffff, 0x888888, 0xbbbbbb],
              sticks: 0xffffff,
            }
          }}
        />
      </div>

      {/* Gradient fade bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '300px', zIndex: 1,
        background: 'linear-gradient(to bottom, transparent, #000)',
        pointerEvents: 'none',
      }} />

      {/* Marquee Strip at the top */}
      <div style={{ position: 'absolute', top: '64px', left: 0, right: 0, zIndex: 3 }}>
        <MarqueeStrip />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 24px',
        marginTop: '15vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
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
          <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
          }}>
            Strategic Semiconductor Sourcing & B2B Matchmaking
          </span>
          <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <ScrambledText
            radius={90}
            duration={1.5}
            speed={0.3}
            scrambleChars=".:"
          >
            Sourcing silicon <br />
            at the speed of <br />
            innovation.
          </ScrambledText>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
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
          <a href="/overview" style={{
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
            Explore Overview
          </a>
        </motion.div>
      </div>
    </section>
  )
}
