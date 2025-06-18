import Link from "@/components/Link"
import styles from "./styles.module.css"

export default function ColophonSection() {
  return (
    <div className={styles.wrapper}>
      <section>
        <h2>Icons</h2>
        <p>This website features <Link external href="https://basicons.xyz/">Basicons</Link>, a simple and sharp icon suite created by <Link external href="https://www.preciousm.co/">Precious Madubuike</Link> and <Link external href="https://www.linkedin.com/in/solomon-omojola-6255198a/">Solomon Omojola.</Link></p>
      </section>
      <section>
        <h2>Accessibility</h2>
        <p>I&apos;m wholly committed to ensuring digital accessibility for any and all people who come across this site. If there&apos;s something you feel is preventing you from properly navigating the site or viewing its content, you can let me know <Link href="mailto:hi@nickbeuchat.com?subject=Accessibility%20Concern">via email</Link> and I will do my best to address it.</p>
      </section>
    </div>
  )
}