import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderProps } from '../../../@types/header';
import { ImgArrowLeft, ImgEdit } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { styContainer, styLabel } from './style';

const HeaderNavigation = (props: HeaderProps) => {
  const { onClick, isEditBtn, label } = props;
  const navigate = useNavigate();

  return (
    <div className={styContainer}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        icon={true}
        testid="header-button"
      >
        <img src={ImgArrowLeft} alt="icon-back" />
      </Button>
      {label && (
        <div data-testid="header-label" className={styLabel}>
          {label}
        </div>
      )}
      <Gap width={20} />
      {isEditBtn && (
        <Button testid="header-edit" onClick={onClick} icon={true}>
          <img src={ImgEdit} alt="icon-edit" />
        </Button>
      )}
    </div>
  );
};

export default HeaderNavigation;
