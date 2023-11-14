import { ReactElement } from 'react'

import { GetEpisodesList } from '@/features'
import { EpisodeType, HeadMeta, getAuthorizedLayout, getRootLayout } from '@/shared'

type Props = {
  episodes: EpisodeType[]
}

export const EpisodesPage = ({ episodes }: Props) => {
  return (
    <>
      <HeadMeta title={'Episodes Page'} />
      <h1>Episodes Page</h1>
      <GetEpisodesList episodes={episodes} />
    </>
  )
}

EpisodesPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
