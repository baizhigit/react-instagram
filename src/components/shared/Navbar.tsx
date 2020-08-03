import React, { ReactElement } from 'react';
import { AppBar, Hidden, InputBase, Avatar, Fade, Grid, Typography, Zoom } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useNProgress } from '@tanem/react-nprogress';
import NotificationList from '../notification/NotificationList';
import NotificationTooltip from '../notification/NotificationTooltip';
import {
  LoadingIcon,
  AddIcon,
  HomeActiveIcon,
  HomeIcon,
  ExploreActiveIcon,
  ExploreIcon,
  LikeIcon,
  LikeActiveIcon,
} from '../../icons';
import { useNavbarStyles, WhiteTooltip, RedTooltip } from '../../styles';
import logo from '../../images/logo.png';
import { defaultCurrentUser, getDefaultUser, User } from '../../data';

type NavbarProps = {
  minimalNavbar: boolean;
};

function Navbar({ minimalNavbar }: NavbarProps): ReactElement {
  const classes = useNavbarStyles();
  const history = useHistory();
  const [isLoadingPage, setLoadingPage] = React.useState(true);
  const path = history.location.pathname;

  React.useEffect(() => {
    setLoadingPage(false);
  }, [path]);

  return (
    <>
      <Progress isAnimating={isLoadingPage} />
      <AppBar className={classes.appBar}>
        <section className={classes.section}>
          <Logo />
          {!minimalNavbar && (
            <>
              <Search history={history} />
              <Links path={path} />
            </>
          )}
        </section>
      </AppBar>
    </>
  );
}

function Logo(): ReactElement {
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
interface History {
  push(path: string): void;
}
type SearchProps = {
  history: History;
};

function Search({ history }: SearchProps): ReactElement {
  const classes = useNavbarStyles();
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<User[]>([]);
  // const [loading, setLoading] = React.useState(false);
  const [loading] = React.useState(false);

  const hasResults = Boolean(query) && results.length > 0;

  React.useEffect(() => {
    if (!query.trim()) return;

    setResults(Array.from({ length: 5 }, () => getDefaultUser()));
  }, [query]);

  function handleClearInput() {
    setQuery('');
  }

  return (
    <Hidden only="xs">
      <WhiteTooltip
        arrow
        interactive
        TransitionComponent={Fade}
        open={hasResults}
        title={
          hasResults && (
            <Grid className={classes.resultContainer} container>
              {results.map((result) => (
                <Grid
                  key={result.id}
                  item
                  className={classes.resultLink}
                  onClick={() => {
                    history.push(`/${result.username}`);
                    handleClearInput();
                  }}
                >
                  <div className={classes.resultWrapper}>
                    <div className={classes.avatarWrapper}>
                      <Avatar src={result.profileImage} alt="user avatar" />
                    </div>
                    <div className={classes.nameWrapper}>
                      <Typography variant="body1">{result.username}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {result.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        }
      >
        <InputBase
          className={classes.input}
          onChange={(event) => setQuery(event.target.value)}
          startAdornment={<span className={classes.searchIcon} />}
          endAdornment={
            loading ? (
              <LoadingIcon />
            ) : (
              <span
                onClick={handleClearInput}
                onKeyPress={handleClearInput}
                role="button"
                tabIndex={0}
                aria-label="Clear"
                className={classes.clearIcon}
              />
            )
          }
          placeholder="Search"
          value={query}
        />
      </WhiteTooltip>
    </Hidden>
  );
}

type LinksProps = {
  path: string;
};

function Links({ path }: LinksProps): ReactElement {
  const classes = useNavbarStyles();
  const [showList, setList] = React.useState(false);
  const [showTooltip, setTooltip] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(handleHideTooltip, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function handleToogleList() {
    setList((prev) => !prev);
  }

  function handleHideTooltip() {
    setTooltip(false);
  }

  return (
    <div className={classes.linksContainer}>
      {showList && <NotificationList handleHideList={handleToogleList} />}
      <div className={classes.linksWrapper}>
        <Hidden xsDown>
          <AddIcon />
        </Hidden>
        <Link to="/">{path === '/' ? <HomeActiveIcon /> : <HomeIcon />}</Link>
        <Link to="/explore">{path === '/explore' ? <ExploreActiveIcon /> : <ExploreIcon />}</Link>
        <RedTooltip
          arrow
          interactive
          TransitionComponent={Zoom}
          open={showTooltip}
          onOpen={handleHideTooltip}
          title={<NotificationTooltip />}
        >
          <div
            className={classes.notifications}
            onClick={handleToogleList}
            onKeyPress={handleToogleList}
            role="button"
            tabIndex={0}
          >
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
        </RedTooltip>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div className={path === `/${defaultCurrentUser.username}` ? classes.profileActive : ''} />
          <Avatar src={defaultCurrentUser.profileImage} className={classes.profileImage} />
        </Link>
      </div>
    </div>
  );
}

type ProgressProps = {
  isAnimating: boolean;
};

function Progress({ isAnimating }: ProgressProps) {
  const classes = useNavbarStyles();
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <div
      className={classes.progressContainer}
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className={classes.progressBar}
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      >
        <div className={classes.progressBackground} />
      </div>
    </div>
  );
}

export default Navbar;
