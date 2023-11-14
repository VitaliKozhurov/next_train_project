import { useEffect, useState } from 'react'

import { CharacterType } from '@/entities'
import { useRouter } from 'next/router'

import { getCharacter } from '../api'

export const useCharacter = (): CharacterType | null => {
  const [character, setCharacter] = useState<CharacterType | null>(null)
  const router = useRouter()
  const id = (router.query.id || '') as string

  useEffect(() => {
    getCharacter(id).then(res => {
      setCharacter(res.data)
    })
  }, [])

  return character
}
