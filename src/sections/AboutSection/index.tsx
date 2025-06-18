import Link from '@/components/Link'
import Image from '@/components/Image'
import styles from './styles.module.css'

export default function AboutSection() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.imagesWrapper}>
        <Image src="/images/nick-placeholder.webp" width={500} height={500} alt="Nick Beuchat" caption="Nick"/>
        <Image src="/images/griff-placeholder.webp" width={500} height={500} alt="Nick's dog, Griffin" caption="Griffin" />
      </section>
      <section className={styles.copyWrapper}>
        <div className={styles.sectionWrapper}>
          <h2>About Me</h2>
          <div>
            <p>Hi, I&apos;m Nick, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
            <p>Currently, I&apos;m living and working in my hometown of Knoxville, TN, designing and developing user experiences for Make Me Modern.</p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Contact</h2>
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
        <div className={styles.sectionWrapper}>
          <h2>Skills</h2>
          <ul>
            <li>Art Direction</li>
            <li>Brand Identity</li>
            <li>Illustration</li>
            <li>Print</li>
            <li>Web</li>
            <li>Motion</li>
          </ul>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Tools</h2>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Svelte</li>
            <li>Figma</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Reading</h2>
          <div className="item-group">
            <Link href="https://www.goodreads.com/book/show/2528.All_the_Names" external iconName="arrow-top-right">All The Names</Link>
            <p className="color-dimmed">José Saramago</p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Watching</h2>
          <div className="item-group">
            <Link href="https://letterboxd.com/film/yi-yi/" external iconName="arrow-top-right">Yi Yi</Link>
            <p className="color-dimmed">dir. Edward Yang</p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Listening</h2>
          <ul>
            <li className="item-group">
              <Link href="https://open.spotify.com/album/6uLokj5GmuVeUWWJEzabT9" external iconName="arrow-top-right">Axxess &amp; Ace</Link>
              <p className="color-dimmed">Songs: Ohia</p>
            </li>
            <li className="item-group">
              <Link href="https://open.spotify.com/album/4rL0RzmHMQyHiZqJVdt7A8" external iconName="arrow-top-right">Old Ramon</Link>
              <p className="color-dimmed">Red House Painters</p>
            </li>
            <li className="item-group">
              <Link href="https://open.spotify.com/album/5vBpIxm8ws6pWyVmTWiGE1" external iconName="arrow-top-right">Vespertine</Link>
              <p className="color-dimmed">Björk</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}