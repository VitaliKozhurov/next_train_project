import { getEpisodes } from '@/features'
import { EpisodesPage } from '@/pages'

export const getServerSideProps = getEpisodes
export default EpisodesPage
