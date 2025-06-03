import Monogram from "../Monogram/Monogram"
import NavLink from "../NavLink/NavLink";
import styles from './Footer.module.css'

export default function Footer() {
  const yr = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <p className={styles.copyright}>
        <Monogram /> <span>&copy; {yr}</span>
      </p>
      <nav className={`${styles.links} site-nav`}>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/colophon">Colophon</NavLink>
      </nav>
    </footer>
  )
}