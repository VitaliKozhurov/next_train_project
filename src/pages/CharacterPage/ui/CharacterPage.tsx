import { ReactElement } from 'react'

import { GetCharacter } from '@/features'
import { HeadMeta } from '@/shared'

import { getAuthorizedLayout, getRootLayout } from '../../Layout'

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
