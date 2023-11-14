import { EpisodeType, RickResponseType, instanceRick } from '@/shared'

type ParamsType = {
  id: number
}
export const getEpisodes = async (params?: ParamsType) => {
  try {
    const response = await instanceRick.get<RickResponseType<RickResponseType<EpisodeType>>>(
      `/episode`,
      { params }
    )
    const episodes = response.data.results

    return {
      props: {
        episodes,
      },
    }
  } catch (e) {
    console.log(e)

    return {
      props: {
        episodes: [],
      },
    }
  }
}
