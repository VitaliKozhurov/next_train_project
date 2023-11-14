import { instanceRick } from '@/shared'
import { CharacterType, RickResponseType } from '@shared/api/types'

type ParamsType = {
  page: number
}

export const getCharacters = async (params?: ParamsType) => {
  try {
    const response = await instanceRick.get<RickResponseType<CharacterType>>(`/character`, {
      params,
    })
    const characters = response.data.results

    return {
      props: {
        characters,
      },
    }
  } catch (e) {
    console.log(e)

    return {
      props: {
        characters: [],
      },
    }
  }
}
