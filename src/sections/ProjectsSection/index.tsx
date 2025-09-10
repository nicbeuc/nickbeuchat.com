import ProjectThumb from "@/components/ProjectThumb"
import { PROJECTS } from "@/utils/constants"
import styles from './styles.module.css'

export default function ProjectsSection() {
  return (
    <section className={styles.wrapper}>
      <hgroup data-entrance-animation>
        <h2>Selected Work</h2>
        <p>2021 - 2025</p>
      </hgroup>
      {PROJECTS.map((project) => (
        <ProjectThumb key={project.title} {...project} />
      ))}
    </section>
  )
}