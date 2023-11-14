import { instanceRick } from '@/shared'
import { CharacterType, RickResponseType } from '@shared/api/types'

type ParamsType = {
  page: number
}

export const getCharacters = (params?: ParamsType) => {
  return instanceRick.get<RickResponseType<CharacterType>>(`/character`, { params })
}
