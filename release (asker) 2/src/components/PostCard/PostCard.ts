import { createElement, FC } from 'react';

import { PostModel } from '../../models/model';
import uuidKey from '../../utils/uuid';
import CommentCard from '../CommentCard';
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
        (image, index: number) => createElement('img', { ...uuidKey({ name: 'image', seed: index }), className: `${classes.image}`, src: image }),
      ),
    ),
    createElement('p', null, published),
    createElement('div', { className: `${classes.comments}`},
      comments?.map(
        (commentModel, index) => createElement(CommentCard, { ...uuidKey({ name: 'commentCard', seed: index }), model: commentModel })
      ),
    ),
  );
};

export default PostCard;
