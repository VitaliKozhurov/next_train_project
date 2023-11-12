import { useCharacters } from '@/assets'
import { HeadMeta, getLayout } from '@/components'
import { Character } from '@components/character'
import Link from 'next/link'

const Characters = () => {
  const characters = useCharacters()

  return (
    <>
      <HeadMeta title={'Characters'} />
      <h1>Characters Page</h1>
      {characters &&
        characters.map(character => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <Character {...character} />
          </Link>
        ))}
    </>
  )
}

Characters.getLayout = getLayout
export default Characters
