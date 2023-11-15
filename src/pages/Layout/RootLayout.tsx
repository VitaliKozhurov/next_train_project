import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets'
import { NextPage } from 'next'

export const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export const getRootLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
