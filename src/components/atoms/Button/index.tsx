import React from 'react';
import { cx } from '@emotion/css';
import {
  styBtnIcon,
  styBtnDanger,
  styBtnDelete,
  styPrimaryColor,
  styButton,
  stySecondaryColor,
  styIconBig,
  styBtnDeleteReverse,
  styButtonSecondary,
} from './style';
import { ButtonProps } from '../../../@types/button';

const Button = (props: ButtonProps) => {
  const {
    onClick,
    children,
    isDisabled,
    isDanger,
    isPrimary,
    isDelete,
    icon,
    type = 'button',
    reverse,
    isSecondary,
    testid,
  } = props;

  if (isDanger) {
    return (
      <button
        className={styBtnDanger}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        data-testid={testid}
      >
        {children}
      </button>
    );
  }

  if (isDelete) {
    return (
      <button
        className={reverse ? styBtnDeleteReverse : styBtnDelete}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        data-testid={testid}
      >
        {children}
      </button>
    );
  }
  if (isSecondary) {
    return (
      <button
        className={styButtonSecondary}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        data-testid={testid}
      >
        {children}
      </button>
    );
  }

  if (icon) {
    return (
      <button
        className={
          isPrimary
            ? cx(styBtnIcon, styPrimaryColor, styIconBig)
            : cx(styBtnIcon)
        }
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        data-testid={testid}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={
        isPrimary
          ? cx(styButton, styPrimaryColor)
          : cx(styButton, stySecondaryColor)
      }
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      data-testid={testid}
    >
      {children}
    </button>
  );
};

export default Button;
