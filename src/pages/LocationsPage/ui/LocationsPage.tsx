import { GetLocationsList } from '@/features'
import { HeadMeta, LocationType, getLayout } from '@/shared'

type Props = {
  locations: LocationType[]
}

export const LocationsPage = ({ locations }: Props) => {
  return (
    <>
      <HeadMeta title={'Locations Page'} />
      <h1>Locations Page</h1>
      <GetLocationsList locations={locations} />
    </>
  )
}

LocationsPage.getLayout = getLayout
