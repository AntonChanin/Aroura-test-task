import { createElement, FC, useState } from 'react';
import useAppSelector from '../../hooks/redux';
import { Message } from '../../models/model';
import { getDecodeDate, getDecodeURIComponent } from '../../utils/getDecode';
import Accordion from '../Accordion/Accordion';
import PostForm from '../PostForm';

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
  const { userObj } = useAppSelector((state) => state.users);
  const { name, surname, image } = userObj[author];
  const authorFullName = `${getDecodeURIComponent(name)} ${getDecodeURIComponent(surname)}`

  return createElement('div', { className: classes.commentCard }, 
    createElement(
      'div',
      { className: classes.commentCardUserRow },
      createElement('span', { className: classes.userName }, `Author: ${authorFullName}`),
      createElement('img', { className: classes.commentCardAvatar, src: image?.replace('file/', 'filePublic/'), alt: '' }),
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
