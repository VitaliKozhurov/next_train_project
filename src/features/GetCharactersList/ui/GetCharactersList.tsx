import { CharacterCard } from '@/entities'
import { CharacterType } from '@/shared'
import Link from 'next/link'

type Props = {
  characters: CharacterType[]
}
export const GetCharactersList = ({ characters }: Props) => {
  return (
    <>
      {characters.map(character => (
        <Link href={`/characters/${character.id}`} key={character.id}>
          <CharacterCard {...character} />
        </Link>
      ))}
    </>
  )
}
