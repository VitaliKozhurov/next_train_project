import { ReactElement } from 'react'

import { HeadMeta, getAuthorizedLayout, getRootLayout } from '@/shared'
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

CharacterPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
