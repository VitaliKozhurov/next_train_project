import { HeadMeta, getLayout } from '@/shared'

export const MainPage = () => {
  return (
    <>
      <HeadMeta description={'Next App'} title={'Main Page'} />
      <h1>Main Page</h1>
    </>
  )
}

MainPage.getLayout = getLayout
