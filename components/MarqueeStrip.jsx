'use client'
import { motion } from 'framer-motion'
export default function MarqueeStrip() {
  const items = [
    'Semiconductor Components',
    'Silicon Wafers & Materials',
    'Packaging & Testing',
    'Foundry Introductions',
    'OEM & EMS Relationships',
    'Cross-border Business Development',
    'Enterprise Buyer Networks',
    'Electronics Supply Chains',
  ]

  const doubled = [...items, ...items]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.015)',
      overflow: 'hidden',
      padding: '14px 0',
    }}>
      <div style={{
        display: 'flex',
        animation: 'marquee 30s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '20px',
            paddingRight: '48px', flexShrink: 0,
          }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              whiteSpace: 'nowrap',
            }}>{item}</span>
            <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '8px' }}>◆</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
