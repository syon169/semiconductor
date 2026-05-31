'use client'
import { motion } from 'framer-motion'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
const steps = [
  {
    num: '01',
    title: 'Requirement Mapping',
    desc: 'We understand your product, market, target customer, sourcing requirement, or MNC partnership objective in depth.',
  },
  {
    num: '02',
    title: 'Partner Identification',
    desc: 'We shortlist buyers, distributors, manufacturers, fabs, or materials companies precisely aligned with your goals.',
  },
  {
    num: '03',
    title: 'Business Introduction',
    desc: 'We facilitate targeted introductions and qualified commercial discussions between the right stakeholders.',
  },
  {
    num: '04',
    title: 'Deal Support',
    desc: 'We support communication flow, commercial alignment, and relationship development for stronger long-term outcomes.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" style={{
      padding: '120px 0',
      background: 'transparent',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'sticky', top: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>Process</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, lineHeight: 1.1,
              color: '#fff', letterSpacing: '-0.01em',
            }}>
              How the<br />model works
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px', lineHeight: 1.75,
              color: 'rgba(255,255,255,0.3)',
              marginTop: '20px',
              maxWidth: '280px',
            }}>
              Simple, professional, and focused on creating qualified business connections.
            </p>
          </motion.div>

          {/* Right — steps */}
          <div style={{ position: 'relative', width: '100%' }}>
            <ScrollStack
              useWindowScroll={true}
              stackPosition="30%"
              scaleEndPosition="20%"
              itemDistance={40}
              itemStackDistance={0}
              baseScale={0.9}
            >
              {steps.map((s, i) => (
                <ScrollStackItem key={i}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '48px 1fr',
                    gap: '24px', alignItems: 'start',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px', color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.1em', paddingTop: '4px',
                    }}>{s.num}</div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '28px', fontWeight: 700,
                        color: '#fff', marginBottom: '16px',
                      }}>{s.title}</h3>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px', lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.45)',
                      }}>{s.desc}</p>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how .how-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #how .how-sticky { position: static !important; }
        }
      `}</style>
    </section>
  )
}
