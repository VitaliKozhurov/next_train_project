import { CharacterType } from '@/shared'
import Image from 'next/image'
import aliveStatus from 'public/statuses/alive.svg'
import deadStatus from 'public/statuses/dead.svg'
import unknownStatus from 'public/statuses/unknown.svg'

import s from './CharacterCard.module.scss'

type Props = CharacterType

const statusImages = {
  Alive: aliveStatus,
  Dead: deadStatus,
  unknown: unknownStatus,
}

export const CharacterCard = ({ image, name, status }: Props) => {
  return (
    <div className={s.card}>
      <Image alt={''} height={20} src={statusImages[status]} width={20} />
      <h2 className={s.cardTitle}>{name}</h2>
      <Image alt={`Character ${name}`} height={300} src={image} width={300} />
    </div>
  )
}
