import Link from 'next/link'

import s from './NavBar.module.scss'
export const NavBar = () => {
  return (
    <nav className={s.links}>
      <Link href={'/'}>Main</Link>
      <Link href={'/characters'}>Characters</Link>
      <Link href={'/episodes'}>Episodes</Link>
    </nav>
  )
}
