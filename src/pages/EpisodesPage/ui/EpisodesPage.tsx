import { ReactElement } from 'react'

import { GetEpisodesList } from '@/features'
import { EpisodeType, HeadMeta } from '@/shared'

import { getAuthorizedLayout, getRootLayout } from '../../Layout'

type Props = {
  episodes: EpisodeType[]
}

export const EpisodesPage = ({ episodes }: Props) => {
  return (
    <>
      <HeadMeta title={'Episodes Page'} />
      <div>
        <h1>Episodes Page</h1>
        <GetEpisodesList episodes={episodes} />
      </div>
    </>
  )
}

EpisodesPage.getLayout = (page: ReactElement) => getRootLayout(getAuthorizedLayout(page))
