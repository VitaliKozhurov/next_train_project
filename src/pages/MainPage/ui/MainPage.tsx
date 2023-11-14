import { ReactElement } from 'react'

import { HeadMeta, getAuthorizedLayout, getRootLayout } from '@/shared'

export const MainPage = () => {
  return (
    <>
      <HeadMeta description={'Next App'} title={'Main Page'} />
      <h1>Main Page</h1>
    </>
  )
}

MainPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
