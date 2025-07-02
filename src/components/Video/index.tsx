import styles from './styles.module.css'

type VideoProps = {
  sources: Array<{src: string, type: string}> | undefined,
  autoplay?: boolean,
  loop?: boolean
}

export default function Video({ sources, autoplay = true, loop = true }: VideoProps) {
  return (
    <div className={styles.wrapper}>
      <video
        width={750}
        height={500}
        preload="none"
        controls={false}
        autoPlay={autoplay}
        loop={loop}
        muted
        playsInline
      >
        {sources?.map(({ src, type }, i) => (
          <source src={src} type={type} key={i} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}