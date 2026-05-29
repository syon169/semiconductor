import './globals.css'

export const metadata = {
  title: 'SSG Semiconductors & Materials Consultancy',
  description: 'Strategic B2B consulting firm connecting buyers, OEMs, distributors and global semiconductor manufacturers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
