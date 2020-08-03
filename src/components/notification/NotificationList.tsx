import React, { ReactElement } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNotificationListStyles } from '../../styles';
import FollowButton from '../shared/FollowButton';
import { defaultNotifications, ILikeNotification } from '../../data';

type NotificationListProps = {
  handleHideList: () => void;
};

function NotificationList({ handleHideList }: NotificationListProps): ReactElement {
  const classes = useNotificationListStyles();
  const ref = useOnclickOutside(() => {
    handleHideList();
  });

  return (
    <Grid ref={ref} className={classes.listContainer} container>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === 'like';
        const isFollow = notification.type === 'follow';

        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar src={notification.user.profileImage} alt="User avatar" />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <Typography variant="body1">{notification.user.username}</Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" className={classes.typography}>
                  {isLike && `likes your photo. 4d`}
                  {isFollow && `started following you. 5d`}
                </Typography>
              </div>
            </div>
            <div>
              {isLike && (
                <Link to={`/p/${(notification as ILikeNotification).post}`}>
                  <Avatar src={(notification as ILikeNotification).post.media} alt="post cover" />
                </Link>
              )}
              {isFollow && <FollowButton />}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
