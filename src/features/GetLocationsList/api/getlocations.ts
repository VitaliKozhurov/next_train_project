import { LocationType, RickResponseType, instanceRick } from '@/shared'

export const getLocations = async () => {
  const response = await instanceRick.get<RickResponseType<LocationType>>(`/location`)

  return response.data.results
}
