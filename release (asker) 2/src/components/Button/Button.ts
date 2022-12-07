import { createElement, FC, PropsWithChildren } from 'react';

import classes from './Button.module.scss'; 

type Props = {
  className?: string;
  onClick?(event: MouseEvent): void;
  onSubmit?(event?: MouseEvent): void;
  variant?: 'fill' | 'outline' | 'text';
  type?: '' | 'submit'
}

const Button: FC<PropsWithChildren<Props>> = (props) =>{
  const { className, onClick, onSubmit, variant = 'fill', type, children } = props
  return createElement('button', { type, className: `${classes[`button_${variant}`]} ${className}`, onClick, onSubmit }, children);
}

export default Button;
