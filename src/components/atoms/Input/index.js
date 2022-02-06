import React, { useState } from 'react';
import {
  styWrapper,
  styLabel,
  styIndicator,
  styContainer,
  styInputElement,
  styTextArea,
} from './styles';

const Input = ({ label, inputArea }) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  if (inputArea) {
    return (
      <div className={styWrapper}>
        <div className={styLabel(focus)}>
          {label}
          <div className={styIndicator}>*</div>
        </div>
        <div className={styContainer}>
          <textarea
            onBlur={onBlur}
            onFocus={onFocus}
            type="text"
            className={styTextArea(focus)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styWrapper}>
      <div className={styLabel(focus)}>
        {label}
        <div className={styIndicator}>*</div>
      </div>
      <div className={styContainer}>
        <input
          onBlur={onBlur}
          onFocus={onFocus}
          type="text"
          className={styInputElement(focus)}
        />
      </div>
    </div>
  );
};

export default Input;
