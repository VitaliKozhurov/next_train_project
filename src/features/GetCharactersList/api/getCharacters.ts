import { CharacterType } from '@/entities'
import { instanceRick } from '@/shared'
type GetCharactersResponse = {
  results: CharacterType[]
}

export const getCharacters = () => {
  return instanceRick.get<GetCharactersResponse>(`/character`)
}
