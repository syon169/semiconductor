'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src="/logo.png" alt="SSG Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: 'invert(1) contrast(2.5)', mixBlendMode: 'screen' }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            display: 'none',
          }}
          className="nav-brand-text"
          >
            Semiconductors & Materials
          </span>
        </a>

        {/* Desktop links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px', color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              padding: '4px 0',
              borderBottom: '1px solid transparent',
            }}
            onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.borderBottomColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.45)'; e.target.style.borderBottomColor = 'transparent'; }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#000', background: '#fff',
            padding: '9px 20px',
            textDecoration: 'none',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.85)'; }}
          onMouseLeave={e => { e.target.style.background = '#fff'; }}
          >
            Consult
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .nav-brand-text { display: block !important; }
        }
      `}</style>
    </header>
  )
}
