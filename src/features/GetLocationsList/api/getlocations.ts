import { LocationType, RickResponseType, instanceRick } from '@/shared'

type ParamsType = {
  id: number
}
export const getLocations = async (params?: ParamsType) => {
  try {
    const response = await instanceRick.get<RickResponseType<RickResponseType<LocationType>>>(
      `/location`,
      { params }
    )
    const locations = response.data.results

    if (!locations) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        locations,
      },
    }
  } catch (e) {
    console.log(e)

    return {
      notFound: true,
    }
  }
}
