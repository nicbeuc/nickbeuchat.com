'use client'

import React from "react"
import Image from "next/image"
import styles from './styles.module.css'
import VisuallyHidden from "../VisuallyHidden"
import Icon from "../Icon"

type ImageCarouselProps = {
  images: Array<{
    src: string,
    alt: string
  }>
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function handleNextBtnClick() {
    if (currentIndex == images.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }

  function handlePrevBtnClick() {
    if (currentIndex == 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <div className={styles.wrapper}>
      <ul>
        {images.map(({ src, alt }, i: number) => (
          <li key={i} data-active={i == currentIndex || undefined}>
            <Image src={src} width={750} height={500} alt={alt} />
          </li>
      ))}
      </ul>
      <button onClick={handlePrevBtnClick} className={styles.button} data-direction="prev">
        <VisuallyHidden>View Previous Image</VisuallyHidden>
        <Icon name="arrow-left" />
      </button>
      <button onClick={handleNextBtnClick} className={styles.button} data-direction="next">
        <VisuallyHidden>View Next Image</VisuallyHidden>
        <Icon name="arrow-right" />
      </button>
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {`Item ${currentIndex + 1} of ${images.length}`}
      </div>
    </div>
  )
}