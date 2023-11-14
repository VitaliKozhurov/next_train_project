import { CharacterCard } from '@/entities'

import { useCharacter } from '../lib'

export const GetCharacter = () => {
  const character = useCharacter()

  return character && <CharacterCard {...character} />
}
