import { createElement, FC } from 'react';
import { CommentModel } from '../../models/model';

import classes from './CommentCard.module.scss';

type Props = {
  seed?: string;
  model: CommentModel;
  actions?: string[];
}

const CommentCard: FC<Props> = (props) => {
  const { seed, model, actions = ['Add', 'Remove']  } = props;
  const { id, author, avatar, comment, published } = model;

  return createElement('div', { className: `${classes.commentCardContainer}` }, 
    [
      createElement('h2', { className: classes.fontBold, key: 'h2_0' }),
        createElement('p', { className: `${classes.nav}`, key: 'p_0' }, [
          createElement('span', null, 'Author:'),
          createElement('span', { className: '' }, author),
        ]),
        createElement('p', { className: `${classes.nav}`, key: 'p_0' }, `${comment} ${published}`),
        createElement('img', { className: `${classes.nav}`, key: 'p_0', src: avatar }),
    ]
  );
};

export default CommentCard;
