import { CharacterCard } from '@/entities'
import { CharacterType } from '@/shared'
import { useRouter } from 'next/router'
type Props = {
  character: CharacterType
}
export const GetCharacter = ({ character }: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Character Loading...</h1>
  }

  return character && <CharacterCard {...character} />
}
