import { createElement, FC, useState } from 'react';

import { Message } from '../../models/model';
import { getDecodeDate, getDecodeURIComponent } from '../../utils/getDecode';
import Accordion from '../Accordion/Accordion';
import PostForm from '../PostForm';
import ShortUserInfo from '../ShortUserInfo';

import classes from './CommentCard.module.scss';

type Props = {
  seed?: string;
  model: Message;
  comments?: Message[];
  actions?: string[];
}

const CommentCard: FC<Props> = (props) => {
  const { model } = props;
  const { author, message, id, timestamp } = model;
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
        buttonText: isOpenForm ? 'Cancel comment' : 'Write comment',
        onClick: () => setIsOpenForm(!isOpenForm),
      },
    ),
  );
};

export default CommentCard;
