import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Hidden, Divider, TextField } from '@material-ui/core';
import Truncate from 'react-truncate';
import { useFeedPostStyles } from '../../styles';
import UserCard from '../shared/UserCard';
import { MoreIcon, CommentIcon, ShareIcon, UnlikeIcon, LikeIcon, RemoveIcon, SaveIcon } from '../../icons';
import { IPost } from '../../data';

function FeedPost({ post }: IPost): ReactElement {
  const classes = useFeedPostStyles();
  const [showCaption, setShowCaption] = React.useState(false);
  const { id, media, likes, user, caption, comments } = post;

  return (
    <>
      <article className={classes.article}>
        <div className={classes.postHeader}>
          <UserCard user={user} />
          <MoreIcon className={classes.moreIcon} />
        </div>
        <div>
          <img src={media} alt="Post media" className={classes.image} />
        </div>
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.like} variant="subtitle2">
            <span>{likes === 1 ? '1 like' : `${likes} likes`} </span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <Typography variant="subtitle2" component="span" className={classes.username}>
                {user.username}
              </Typography>
            </Link>

            <div className={classes.captionWrapper}>
              <Truncate
                lines={!showCaption && 1}
                className={classes.caption}
                ellipsis={
                  <Button className={classes.moreButton} onClick={() => setShowCaption(true)}>
                    more
                  </Button>
                }
              >
                <Typography variant="subtitle2" component="span" dangerouslySetInnerHTML={{ __html: caption }} />
              </Truncate>
            </div>
          </div>
          <Link to={`/p/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Typography variant="body2" component="div" className={classes.commentsLink}>
              View all {comments.length} comments
            </Typography>
          </Link>
          {comments.map((comment) => (
            <div key={comment.id}>
              <Link to={`/${comment.userId}`}>
                <Typography variant="subtitle2" component="span" className={classes.commentUsername}>
                  {comment.userId}
                </Typography>
                <Typography variant="body2" component="span">
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography color="textSecondary" className={classes.datePosted}>
            5 DAYS AGO
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment />
        </Hidden>
      </article>
    </>
  );
}

function LikeButton() {
  const classes = useFeedPostStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;
  const onClick = liked ? handleUnLike : handleLike;

  function handleLike() {
    setLiked(true);
  }

  function handleUnLike() {
    setLiked(false);
  }

  return <Icon onClick={onClick} className={className} />;
}

function SaveButton() {
  const classes = useFeedPostStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    setSaved(true);
  }

  function handleRemove() {
    setSaved(false);
  }

  return <Icon onClick={onClick} className={classes.saveIcon} />;
}

function Comment() {
  const classes = useFeedPostStyles();
  const [content, setContent] = React.useState('');

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={content}
        placeholder="Add a comment"
        multiline
        rowsMax={2}
        rows={1}
        className={classes.textField}
        onChange={(event) => setContent(event.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
      />
      <Button color="primary" className={classes.commentButton} disabled={!content.trim()}>
        Post
      </Button>
    </div>
  );
}

export default FeedPost;
