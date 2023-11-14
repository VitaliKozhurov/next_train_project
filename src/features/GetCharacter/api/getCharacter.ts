import { CharacterType } from '@/entities'
import { instanceRick } from '@/shared'

export const getCharacter = (id: string) => {
  return instanceRick.get<CharacterType>(`/character/${id}`)
}