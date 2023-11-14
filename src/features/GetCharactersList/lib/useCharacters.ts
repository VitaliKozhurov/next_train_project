import { useEffect, useState } from 'react'

import { CharacterType } from '@/entities'

import { getCharacters } from '../api'

export const useCharacters = (): CharacterType[] | null => {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null)

  useEffect(() => {
    getCharacters().then(res => setCharacters(res.data.results))
  }, [])

  return characters
}
