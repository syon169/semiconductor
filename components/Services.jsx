'use client'
import { motion } from 'framer-motion'
const services = [
  {
    num: '01',
    title: 'Supplier-Buyer Matchmaking',
    desc: 'We connect semiconductor buyers with the right manufacturers, material vendors, and authorized supply partners — precision introductions, not cold outreach.',
    items: ['Component sourcing support', 'Lead generation for enterprise deals', 'Channel partner introductions'],
  },
  {
    num: '02',
    title: 'Strategic Market Access',
    desc: 'We help your business enter new accounts and build relationships with procurement teams, technical stakeholders, and major industry players across geographies.',
    items: ['MNC outreach strategy', 'Account targeting & mapping', 'Business development advisory'],
  },
  {
    num: '03',
    title: 'Materials & Ecosystem Consulting',
    desc: 'From semiconductor materials to packaging and backend services, we identify the right ecosystem partners for your long-term supply chain strategy.',
    items: ['Materials partner mapping', 'Supply chain positioning', 'Commercial coordination support'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{
      padding: '120px 0',
      background: '#000',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}>What We Do</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 300, lineHeight: 1.1,
            color: '#fff', letterSpacing: '-0.01em',
          }}>
            Core consultancy<br />services
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'rgba(255,255,255,0.07)',
        }}>
          {services.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              key={i} style={{
              background: '#000',
              padding: '40px 32px',
              transition: 'background 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#0a0a0a'}
            onMouseLeave={e => e.currentTarget.style.background = '#000'}
            >
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px', color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.15em', marginBottom: '24px',
              }}>{s.num}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px', fontWeight: 400,
                color: '#fff', lineHeight: 1.2,
                marginBottom: '16px',
              }}>{s.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', lineHeight: 1.75,
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '32px',
              }}>{s.desc}</p>

              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                paddingTop: '24px',
              }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{
                      width: '4px', height: '4px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px', color: 'rgba(255,255,255,0.4)',
                    }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
