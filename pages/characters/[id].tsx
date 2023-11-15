import { getCharacter, getCharactersPaths } from '@/features'
import { CharacterPage } from '@/pages'

export const getStaticPaths = getCharactersPaths
export const getStaticProps = getCharacter
export default CharacterPage
