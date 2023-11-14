import { GetCharactersList } from '@/features'
import { HeadMeta, getLayout } from '@/shared'

export const CharactersPage = () => {
  return (
    <>
      <HeadMeta title={'Characters Page'} />
      <h1>Characters Page</h1>
      <GetCharactersList />
    </>
  )
}

CharactersPage.getLayout = getLayout
