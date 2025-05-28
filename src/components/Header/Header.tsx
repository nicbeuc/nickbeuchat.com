import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Link href="/" title="Home">
          <span>Nick Beuchat</span>
        </Link>
      </div>
      <div className={styles.titleWrapper}>
        <p>Designer & Developer</p>
      </div>
      <nav className={styles.navWrapper}>
        <Link href="/">Work</Link>
        <Link href="#">About</Link>
      </nav>
    </header>
  )
}