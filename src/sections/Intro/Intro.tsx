import Link from '@/components/Link/Link'
import styles from './Intro.module.css'

export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <p className="font-title">Hi, I’m Nick, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
      <ul>
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
    </div>
  )
}