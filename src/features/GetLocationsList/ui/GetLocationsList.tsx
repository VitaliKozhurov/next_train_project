import { getLocations } from '@/features'
import { LocationType } from '@/shared'
import { useQuery } from '@tanstack/react-query'

export const GetLocationsList = () => {
  const { data: locations } = useQuery<LocationType[]>({
    queryFn: getLocations,
    queryKey: ['locations'],
  })

  if (!locations) {
    return null
  }

  return (
    <>
      {locations.map(location => (
        <h2 key={location.id}>{location.name}</h2>
      ))}
    </>
  )
}
