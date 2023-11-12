import { useEffect } from 'react'

import { getLayout } from '@/components'
import { useRouter } from 'next/router'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/404')
  }, [])

  return <h1>PAGE NOT FOUND</h1>
}

NotFoundPage.getLayout = getLayout

export default NotFoundPage
