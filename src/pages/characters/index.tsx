import { useCharacters } from '@/assets'
import { HeadMeta, getLayout } from '@/components'
import { Character } from '@components/character'

const Characters = () => {
  const characters = useCharacters()

  return (
    <>
      <HeadMeta title={'Characters'} />
      <h1>Characters Page</h1>
      {characters && characters.map(character => <Character key={character.id} {...character} />)}
    </>
  )
}

Characters.getLayout = getLayout
export default Characters
