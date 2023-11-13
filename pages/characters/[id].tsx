import { useCharacter } from '@/assets'
import { HeadMeta, getLayout } from '@/components'
import { Character } from '@components/character'

const CharacterInfo = () => {
  const character = useCharacter()

  return (
    <>
      <HeadMeta title={'Character'} />
      <h1>Character Page</h1>
      {character && <Character {...character} />}
    </>
  )
}

CharacterInfo.getLayout = getLayout
export default CharacterInfo
