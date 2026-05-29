'use client'
export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#000',
      padding: '32px 0 40px',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px', color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.04em',
        }}>
          © 2026 SSG Semiconductors & Materials Consultancy
        </div>

        <div style={{ display: 'flex', gap: '28px' }}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'How It Works', href: '#how' },
            { label: 'Coverage', href: '#coverage' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)', textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.2)'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
