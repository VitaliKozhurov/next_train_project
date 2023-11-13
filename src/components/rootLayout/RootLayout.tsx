import { PropsWithChildren, ReactElement, ReactNode } from 'react'

import { NavBar } from '@/components'
import { NextPage } from 'next'

type Props = {
  children: ReactNode
}

const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}

export const getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
