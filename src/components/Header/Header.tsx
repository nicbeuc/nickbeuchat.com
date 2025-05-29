'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import NavLink from '@/components/NavLink/NavLink'
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 72)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={styles.headerWrapper} data-scrolled={scrolled ? 'true' : undefined}>
      <div className={styles.logoWrapper}>
        <Link href="/" title="Home">
          <AnimatedLogo compact={scrolled} />
        </Link>
      </div>
      <div className={styles.titleWrapper}>
        <p>Designer & Developer</p>
      </div>
      <nav className={styles.navWrapper}>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  )
}