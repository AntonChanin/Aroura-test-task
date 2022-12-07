import { createElement, FC } from 'react';

import { PostModel } from '../../models/model';
import uuid from '../../utils/uuid';
import CommentTree from '../CommentTree';
import classes from './PostCard.module.scss';

type Props = {
  model: PostModel;
};

const PostCard: FC<Props> = (props) => {
  const { model: { id, images, description, published, comments } } = props;

  return createElement('div', { className: `${classes.postCardContainer}` }, 
    createElement('article', null, description),
    createElement('div', null,
      images?.map(
        (image, index: number) => createElement('img', { ...uuid({ name: 'image', seed: index }), className: `${classes.image}`, src: image }),
      ),
    ),
    createElement('p', null, published),
    createElement(CommentTree, { comments, }),
  );
};

export default PostCard;
