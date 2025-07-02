import ProjectThumb from "@/components/ProjectThumb"
import { PROJECTS } from "@/utils/constants"
import styles from './styles.module.css'

export default function ProjectsSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Projects</h2>
      {PROJECTS.map((project) => (
        <ProjectThumb key={project.title} {...project} />
      ))}
    </section>
  )
}