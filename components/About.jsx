'use client'
import { motion } from 'framer-motion'
import FallingText from './FallingText'
import { GlowingShadow } from './ui/glowing-shadow'
export default function About() {
  return (
    <section id="about" style={{
      padding: '120px 0',
      background: 'transparent',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative'
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>About SSG</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, lineHeight: 1.1,
              color: '#fff', letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}>
              Built on relationships.<br />Driven by results.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
            }}>
              SSG Semiconductors & Materials Consultancy was founded with a singular mission: 
              to democratize access to the global semiconductor supply chain for companies 
              that need qualified introductions, not just contacts.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.4)',
            }}>
              India-based and globally connected, SSG operates at the intersection of 
              procurement, business development, and materials supply — bridging the gap 
              between ambitious companies and the right industry partners.
            </p>
          </motion.div>

          {/* Right — metrics */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            alignSelf: 'start',
          }}>
            {[
              { label: 'Focus', value: 'B2B Consulting' },
              { label: 'Base', value: 'India' },
              { label: 'Reach', value: 'Asia · Europe · Americas' },
              { label: 'Sector', value: 'Semiconductors & Materials' },
            ].map((m, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                key={i}
              >
                <GlowingShadow>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.2)', marginBottom: '8px',
                    }}>{m.label}</div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px', fontWeight: 600, color: '#fff',
                      lineHeight: 1.2,
                      visibility: 'hidden'
                    }}>{m.value}</div>
                  </div>

                  <FallingText
                    text={m.value}
                    highlightWords={[]}
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.1}
                    fontSize="18px"
                    mouseConstraintStiffness={0.9}
                    textAlign="left"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    containerStyle={{
                      paddingTop: '50px',
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      paddingBottom: '28px',
                      boxSizing: 'border-box'
                    }}
                  />
                </GlowingShadow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
