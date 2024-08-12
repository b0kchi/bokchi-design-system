import React from 'react';
import '../styles/button.css';
import clsx from 'clsx';

interface IButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: string;
  onClick?: () => void;
  type?: 'textIcon' | 'onlyIcon' | 'onlyText';
  disabled?: boolean;
}

export default function Button({
  size = 'medium',
  ...props
}: IButtonProps) {

  return (
    <button
      type="button"
      className={clsx('BKButton', size)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
