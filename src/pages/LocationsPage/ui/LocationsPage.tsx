import { GetLocationsList } from '@/features'
import { HeadMeta, getLayout } from '@/shared'

export const LocationsPage = () => {
  return (
    <>
      <HeadMeta title={'Locations Page'} />
      <h1>Locations Page</h1>
      <GetLocationsList />
    </>
  )
}

LocationsPage.getLayout = getLayout
