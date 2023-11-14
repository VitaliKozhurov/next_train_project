import { LocationType, RickResponseType, instanceRick } from '@/shared'
import { QueryClient, dehydrate } from '@tanstack/react-query'

export const getLocationsForStaticProps = async () => {
  try {
    const queryClient = new QueryClient()

    await queryClient.fetchQuery({
      queryFn: () =>
        instanceRick.get<RickResponseType<LocationType>>(`/location`).then(res => res.data.results),
      queryKey: ['locations'],
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (e) {
    console.log(e)
  }
}

export const getLocations = async () => {
  const response = await instanceRick.get<RickResponseType<LocationType>>(`/location`)

  return response.data.results
}
