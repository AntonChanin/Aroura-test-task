import { createElement, FC, useState } from 'react';

import { PostModel } from '../../models/model';
import uuid from '../../utils/uuid';
import Accordion from '../Accordion/Accordion';
import CommentTree from '../CommentTree';
import PostForm from '../PostForm';
import classes from './PostCard.module.scss';

type Props = {
  model: PostModel;
};

const PostCard: FC<Props> = (props) => {
  const { model: { id, images, description, published, comments } } = props;
  const [isOpenCommentTree, setIsOpsenCommentTree] = useState(false);

  return createElement('div', { className: `${classes.postCardContainer}` }, 
    createElement('article', null, description),
    createElement('div', null,
      images?.map(
        (image, index: number) => createElement('img', { ...uuid({ name: 'image', seed: index }), className: `${classes.image}`, src: image }),
      ),
    ),
    createElement(
      Accordion,
      {
        title: `Published: ${published}`,
        buttonText: `${isOpenCommentTree ? 'Hidden comments' : 'See comments'} (${comments.length})`,
        onClick: () => setIsOpsenCommentTree(!isOpenCommentTree),
      },
      isOpenCommentTree ? createElement(CommentTree, { comments }) : null
    ),
    createElement(PostForm, { replyTo: 0 }),
  );
};

export default PostCard;
