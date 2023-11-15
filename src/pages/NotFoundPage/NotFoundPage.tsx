import { useEffect } from 'react'

import { getRootLayout } from '@pages/Layout'
import { useRouter } from 'next/router'

export const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/404')
  }, [])

  return <h1>PAGE NOT FOUND</h1>
}

NotFoundPage.getLayout = getRootLayout
