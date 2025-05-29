'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from './NavLink.module.css'

type NavLinkProps = {
  href: string,
  children: React.ReactNode
}

export default function NavLink({ href, children, ...delegated }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link className={styles.link} aria-current={pathname === href ? 'page' : undefined} href={href} {...delegated}>
      {children}
    </Link>
  )
}