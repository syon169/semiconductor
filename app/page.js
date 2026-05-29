import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeStrip from '../components/MarqueeStrip'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhySSG from '../components/WhySSG'
import Coverage from '../components/Coverage'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DomeGallery from '../components/DomeGallery'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <HowItWorks />
      <WhySSG />
      <Coverage />
      <About />
      <Contact />
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 10
        }}>
          {/* Soft vignette blur behind text */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120vw', height: '120vh',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, transparent 60%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 15%, transparent 65%)',
            maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 65%)',
            zIndex: 1
          }} />

          <h2 style={{
            position: 'relative', zIndex: 2,
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            margin: 0,
            textShadow: '0 4px 24px rgba(0,0,0,0.5)'
          }}>
            Explore Our Ecosystem
          </h2>
        </div>
        <DomeGallery />
      </div>
      <Footer />
    </>
  )
}
