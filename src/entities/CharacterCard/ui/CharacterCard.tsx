import Image from 'next/image'

import s from './CharacterCard.module.scss'

import { CharacterType } from '../model'

type Props = CharacterType
export const CharacterCard = ({ image, name }: Props) => {
  return (
    <div className={s.card}>
      <h2 className={s.cardTitle}>{name}</h2>
      <Image alt={`Character ${name}`} height={300} src={image} width={300} />
    </div>
  )
}
