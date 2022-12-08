import { createElement, FC, Fragment } from 'react';
import { MessageModel } from '../../models/model';
import getCommentsById from '../../utils/getCommentsById';
import uuid from '../../utils/uuid';
import CommentCard from '../CommentCard';

import classes from './CommentTree.module.scss';

type Props = {
  comments: MessageModel[];
  rootComments: MessageModel[];
}

const CommentTree: FC<Props> = (props) => {
  const { comments, rootComments: root } = props;

  let items = root?.length ? createElement(
    'div',
    { className: classes.commentCardTreeContainer, id: comments[0].id },
    root.map(
      (message, index) => createElement(
        CommentCard,
        { ...uuid({ name: `commentCard_replayTo${message.id}`, seed: index + message.id }), model: message },
        createElement(CommentTree, { comments, rootComments: getCommentsById(comments, message.id) }),
      )
    ),
  ) : null;

  return items;
};

export default CommentTree;
