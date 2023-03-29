import '../globals.css'

export const metadata = {
  title: 'Next.js on Cloud Run',
  description: 'Next.js on Cloud Run',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
