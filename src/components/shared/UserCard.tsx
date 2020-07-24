import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';
import { useUserCardStyles } from '../../styles';
import { defaultUser, User } from '../../data';

type UserCardTypes = {
  user?: User;
  avatarSize?: number;
};

function UserCard({ user = defaultUser, avatarSize = 44 }: UserCardTypes): JSX.Element {
  const classes = useUserCardStyles({ avatarSize });
  const { username, name, profileImage } = user;

  return (
    <div className={classes.wrapper}>
      <Link to={`/${username}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <Avatar src={profileImage} alt="User avatar" className={classes.avatar} />
      </Link>
      <div className={classes.nameWrapper}>
        <Link to={`/${username}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Typography variant="subtitle2" className={classes.typography}>
            {username}
          </Typography>
        </Link>
        <Typography color="textSecondary" variant="body2" className={classes.typography}>
          {name}
        </Typography>
      </div>
    </div>
  );
}

export default UserCard;
