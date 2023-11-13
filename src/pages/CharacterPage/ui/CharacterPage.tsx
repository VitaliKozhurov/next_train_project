import { CharacterCard } from '@/entities'
import { HeadMeta, getLayout } from '@/shared'

import { useCharacter } from '../api'

export const CharacterPage = () => {
  const character = useCharacter()

  return (
    <>
      <HeadMeta title={'Character Page'} />
      <h1>Character Page</h1>
      {character && <CharacterCard {...character} />}
    </>
  )
}

CharacterPage.getLayout = getLayout
