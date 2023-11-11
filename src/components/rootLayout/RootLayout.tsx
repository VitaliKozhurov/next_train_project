import { ReactNode } from 'react'

import { Header } from '@/components'
import { inter } from '@/fonts'

type Props = {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={inter.className}>{children}</main>
    </>
  )
}
