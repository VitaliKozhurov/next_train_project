import { RickResponseType, instanceRick } from '@/shared'
import { EpisodeType } from '@shared/api/types'
type ParamsType = {
  id: number
}
export const getEpisodes = async (params?: ParamsType) => {
  const response = await instanceRick.get<RickResponseType<RickResponseType<EpisodeType>>>(
    `/episode`,
    { params }
  )
}
