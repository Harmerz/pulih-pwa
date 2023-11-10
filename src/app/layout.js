import './global.css'

import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Provider from '@/app/context/client'

export const metadata = {
  title: 'Festify APP',
  description: 'Festify APP PKM Kewirausahaan',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1',
  icons: ['/favicon.ico'],
  themeColor: '#ffffff',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={` min-w-screen bg-primary min-h-screen`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
