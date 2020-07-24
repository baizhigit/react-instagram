import React from 'react';
import { useLayoutStyles } from '../../styles';
import SEO from './Seo';
import Navbar from './Navbar';

type LayoutTypes = {
    children: React.ReactNode;
    title: string;
    marginTop?: number;
};

function Layout({ children, title, marginTop = 60 }: LayoutTypes): JSX.Element {
    const classes = useLayoutStyles();

    return (
        <section className={classes.section}>
            <SEO title={title} />
            <Navbar />
            <main className={classes.main} style={{ marginTop }}>
                <section className={classes.childrenWrapper}>
                    <div className={classes.children}>{children}</div>
                </section>
            </main>
        </section>
    );
}

export default Layout;
