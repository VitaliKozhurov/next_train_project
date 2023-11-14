import { getCharacters } from '@/features'
import { CharactersPage } from '@/pages'

export const getStaticProps = getCharacters
export default CharactersPage
