import React, { ReactElement } from 'react';
import { Hidden } from '@material-ui/core';
import Layout from '../components/shared/Layout';
import FeedPost from '../components/feed/FeedPost';
import UserCard from '../components/shared/UserCard';
import FeedSideSuggestions from '../components/feed/FeedSideSuggestions';
import { getDefaultPost } from '../data';
import LoadingScreen from '../components/shared/LoadingScreen';
import { useFeedPageStyles } from '../styles';
import { LoadingLargeIcon } from '../icons';

export default function FeedPage(): ReactElement {
  const classes = useFeedPageStyles();
  const [isEndOfFeed] = React.useState(true);

  const loading = false;
  if (loading) return <LoadingScreen />;

  return (
    <Layout title="Feed">
      <div className={classes.container}>
        <div>
          {Array.from({ length: 5 }, () => getDefaultPost()).map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>

        <Hidden smDown>
          <div className={classes.sidebarContainer}>
            <div className={classes.sidebarWrapper}>
              <UserCard avatarSize={50} />
              <FeedSideSuggestions />
            </div>
          </div>
        </Hidden>
        {!isEndOfFeed && <LoadingLargeIcon />}
      </div>
    </Layout>
  );
}
