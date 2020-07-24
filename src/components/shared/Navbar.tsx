import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useNavbarStyles } from '../../styles';
import logo from '../../images/logo.png';

function Navbar(): JSX.Element {
    const classes = useNavbarStyles();

    return (
        <AppBar className={classes.appBar}>
            <section className={classes.section}>
                <Logo />
            </section>
        </AppBar>
    );
}

function Logo() {
    const classes = useNavbarStyles();

    return (
        <div className={classes.logoContainer}>
            <Link to="/">
                <div className={classes.logoWrapper}>
                    <img src={logo} alt="instagram" className={classes.logo} />
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
