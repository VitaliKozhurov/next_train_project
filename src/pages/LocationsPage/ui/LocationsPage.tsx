import { ReactElement } from 'react'

import { GetLocationsList } from '@/features'
import { HeadMeta, getAuthorizedLayout, getRootLayout } from '@/shared'

export const LocationsPage = () => {
  return (
    <>
      <HeadMeta title={'Locations Page'} />
      <h1>Locations Page</h1>
      <GetLocationsList />
    </>
  )
}

LocationsPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
