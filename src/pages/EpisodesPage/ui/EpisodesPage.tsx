import { GetCharactersList } from '@/features'
import { CharacterType, HeadMeta, getLayout } from '@/shared'

/*type Props = {
    characters: CharacterType[]
}*/

export const EpisodesPage = (/*{ characters }: Props*/) => {
  return (
    <>
      <HeadMeta title={'Episodes Page'} />
      <h1>Episodes Page</h1>
      {/* <GetCharactersList characters={characters} />*/}
    </>
  )
}

EpisodesPage.getLayout = getLayout
