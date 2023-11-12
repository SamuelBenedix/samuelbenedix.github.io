/* eslint-disable no-useless-escape */
import React, { ChangeEvent, useState } from 'react';
import { InputProps } from '../../../@types/input';
import { colors } from '../../../assets';
import Button from '../Button';
import Gap from '../Gap';
import {
  styContainer,
  styLabel,
  styTextInput,
  styWrapper,
  styErrorText,
} from './styles';
import { FaMinus } from 'react-icons/fa';

const Input = (props: InputProps) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[\w&.\-]*$/;
    props.onChange(value);

    if (!value.match(regex)) {
      setIsError(true);
      setErrorMessage("Please don't type special character and space in input");
    } else {
      setIsError(false);
    }
  };

  return (
    <div className={styContainer}>
      {props.label && (
        <label htmlFor={styLabel} className={styLabel}>
          {props.label}
        </label>
      )}
      <div id={styLabel} className={styWrapper}>
        {props.isDelete && (
          <React.Fragment>
            <Button icon={true} isDanger={true} onClick={props.onClick}>
              <FaMinus fontSize={25} color={colors.primaryWhite} />
            </Button>
            <Gap width={15} />
          </React.Fragment>
        )}
        <input
          className={styTextInput(
            isError ? colors.primaryBlue : colors.primaryRed
          )}
          type="text"
          data-testid='input'
          onChange={onChange}
          value={props.value}
          placeholder={props.placeHolder}
        />
      </div>
      {isError && (
        <span data-testid="error" className={styErrorText}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
