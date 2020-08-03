import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import { useFollowButtonStyles } from '../../styles';

type FollowButtonProps = {
  side?: boolean;
};

function FollowButton({ side = false }: FollowButtonProps): ReactElement {
  const classes = useFollowButtonStyles({ side });
  const [isFollowing, setFollowing] = React.useState(false);

  const followButton = (
    <Button
      variant={side ? 'text' : 'contained'}
      color="primary"
      className={classes.button}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      Follow
    </Button>
  );

  const followingButton = (
    <Button
      variant={side ? 'text' : 'outlined'}
      className={classes.button}
      onClick={() => setFollowing(false)}
      fullWidth
    >
      Following
    </Button>
  );

  return isFollowing ? followingButton : followButton;
}

export default FollowButton;
