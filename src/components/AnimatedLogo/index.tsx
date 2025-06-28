import React from 'react';
import Lottie, { useLottie, LottieRefCurrentProps } from 'lottie-react'
import animatedLogo from './animated-logo.json'
import styles from './styles.module.css'

type AnimatedLogoProps = {
  compact: boolean
}

export default function AnimatedLogo({compact = false} : AnimatedLogoProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);
  const { play, setDirection } = useLottie({ animationData: animatedLogo });

  React.useEffect(() => {
    if (compact) {
      lottieRef.current!.setDirection(1);
      lottieRef.current!.play();
    } else {
      lottieRef.current!.setDirection(-1);
      lottieRef.current!.play();
    }
  }, [compact, play, setDirection]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animatedLogo}
      loop={false}
      autoplay={false}
      className={styles.logo}
      rendererSettings={{
        title: "Nick Beuchat",
        progressiveLoad: true
      }}
      onEnterFrame={() => {
        setIsLoaded(true);
      }}
      data-lottie-loaded={isLoaded}
    />
  );
}