'use client'

import React from 'react';

type VisuallyHiddenProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

const VisuallyHidden = ({ children, ...delegated }: Readonly<VisuallyHiddenProps>) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Alt') {
          setForceShow(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <span className="visually-hidden" {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;