import { PropsWithChildren, ReactElement, ReactNode } from 'react'

import { Header, NavBar } from '@/components'
import { inter } from '@/fonts'
import { NextPage } from 'next'

type Props = {
  children: ReactNode
}

const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <main className={inter.className}>
      <NavBar />
      {children}
    </main>
  )
}

export const getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
