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
      .get<GetCharactersResponse>(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
      .then(res => setCharacters(res.data.results))
  }, [])

  return characters
}
