import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { Inter } from 'next/font/google'

import '@/styles/globals.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}
