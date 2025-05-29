import React from 'react';
import { useLottie } from 'lottie-react'
import animatedLogo from './animated-logo.json'
import styles from './AnimatedLogo.module.css'

type AnimatedLogoProps = {
  compact: boolean
}

export default function AnimatedLogo({compact = false} : AnimatedLogoProps) {
  const { View, play, setDirection } = useLottie({
    animationData: animatedLogo,
    loop: false,
    autoplay: false,
    className: styles.logo
  });

  React.useEffect(() => {
    if (compact) {
      setDirection(1);
      play();
    } else {
      setDirection(-1);
      play();
    }
  }, [compact, play, setDirection]);

  return View;
}