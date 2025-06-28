import Link from '@/components/Link'
import styles from './styles.module.css'
import { CONTACT_LINKS } from '@/utils/constant'
import VisuallyHidden from '@/components/VisuallyHidden'

export default function IntroSection() {
  return (
    <section className={styles.wrapper}>
      <p className="font-title" data-entrance-animation>Hi, I’m Nick, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
      <ul>
        <li data-entrance-animation>
          <Link href={CONTACT_LINKS.resume} download="Nick Beuchat's Resumé">
            <span aria-hidden="true">Resumé</span>
            <VisuallyHidden>Download Nick&apos;s Resumé (PDF, 67KB)</VisuallyHidden>
          </Link>
        </li>
        <li data-entrance-animation>
          <Link href={CONTACT_LINKS.email}>
            <span aria-hidden="true">Email</span>
            <VisuallyHidden>Send Nick an email (opens in new window)</VisuallyHidden>
          </Link>
        </li>
        <li data-entrance-animation>
          <Link href={CONTACT_LINKS.linkedIn} target="_blank">LinkedIn</Link>
        </li>
      </ul>
    </section>
  )
}