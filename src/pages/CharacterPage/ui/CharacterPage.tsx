import { HeadMeta, getLayout } from '@/shared'
import { GetCharacter } from '@features/GetCharacter'

export const CharacterPage = () => {
  return (
    <>
      <HeadMeta title={'Character Page'} />
      <h1>Character Page</h1>
      <GetCharacter />
    </>
  )
}

CharacterPage.getLayout = getLayout
