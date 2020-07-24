import React from 'react';
import { useLoadingScreenStyles } from '../../styles';
import { LogoLoadingIcon } from '../../icons';

function LoadingScreen(): JSX.Element {
  const classes = useLoadingScreenStyles();

  return (
    <section className={classes.section}>
      <span>
        <LogoLoadingIcon />
      </span>
    </section>
  );
}

export default LoadingScreen;
