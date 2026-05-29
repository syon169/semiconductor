'use client'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '120px 0',
      background: '#050505',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}>Get in Touch</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 300, lineHeight: 1.0,
            color: '#fff', letterSpacing: '-0.02em',
          }}>
            Start with a consultation.
          </h2>
        </motion.div>

        {/* Two columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1px', background: 'rgba(255,255,255,0.07)',
        }}>
          {/* Left — details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ background: '#050505', padding: '48px 40px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px', fontWeight: 400,
              color: '#fff', marginBottom: '32px',
            }}>SSG Semiconductors & Materials Consultancy</h3>

            {[
              { label: 'Email', value: 'ceo@ssg-semiconductors.co.in', href: 'mailto:ceo@ssg-semiconductors.co.in' },
              { label: 'Phone', value: '+91 93103 81806', href: 'tel:+919310381806' },
              { label: 'Location', value: 'India / Global B2B Operations', href: null },
              { label: 'Focus', value: 'Buyer-supplier introductions, MNC engagement, strategic sourcing', href: null },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: '16px', padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.2)', paddingTop: '2px',
                }}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none', transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >{item.value}</a>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6,
                  }}>{item.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right — positioning + CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
            background: '#050505', padding: '48px 40px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px', fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
                marginBottom: '48px',
                fontStyle: 'italic',
              }}>
                "SSG Semiconductors & Materials Consultancy is a strategic B2B consulting firm that connects buyers, 
                suppliers, manufacturers, and multinational corporations across the semiconductor value chain."
              </p>
            </div>
            <div>
              <a href="mailto:ceo@ssg-semiconductors.co.in" style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#000', background: '#fff',
                padding: '16px 36px', textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.target.style.background = '#fff'}
              >
                Email SSG
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
