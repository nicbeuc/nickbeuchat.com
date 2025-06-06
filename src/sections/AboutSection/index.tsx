import Link from '@/components/Link'
import styles from './styles.module.css'

export default function AboutSection() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.imagesWrapper}>

      </section>
      <section className={styles.copyWrapper}>
        <div data-layout="1">
          <h2>About Me</h2>
          <div className={styles.content}>
            <p>Hi, I&apos;m Nick, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
            <p>Currently, I&apos;m living and working in my hometown of Knoxville, TN, designing and developing user experiences for Make Me Modern.</p>
          </div>
        </div>
        <div data-layout="1">
          <h2>Contact</h2>
          <div className={styles.content}>
            <ul className={styles.linkList}>
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
        </div>
      </section>
    </div>
  )
}