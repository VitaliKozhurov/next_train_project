import { useEffect, useState } from 'react'

import axios from 'axios'

export type CharacterType = {
  id: string
  image: string
  name: string
}

type GetCharactersResponse = {
  results: CharacterType[]
}

export const useCharacters = (): CharacterType[] | null => {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null)

  useEffect(() => {
    axios
      .get<GetCharactersResponse>('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
  }, [])

  return characters
}
