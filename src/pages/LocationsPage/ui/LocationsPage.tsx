import { ReactElement } from 'react'

import { GetLocationsList } from '@/features'
import { HeadMeta } from '@/shared'

import { getAuthorizedLayout, getRootLayout } from '../../Layout'

export const LocationsPage = () => {
  return (
    <>
      <HeadMeta title={'Locations Page'} />
      <div>
        <h1>Locations Page</h1>
        <GetLocationsList />
      </div>
    </>
  )
}

LocationsPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
