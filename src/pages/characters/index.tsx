import { useCharacters } from '@/assets'
import { Heading } from '@/components'
import { inter } from '@/fonts'
import { Character } from '@components/character'
import Image from 'next/image'

const Characters = () => {
  const characters = useCharacters()

  return (
    <>
      <Heading description={'Some description'} title={'Characters'} />
      <main className={inter.className}>
        <h1>Characters Page</h1>
        {characters && characters.map(character => <Character key={character.id} {...character} />)}
      </main>
    </>
  )
}

export default Characters
