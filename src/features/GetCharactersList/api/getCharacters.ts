import { CharacterType, RickResponseType, instanceRick } from '@/shared'

type ParamsType = {
  page: number
}

export const getCharacters = async (params?: ParamsType) => {
  try {
    const response = await instanceRick.get<RickResponseType<CharacterType>>(`/character`, {
      params,
    })
    const characters = response.data.results

    if (!characters) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        characters,
      },
    }
  } catch (e) {
    console.log(e)

    return {
      notFound: true,
    }
  }
}
