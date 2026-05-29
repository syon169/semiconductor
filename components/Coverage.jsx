'use client'
import { motion } from 'framer-motion'
const items = [
  'Semiconductor Components',
  'Silicon Wafers & Materials',
  'Packaging & Testing Partners',
  'Electronics Supply Chains',
  'Foundry Introductions',
  'OEM & EMS Relationships',
  'Enterprise Buyer Networks',
  'Cross-border Business Development',
]

export default function Coverage() {
  return (
    <section id="coverage" style={{
      padding: '120px 0',
      background: '#050505',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: '80px', alignItems: 'start',
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
              }}>Scope</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300, lineHeight: 1.1,
              color: '#fff', letterSpacing: '-0.01em',
            }}>
              Industry<br />coverage
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px', lineHeight: 1.75,
              color: 'rgba(255,255,255,0.3)',
              marginTop: '20px',
            }}>
              SSG positions across the full semiconductor value chain — from materials to enterprise buyer networks.
            </p>
          </motion.div>

          {/* Right — pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '8px' }}>
            {items.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px', letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.45)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '10px 18px',
                transition: 'border-color 0.25s ease, color 0.25s ease, background 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                e.currentTarget.style.background = 'transparent';
              }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
