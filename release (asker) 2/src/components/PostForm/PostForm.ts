import { createElement, FC, useState } from 'react';
import useAppSelector from '../../hooks/redux';
import { useLazyGetMessegesQuery, useLazyPostMessageQuery } from '../../store/localApi/message.api';

import Button from '../Button';
import classes from './PostForm.module.scss';

type Props = {
  replyTo: number
}

const PostForm: FC<Props> = (props) => {
  const { replyTo } = props;
  const [currentInput, setCurrentInput] = useState('');
  const { me } = useAppSelector((state) => state.users);
  const [postMessage] = useLazyPostMessageQuery();
  
  return createElement(
    'form', { className: classes.form }, createElement('input', {
      className: classes.input,
      placeholder: 'write comment here...',
      onChange: (event) => {
        setCurrentInput(event.target.value);
      },
    }),
    createElement(
      Button,
      {
        type: 'text',
        onClick: () => {
          if (currentInput) {
            postMessage(`${me.id}&${currentInput}&${replyTo}`);
          };
        },
      },
      'Post comment'
    ),
  );
}

export default PostForm;
