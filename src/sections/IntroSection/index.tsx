import Link from '@/components/Link'
import styles from './styles.module.css'

export default function IntroSection() {
  return (
    <section className={styles.wrapper}>
      <p className="font-title" data-entrance-animation>Hi, I’m Nick, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
      <ul data-entrance-animation-group>
        <li>
          <Link href="#" iconName="download" external>Resumé</Link>
        </li>
        <li>
          <Link href="#" iconName="copy" external>Email</Link>
        </li>
        <li>
          <Link href="#" iconName="arrow-top-right" external>LinkedIn</Link>
        </li>
      </ul>
    </section>
  )
}