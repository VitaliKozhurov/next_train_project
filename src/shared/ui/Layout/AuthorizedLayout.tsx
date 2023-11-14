import { PropsWithChildren, ReactElement } from 'react'

import { NavBar } from '@/shared'
import { NextPage } from 'next'

export const AuthorizedLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div style={{ alignItems: 'flex-start', columnGap: '15rem', display: 'flex' }}>
      <NavBar />
      {children}
    </div>
  )
}
export const getAuthorizedLayout = (page: ReactElement) => {
  return <AuthorizedLayout>{page}</AuthorizedLayout>
}
