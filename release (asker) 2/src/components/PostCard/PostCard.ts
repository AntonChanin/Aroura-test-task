import { createElement, FC } from 'react';

import { PostModel } from '../../models/model';
import CommentCard from '../CommentCard';
import classes from './PostCard.module.scss';

type Props = {
  model: PostModel;
};

const PostCard: FC<Props> = (props) => {
  const { model: { id, images, description, published, comments } } = props;

  return createElement('div', { className: `${classes.postCardContainer}` }, 
    [
      createElement('h2', { className: classes.fontBold, key: 'h2_0' }),
      createElement('article', { className: `${classes.nav}`, key: 'p_0' }, description),
      createElement('div', { className: `${classes.nav}`, key: 'p_0' },
        images.map(
          (image) => createElement('img', { className: `${classes.nav}`, key: 'p_0', src: image }),
        ),
      ),
      createElement('p', null, published),
      createElement('div', { className: `${classes.nav}`, key: 'p_0' },
        comments.map(
          (commentModel) => createElement(CommentCard, { model: commentModel })
        ),
      ),
    ],
  );
};

export default PostCard;
