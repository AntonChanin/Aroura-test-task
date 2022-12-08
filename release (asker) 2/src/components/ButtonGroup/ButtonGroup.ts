import { createElement, FC, Fragment, PropsWithChildren } from 'react';

import { ButtonModel } from '../../models/model';
import Button from '../Button';
import uuid from '../../utils/uuid';
import classes from './ButtonGroup.module.scss';

type Props = {
  buttons: ButtonModel[];
}

const ButtonGroup: FC<PropsWithChildren<Props>> = (props) => {
  const { buttons } = props;
  return createElement(
    Fragment,
    null,
    createElement(
      'div',
      { className: classes.buttonGroup },
      buttons.map(
        ({ value, onClick }, index) => (
          createElement(
            Button,
            { ...uuid({ name: `button_group${index}`, seed: index + 1 }), onClick, variant: 'text' },
            value ?? null
          )
        ),
      ),
    ),
  );
}

export default ButtonGroup;
