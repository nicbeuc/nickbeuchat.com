import styles from './Intro.module.css'

export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <p className="font-title">Hi, I’m Nick, a designer and creative developer with a passion for crafting simple, inclusive solutions for the web.</p>
      <ul>
        <li>Resumé</li>
        <li>Email</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  )
}