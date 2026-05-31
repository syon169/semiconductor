import { Inter, Orbitron, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-hero' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' })

export const metadata = {
  title: 'SSG Semiconductors & Materials Consultancy',
  description: 'Strategic B2B consulting firm connecting buyers, OEMs, distributors and global semiconductor manufacturers.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
