import React, { ReactElement } from 'react';
import { useLayoutStyles } from '../../styles';
import SEO from './Seo';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
  minimalNavbar?: boolean;
  title: string;
  marginTop?: number;
};

function Layout({ children, minimalNavbar = false, title, marginTop = 60 }: LayoutProps): ReactElement {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main className={classes.main} style={{ marginTop }}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

export default Layout;
