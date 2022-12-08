import { createElement, FC, Fragment, PropsWithChildren } from 'react';

import { ButtonModel } from '../../models/model';
import Button from '../Button';
import uuid from '../../utils/uuid';
import classes from './Accordion.module.scss';



type Props = {
  title?: string;
  buttons: ButtonModel[];
}

const Accordion: FC<PropsWithChildren<Props>> = (props) => {
  const { title, buttons, children } = props;
  return createElement(
    Fragment,
    null,
    createElement(
      'div',
      { className: classes.accordion },
      createElement('span', null, title ?? null),
      buttons.map(
        ({ value, onClick }) => (
          createElement(
            Button,
            { ...uuid({ name: `button_accordion${''}`, seed: 1 }), onClick, variant: 'text' },
            value ?? null
          )
        ),
      ),
    ),
    createElement('hr', { className: classes.accordionBottom }),
    children ?? null,
  );
}

export default Accordion;
