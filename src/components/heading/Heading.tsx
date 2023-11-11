import Head from 'next/head'

type Props = {
  description: string
  title: string
}

export const Heading = ({ description, title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name={'description'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/favicon.ico'} rel={'icon'} />
    </Head>
  )
}
