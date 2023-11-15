import { ReactElement } from 'react'

import { GetCharacter } from '@/features'
import { CharacterType, HeadMeta } from '@/shared'
import { useRouter } from 'next/router'

import { getAuthorizedLayout, getRootLayout } from '../../Layout'

type Props = {
  character: CharacterType
}

export const CharacterPage = ({ character }: Props) => {
  const router = useRouter()
  const id = router.query.id

  const goToCharactersHandler = () => {
    router.push('/characters')
  }

  return (
    <>
      <HeadMeta title={'Character Page'} />
      <div>
        <h1>{`Character Page ${id}`}</h1>
        <GetCharacter character={character} />
        <button onClick={goToCharactersHandler}>Go to characters Page</button>
      </div>
    </>
  )
}

CharacterPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
