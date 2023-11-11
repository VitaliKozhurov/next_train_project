import { inter } from '@/fonts'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header + ' ' + inter.className}>
      <h2>Inctagram or logo example</h2>
      <h2>Select for language</h2>
    </header>
  )
}
