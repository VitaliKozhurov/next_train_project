import { CharacterType } from '@/assets'
import Image from 'next/image'

type Props = CharacterType
export const Character = ({ image, name }: Props) => {
  return (
    <div>
      <h2>{name}</h2>
      <Image alt={`Character ${name}`} height={300} src={image} width={300} />
    </div>
  )
}
