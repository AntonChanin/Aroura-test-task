import { createElement, FC, PropsWithChildren, useState } from 'react';

import { MessageModel } from '../../models/model';
import { getDecodeDate, getDecodeURIComponent } from '../../utils/getDecode';
import Accordion from '../Accordion/Accordion';
import PostForm from '../PostForm';
import ShortUserInfo from '../ShortUserInfo';

import classes from './CommentCard.module.scss';

type Props = {
  seed?: string;
  model: MessageModel;
  comments?: MessageModel[];
  actions?: string[];
}

const CommentCard: FC<PropsWithChildren<Props>> = (props) => {
  const { model, comments, children } = props;
  const { author, message, id, timestamp } = model;
  const [isOpenCommentTree, setIsOpsenCommentTree] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  return createElement('div', { className: classes.commentCard }, 
    createElement(
      ShortUserInfo,
      { author },
    ),
    createElement('p', null, `${getDecodeURIComponent(message)} `),
    isOpenForm ? createElement(PostForm, { replyTo: id }) : null,
    createElement(
      Accordion,
      {
        title: `Published: ${getDecodeDate(timestamp)}`,
        buttons: [{
          value: isOpenForm ? 'Cancel comment' : 'Write comment',
          onClick: () => setIsOpenForm(!isOpenForm),
        },
        {
          value: `${isOpenCommentTree ? 'Hidden comments' : 'See comments'} (${comments?.length ?? 0})`,
          onClick: () => setIsOpsenCommentTree(!isOpenCommentTree),
        }],
      },
      isOpenCommentTree ? children : null,
    ),
  );
};

export default CommentCard;
