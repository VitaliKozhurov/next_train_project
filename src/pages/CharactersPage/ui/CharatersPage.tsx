import { CharacterCard } from '@/entities'
import { HeadMeta, getLayout } from '@/shared'
import Link from 'next/link'

import { useCharacters } from '../api'

export const CharactersPage = () => {
  const characters = useCharacters()

  return (
    <>
      <HeadMeta title={'Characters Page'} />
      <h1>Characters Page</h1>
      {characters &&
        characters.map(character => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard {...character} />
          </Link>
        ))}
    </>
  )
}

CharactersPage.getLayout = getLayout
