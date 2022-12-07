import { createElement, FC, useState } from 'react';
import useAppSelector from '../../hooks/redux';
import { useLazyPostMessageQuery } from '../../store/localApi/message.api';

import Button from '../Button';
import classes from './PostForm.module.scss';

type Props = {
  replyTo: number
  onSubmit?(): void;
}

const PostForm: FC<Props> = (props) => {
  const { replyTo, onSubmit } = props;
  const [currentInput, setCurrentInput] = useState('');
  const { me } = useAppSelector((state) => state.users);
  const [postMessage] = useLazyPostMessageQuery();
  
  return createElement(
    'form',
    {
      className: classes.form,
      onSubmit: (event: SubmitEvent) => {
        event.preventDefault();
        onSubmit?.();
        if (currentInput) {
          me.id && postMessage(`${me.id}&${currentInput}&${replyTo}`);
        };
      }
    },
    createElement('input', {
      className: classes.input,
      placeholder: 'write comment here...',
      onChange: (event) => {
        setCurrentInput(event.target.value);
      },
    }),
    createElement(
      Button,
      {
        type: 'submit',
        variant: 'text',
      },
      'Post comment'
    ),
  );
}

export default PostForm;
