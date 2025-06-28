import Monogram from "../Monogram"
import NavLink from "../NavLink";
import styles from './styles.module.css'

export default function Footer() {
  const yr = new Date().getFullYear();

  return (
    <footer className={styles.wrapper} data-entrance-animation>
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