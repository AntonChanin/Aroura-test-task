import { createElement, FC, Fragment, PropsWithChildren } from 'react';

import Button from '../Button';
import classes from './Accordion.module.scss';

type Props = {
  title?: string;
  buttonText?: string;
  onClick?(event: MouseEvent): void;
}

const Accordion: FC<PropsWithChildren<Props>> = (props) => {
  const { title, buttonText, onClick, children } = props;
  return createElement(
    Fragment,
    null,
    createElement(
      'div',
      { className: classes.accordion },
      createElement('span', null, title ?? null),
      createElement(Button, { onClick, type: 'text' }, buttonText ?? null),
    ),
    createElement('hr', { className: classes.accordionBottom }),
    children
  );
}

export default Accordion;
