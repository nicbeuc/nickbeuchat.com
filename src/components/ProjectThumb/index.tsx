import styles from './styles.module.css'

type ProjectThumbProps = {
  title: string,
  description: string,
  roles: Array<string>
}

export default function ProjectThumb({ title, description, roles }: ProjectThumbProps) {
  return (
    <article className={styles.thumb} data-entrance-animation>
      <div className={styles.mediaWrapper}>

      </div>
      <div className={styles.details}>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
      {roles.length > 0 && (
        <p className={styles.roles}>
          {roles.map((role: string, i: number) => {
            if (i !== roles.length - 1) {
              return role + " / "
            }
            return role
          })}
        </p>
      )}
    </article>
  )
}