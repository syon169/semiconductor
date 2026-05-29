'use client'
import { motion } from 'framer-motion'
const props_list = [
  {
    title: 'Industry-Specific Network',
    desc: 'Not a generic broker. Deep relationships built across fabs, OEMs, distributors, and materials suppliers in the semiconductor ecosystem.',
  },
  {
    title: 'End-to-End BD Support',
    desc: 'From the first introduction to commercial alignment — we stay involved until the relationship is solid and the deal is moving.',
  },
  {
    title: 'Cross-Border Expertise',
    desc: 'India-based with operational reach across Asia, Europe, and North America. We navigate cultural and commercial nuances across markets.',
  },
  {
    title: 'Outcome-Focused',
    desc: 'We measure success by the quality of connections made, not the number of emails sent. Every introduction is qualified and purposeful.',
  },
]

export default function WhySSG() {
  return (
    <section style={{
      padding: '120px 0',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}>Why SSG</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300, lineHeight: 1.1,
            color: '#fff', letterSpacing: '-0.01em',
          }}>
            What makes the difference
          </h2>
        </motion.div>

        {/* 2x2 grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px', background: 'rgba(255,255,255,0.07)',
        }}>
          {props_list.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              key={i} style={{
              background: '#000',
              padding: '40px 36px',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#080808'}
            onMouseLeave={e => e.currentTarget.style.background = '#000'}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px', fontWeight: 400,
                color: '#fff', marginBottom: '14px',
              }}>{p.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', lineHeight: 1.8,
                color: 'rgba(255,255,255,0.35)',
              }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
