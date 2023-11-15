import { ReactElement } from 'react'

import { GetCharactersList } from '@/features'
import { CharacterType, HeadMeta } from '@/shared'

import { getAuthorizedLayout, getRootLayout } from '../../Layout'

type Props = {
  characters: CharacterType[]
}

export const CharactersPage = ({ characters }: Props) => {
  return (
    <>
      <HeadMeta title={'Characters Page'} />
      <div>
        <h1>Characters Page</h1>
        <GetCharactersList characters={characters} />
      </div>
    </>
  )
}

CharactersPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
