import Link from 'next/link';
import Video from '@/components/Video';
import { PROJECT_TYPE } from '@/utils/constants';
import styles from './styles.module.css'

// to do: create video component, images slides component

export default function ProjectThumb(props: PROJECT_TYPE) {
  const {
    title,
    description,
    link,
    roles,
    thumbnailMedia
  } = props;

  const renderMediaComponent = () => {
    if (thumbnailMedia?.videos) {
      return <Video sources={thumbnailMedia.videos} />
    } else if (thumbnailMedia?.images) {
      return <p>Images go here</p>
    }
  }

  return (
    <article className={styles.thumb} data-entrance-animation>
      <div className={styles.mediaWrapper}>
        {/* {renderMediaComponent()} */}
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