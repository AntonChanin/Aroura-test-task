import { createElement, FC, Fragment, useEffect, useState } from 'react';
import { Message } from '../../models/model';
import uuid from '../../utils/uuid';
import CommentCard from '../CommentCard';

import classes from './CommentTree.module.scss';

type Props = {
  comments: Message[];
}

type CommentGroup = {
  root: Message;
  body: Message[][];
}

const getPreData = (comments: Message[]): CommentGroup[] => Array(comments.length)
  .fill([])
  .map((_, index) => [comments[index]])
  .map((group) => comments
    .filter(({ id, replyTo }) => group[0].id === replyTo)
  )
  .filter((group) => group.length)
  .map((group) => ({ root: group[0], body: [group.slice(1, group.length)] }));

const CommentTree: FC<Props> = (props) => {
  const { comments } = props;

  const rootTrees = getPreData(comments).map(({ root, body }, index) => ({
    root,
    element: body[0].map((comment) => createElement(CommentCard, { model: comment })),
  }));


  let items = createElement(Fragment, null,
    comments?.length ? createElement(
      'div',
      { className: classes.commentCardTreeContainer, id: comments[0].id },
      comments.map(
        (message, index) => createElement(CommentCard, { ...uuid({ name: `commentCard_replayTo${''}`, seed: index }), model: message })
      ),
    ) : null, rootTrees.map(({ element }) => element),
  );

  return items;
};

export default CommentTree;
