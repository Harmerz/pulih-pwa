import '@/app/globals.css'

import { getServerSession } from 'next-auth/next'
import React from 'react'

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
      <body className={` min-w-screen min-h-screen bg-primary`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
