import { CharacterType } from '@/assets'
import { NavBar } from '@/components'
import Image from 'next/image'

import s from './Character.module.scss'
type Props = CharacterType
export const Character = ({ image, name }: Props) => {
  return (
    <div className={s.card}>
      <h2 className={s.cardTitle}>{name}</h2>
      <Image alt={`Character ${name}`} height={300} src={image} width={300} />
    </div>
  )
}
