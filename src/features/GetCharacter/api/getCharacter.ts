import { CharacterType, RickResponseType, instanceRick } from '@/shared'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getCharactersPaths: GetStaticPaths = async () => {
  const {
    data: { results },
  } = await instanceRick.get<RickResponseType<CharacterType>>(`/character`)
  const paths = results.map(character => ({ params: { id: String(character.id) } }))

  return {
    fallback: true,
    paths,
  }
}
export const getCharacter: GetStaticProps = async ({ params }) => {
  const { id } = params || {}

  try {
    const response = await instanceRick.get<CharacterType>(`/character/${id}`)
    const character = response.data

    if (!character) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        character,
      },
    }
  } catch (e) {
    console.log(e)

    return {
      notFound: true,
    }
  }
}
