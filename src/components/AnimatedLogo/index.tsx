import React from 'react';
import { useLottie } from 'lottie-react'
import animatedLogo from './animated-logo.json'
import styles from './styles.module.css'

type AnimatedLogoProps = {
  compact: boolean
}

// to do: seeking?

export default function AnimatedLogo({compact = false} : AnimatedLogoProps) {
  const { View, play, setDirection } = useLottie({
    animationData: animatedLogo,
    loop: false,
    autoplay: false,
    className: styles.logo,
    rendererSettings: {
      title: "Nick Beuchat",
      progressiveLoad: true,
    }
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