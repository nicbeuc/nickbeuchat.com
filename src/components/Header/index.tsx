'use client'

import React from 'react'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import AnimatedLogo from '../AnimatedLogo'
import styles from './styles.module.css'


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
    <header className={styles.headerWrapper} data-scrolled={scrolled ? 'true' : undefined} data-entrance-animation="from-top">
      <div className={styles.logoWrapper}>
        <Link href="/" title="Home">
          <span>Nick Beuchat</span>
          <AnimatedLogo compact={scrolled} />
        </Link>
      </div>
      <div className={styles.titleWrapper}>
        <p>Designer & Developer</p>
      </div>
      <nav className={`${styles.navWrapper} site-nav`}>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  )
}