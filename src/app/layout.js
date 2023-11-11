import './globals.css'

import PropTypes from 'prop-types'

import { Providers } from '@/components'

export const metadata = {
  title: "Pulih - It's For You",
  description: 'Pulih App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.isRequired,
}
