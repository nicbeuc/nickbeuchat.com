import NextImage from "next/image"
import { ImageProps as NextImageProps } from "next/image"
import styles from './styles.module.css'

interface ImageProps extends NextImageProps {
  caption?: string,
  aspectRatio?: number,
  entranceAnimation?: boolean
}

export default function Image({ caption, aspectRatio = 1, entranceAnimation = false, ...rest }: ImageProps) {
  const imageStyles = { "--image-ratio": aspectRatio } as React.CSSProperties

  return (
    <figure style={imageStyles} className={styles.image} data-entrance-animation={entranceAnimation || undefined}>
      <NextImage {...rest}/>
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  )
}