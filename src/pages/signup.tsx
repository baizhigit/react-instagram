import React, { ReactElement } from 'react';
import { Card, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/Seo';
import { LoginWithFacebook } from './login';
import { useSignUpPageStyles } from '../styles';

function SignUpPage(): ReactElement {
  const classes = useSignUpPageStyles();

  return (
    <>
      <SEO title="Sign up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook color="primary" iconColor="white" variant="contained" />
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="secondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <form>
              <TextField
                fullWidth
                variant="filled"
                margin="dense"
                label="Email"
                type="email"
                className={classes.textField}
              />
              <TextField fullWidth variant="filled" margin="dense" label="Full Name" className={classes.textField} />
              <TextField
                fullWidth
                variant="filled"
                margin="dense"
                label="Username"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                fullWidth
                variant="filled"
                margin="dense"
                label="Password"
                type="password"
                className={classes.textField}
                autoComplete="new-password"
              />
              <Button fullWidth variant="contained" color="primary" type="submit" className={classes.button}>
                Sign Up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography variant="body2" align="right">
              Have an account?
            </Typography>
            <Link
              to="/accounts/login"
              className={classes.loginButton}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <Button color="primary">Log in</Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
