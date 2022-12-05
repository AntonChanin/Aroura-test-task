import { createElement, FC } from 'react';
import { Message } from '../../models/model';
import { getDecodeDate, getDecodeURIComponent } from '../../utils/getDecode';

import classes from './CommentCard.module.scss';

type Props = {
  seed?: string;
  model: Message;
  actions?: string[];
}

const CommentCard: FC<Props> = (props) => {
  const { seed, model, actions = ['Add', 'Remove']  } = props;
  const { id, author, message, replyTo, timestamp } = model;

  return createElement('div', { className: `${classes.commentCardContainer}` }, 
    [
      createElement('h2', { className: classes.fontBold }),
        createElement('p', null, [
          createElement('span', null, 'Author:'),
          createElement('img', { className: '', alt: '', src: `data:image/png;base64,${author}` }),
        ]),
        createElement('p', null, `${getDecodeURIComponent(message)} `),
        createElement('p', null, `Published: ${getDecodeDate(timestamp)}`),
    ]
  );
};

export default CommentCard;
