import './globals.css'

export const metadata = {
  title: 'Pulih',
  description: 'Pulih PKM Kewirausahaan',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1',
  icons: ['/favicon.ico'],
  themeColor: '#ffffff',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` min-w-screen bg-primary min-h-screen`}>{children}</body>
    </html>
  )
}
