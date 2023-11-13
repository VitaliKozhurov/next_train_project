import { PropsWithChildren, ReactNode } from 'react'

import { NavBar } from '@/components'
import { NextPage } from 'next'

type Props = {
  children: ReactNode
}

export const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}
