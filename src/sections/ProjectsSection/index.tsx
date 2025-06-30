import ProjectThumb from "@/components/ProjectThumb"
import styles from './styles.module.css'

export default function ProjectsSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Projects</h2>
      <ProjectThumb
        title="r.chiara"
        description="Despite the organization's rich history and strong community ties, The McNabb Center felt hindered by their."
        // media="https://yxcr65xsmnbnpdvj.public.blob.vercel-storage.com/rchiara-thumb.webm"
        roles={["Design", "Development"]}
      />
      <ProjectThumb
        title="r.chiara"
        description="Despite the organization's rich history and strong community ties, The McNabb Center felt hindered by their."
        roles={["Design", "Development"]}
      />
    </section>
  )
}