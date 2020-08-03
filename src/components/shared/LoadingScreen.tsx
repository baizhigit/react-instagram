import React, { ReactElement } from 'react';
import { useLoadingScreenStyles } from '../../styles';
import { LogoLoadingIcon } from '../../icons';

function LoadingScreen(): ReactElement {
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
