import { CharacterCard } from '@/entities'
import Link from 'next/link'

import { useCharacters } from '../lib'

export const GetCharactersList = () => {
  const characters = useCharacters()

  return (
    <>
      {characters &&
        characters.map(character => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <CharacterCard {...character} />
          </Link>
        ))}
    </>
  )
}
