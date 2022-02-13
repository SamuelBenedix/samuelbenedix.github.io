import React, { useState } from 'react';
import {
  styWrapper,
  styLabel,
  styIndicator,
  styContainer,
  styInputElement,
  styTextArea,
  styError,
} from './styles';

const Input = ({ label, inputArea, onChange, value, required, error }) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  if (inputArea) {
    return (
      <div className={styWrapper}>
        <div className={styLabel(value !== '' ? true : focus)}>
          {label}
          {required && <div className={styIndicator}>*</div>}
        </div>
        <div className={styContainer}>
          <textarea
            onBlur={onBlur}
            onFocus={onFocus}
            type="text"
            className={styTextArea(focus)}
            onChange={onChange}
            value={value}
            name={label}
          />
        </div>
        {error && <span className={styError(error)}>{error}</span>}
      </div>
    );
  }

  return (
    <div className={styWrapper}>
      <div className={styLabel(value !== '' ? true : focus)}>
        {label}
        {required && <div className={styIndicator}>*</div>}
      </div>
      <div className={styContainer}>
        <input
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          type="text"
          className={styInputElement(focus)}
          name={label}
        />
      </div>
      {error && <span className={styError(error)}>{error}</span>}
    </div>
  );
};

export default Input;
