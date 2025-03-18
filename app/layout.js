import './globals.css'

export const metadata = {
  title: 'IIIT Vadodara Placement Portal',
  description: 'Official placement portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}