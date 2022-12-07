import { createElement, FC, PropsWithChildren } from 'react';

import classes from './Button.module.scss'; 

type Props = {
  className?: string;
  onClick?(event: MouseEvent): void;
  onSubmit?(event?: MouseEvent): void;
  type?: 'fill' | 'outline' | 'text';
}

const Button: FC<PropsWithChildren<Props>> = (props) =>{
  const { className, onClick, onSubmit, type = 'fill', children } = props
  return createElement('button', { className: `${classes[`button_${type}`]} ${className}`, onClick, onSubmit }, children);
}

export default Button;
