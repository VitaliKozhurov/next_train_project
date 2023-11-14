import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <h2>Inctagram logo </h2>
      <button>Logout</button>
    </header>
  )
}
