import type { AppProps } from 'next/app'

import { RootLayout } from '@/components'
import { Inter } from 'next/font/google'

import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
