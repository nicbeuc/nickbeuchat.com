import Link from "@/components/Link"
import styles from "./styles.module.css"

export default function ColophonSection() {
  return (
    <div className={styles.wrapper} data-entrance-animation>
      <section>
        <h2>Technical</h2>
        <p>This site is built with Next.JS and hosted on Vercel. No AI was used in the creation of this site.</p>
      </section>
      <hr />
      <section>
        <h2>Accessibility</h2>
        <p>I&apos;m wholly committed to ensuring digital accessibility for any and all people who come across this site. If there&apos;s something you feel is preventing you from properly navigating the site or viewing its content, you can let me know <Link href="mailto:hi@nickbeuchat.com?subject=Accessibility%20Concern">via email</Link> and I will do my best to address it.</p>
      </section>
      <hr />
      <section>
        <h2>Typography</h2>
        <p>This site is set in <Link target="_blank" href="https://www.fontshare.com/fonts/switzer">Switzer</Link>, a neo-grotesk typeface created by the incredible <Link target="_blank" href="https://www.indiantypefoundry.com/">Indian Type Foundry</Link>.</p>
      </section>
      <hr />
      <section>
        <h2>Icons</h2>
        <p>This website features <Link target="_blank" href="https://basicons.xyz/">Basicons</Link>, a simple and sharp icon suite created by <Link target="_blank" href="https://www.preciousm.co/">Precious Madubuike</Link> and <Link target="_blank" href="https://www.linkedin.com/in/solomon-omojola-6255198a/">Solomon Omojola.</Link></p>
      </section>
      <hr />
      <section>
        <h2>Privacy</h2>
        <p>I don&apos;t currently use any tracking cookies on this site, nor do I plan on doing so. Your privacy is important to me!</p>
      </section>
    </div>
  )
}