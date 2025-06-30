import Link from 'next/link';
import styles from './styles.module.css'

type ProjectThumbProps = {
  roles: Array<string>,
  media?: string | Array<string>,
  title: string,
  description: string,
  link?: string,
}

// to do: create video component, images slides component

export default function ProjectThumb({ media, title, description, roles, link }: ProjectThumbProps) {
  let mediaComponent = null;

  if (typeof media === "string") {
    mediaComponent = <video src={media} autoPlay muted loop />
  } else {
    mediaComponent = <div></div>
  }

  return (
    <article className={styles.thumb} data-entrance-animation>
      <div className={styles.mediaWrapper}>
        {mediaComponent}
      </div>
      <div className={styles.details}>
        <h3>
          {link ? (
            <Link href={link}>{title}</Link>
          ) : title}
        </h3>
        <p>{description}</p>
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