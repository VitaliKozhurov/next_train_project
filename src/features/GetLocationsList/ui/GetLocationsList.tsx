import { LocationType } from '@/shared'

type Props = {
  locations: LocationType[]
}

export const GetLocationsList = ({ locations }: Props) => {
  return (
    <>
      {locations.map(location => (
        <h2 key={location.id}>{location.name}</h2>
      ))}
    </>
  )
}
