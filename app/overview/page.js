import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Overview() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', padding: '150px 24px', background: '#000', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', marginBottom: '24px' }}>
            Our Mission & Approach
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto 64px', lineHeight: 1.6 }}>
            SSG connects qualified buyers, OEMs, and distributors with trusted manufacturers, 
            materials suppliers, and global MNCs across the semiconductor value chain.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {[
              { title: 'B2B Matchmaking', desc: 'Buyer-to-supplier and OEM connection support' },
              { title: 'Global Reach', desc: 'Asia, Europe & North America coverage' },
              { title: 'Strategic Advisory', desc: 'Sourcing, qualification & relationship building' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '32px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
