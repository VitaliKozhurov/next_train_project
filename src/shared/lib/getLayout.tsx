import { ReactElement } from 'react'

import { RootLayout } from '../ui/layout'

export const getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
