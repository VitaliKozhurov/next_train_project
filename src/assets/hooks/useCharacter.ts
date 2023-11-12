import { useEffect, useState } from 'react'

import { CharacterType } from '@/assets'
import axios from 'axios'
import { useRouter } from 'next/router'

export const useCharacter = (): CharacterType | null => {
  const [character, setCharacter] = useState<CharacterType | null>(null)
  const router = useRouter()

  useEffect(() => {
    axios
      .get<CharacterType>(
        `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`
      )
      .then(res => {
        setCharacter(res.data)
      })
  }, [])

  return character
}
