export type CharacterStatusType = 'Alive' | 'Dead' | 'unknown'
type CharacterGenderType = 'Female' | 'Genderless' | 'Male' | 'unknown'
type ExtraDataType = {
  name: string
  url: string
}
export type CharacterType = {
  created: string
  episode: string[]
  gender: CharacterGenderType
  id: number
  image: string
  location: ExtraDataType
  name: string
  origin: ExtraDataType
  species: string
  status: CharacterStatusType
  type: string
  url: string
}

export type LocationType = {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}

export type EpisodeType = {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}

type InfoType = {
  count: number
  next: null | string
  pages: number
  prev: null | string
}
export type RickResponseType<T> = {
  info: InfoType
  results: T[]
}
