import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ReactElement, ReactNode, useState } from 'react'

import { useLoader } from '@/shared'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useLoader()
  const [queryClient] = useState(() => new QueryClient())
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
