import { CharacterType, instanceRick } from '@/shared'

export const getCharacter = (id: string) => {
  return instanceRick.get<CharacterType>(`/character/${id}`)
}
