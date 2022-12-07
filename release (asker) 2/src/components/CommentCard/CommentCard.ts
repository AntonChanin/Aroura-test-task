import { createElement, FC, Fragment, useState } from 'react';
import { Message } from '../../models/model';
import { useLazyGetMessegesQuery } from '../../store/localApi/message.api';
import { useGetUsersQuery } from '../../store/localApi/users.api';
import { getDecodeDate, getDecodeURIComponent } from '../../utils/getDecode';

import classes from './CommentCard.module.scss';

type Props = {
  seed?: string;
  model: Message;
  comments?: Message[];
  actions?: string[];
}

const CommentCard: FC<Props> = (props) => {
  const { model  } = props;
  const { author, message, id, replyTo, timestamp } = model;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [postMessage] = useLazyGetMessegesQuery();
  const { isLoading, data: Me } = useGetUsersQuery('');

  return createElement('div', { className: classes.commentCard }, 
    [
      createElement(Fragment, null, [
        createElement('span', null, 'Author:'),
        createElement('img', { className: '', alt: '', src: `data:image/png;base64,${author}` }),
      ]),
      createElement('p', null, `${getDecodeURIComponent(message)} `),
      
      isOpenForm ? createElement(
        'form', { className: classes.writeCommentRow }, createElement('input', {
          className: classes.commentCardInput,
          placeholder: 'write comment here...',
          onChange: (event) => {
            setCurrentInput(event.target.value);
          },
        }), createElement('button', { className: classes.commentCardButton, onSubmit: () => { 
          postMessage(`${'author'}&${currentInput}&${id}`); } }, 'Post comment')
      ) : null,
      createElement(
        'div',
        { className: classes.writeCommentRow },
        createElement('span', null, `Published: ${getDecodeDate(timestamp)}`),
        createElement('button', { className: classes.commentCardButton, onClick: () => setIsOpenForm(!isOpenForm) }, isOpenForm ? 'Cancel comment' : 'Write comment'),
      ),
      createElement('hr', { className: classes.bottomBorder }),
    ]
  );
};

export default CommentCard;
