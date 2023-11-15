import { ReactElement } from 'react'

import { HeadMeta } from '@/shared'

import { getAuthorizedLayout, getRootLayout } from '../../Layout'

export const MainPage = () => {
  return (
    <>
      <HeadMeta description={'Next App'} title={'Main Page'} />
      <h1>Main Page</h1>
    </>
  )
}

MainPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))

// Example with layout component
/*MainPage.getLayout = (page: ReactElement) => (
  <RootLayout>
    <AuthorizedLayout>{page}</AuthorizedLayout>
  </RootLayout>
)*/
