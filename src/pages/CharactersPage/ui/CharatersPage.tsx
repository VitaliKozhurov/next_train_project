import { GetCharactersList } from '@/features'
import { CharacterType, HeadMeta, getLayout } from '@/shared'

type Props = {
  characters: CharacterType[]
}

export const CharactersPage = ({ characters }: Props) => {
  return (
    <>
      <HeadMeta title={'Characters Page'} />
      <h1>Characters Page</h1>
      <GetCharactersList characters={characters} />
    </>
  )
}

CharactersPage.getLayout = getLayout
