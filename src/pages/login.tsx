import React from 'react';
import { Card, CardHeader, TextField, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LoginWithFacebookTypes } from 'MUItypes';
import SEO from '../components/shared/Seo';
import { useLoginPageStyles } from '../styles';
import FacebookIconBlue from '../images/facebook-icon-blue.svg';
import FacebookIconWhite from '../images/facebook-icon-white.png';

function LoginPage(): JSX.Element {
  const classes = useLoginPageStyles();

  return (
    <>
      <SEO title="Login" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} />
            <form>
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
                className={classes.textField}
                autoComplete="current-password"
                type="password"
              />
              <Button fullWidth variant="contained" color="primary" type="submit" className={classes.button}>
                Log In
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="secondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue" variant="text" />
            <Button fullWidth color="secondary">
              <Typography variant="caption">Forgot Password?</Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography variant="body2" align="right">
              Don`&apos;`t have an account?
            </Typography>
            <Link to="/accounts/emailsignup" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <Button color="primary">Sign up</Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor, variant }: LoginWithFacebookTypes): JSX.Element {
  const classes = useLoginPageStyles();

  const facebookIcon = iconColor === 'blue' ? FacebookIconBlue : FacebookIconWhite;

  return (
    <Button fullWidth color={color} variant={variant}>
      <img src={facebookIcon} alt="facebook icon" className={classes.facebookIcon} />
      Log In with Facebook
    </Button>
  );
}

export default LoginPage;
