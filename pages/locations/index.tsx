import { getLocations } from '@/features'
import { LocationsPage } from '@/pages'
export const getServerSideProps = getLocations
export default LocationsPage
