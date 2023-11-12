import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ImgPhone } from '../../assets';
import {
  Button,
  Gap,
  HeaderNavigation,
  Modal,
  ProfilePict,
} from '../../components';

import {
  styTitle,
  styDetail,
  styDetailContainer,
  styDetailText,
  styPhoneContainer,
  styLabelDetail,
  styNumberDetail,
  styPhoneListContainer,
  styIcButton,
  styBtnDeleteWrapper,
  styContainer,
} from './styles';
import { ContactContext } from '../../context/Contacts';
import { ContactContextType } from '../../@types/contacts';

const ContactDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const { removeData }: ContactContextType = useContext(
    ContactContext
  ) as ContactContextType;

  const [deleteClicked, setDeleteClicked] = useState(false);

  const onDelete = async () => {
    try {
      removeData(state.id);
      navigate(`/`, { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styContainer}>
      <HeaderNavigation
        onClick={() => {
          navigate('/contact/edit', { state });
        }}
        isEditBtn={true}
      />
      <ProfilePict firstName={state.first_name} />
      <Gap height={10} />
      <div className={styTitle}>
        {state.first_name} {state.last_name}
      </div>
      <Gap height={30} />
      <div className={styDetailContainer}>
        <div className={styDetail}>
          <p className={styDetailText}>Contact Info</p>
        </div>
      </div>
      <Gap height={40} />
      <div className={styPhoneContainer}>
        {state.phones.map((e: { number: string }, i: number) => (
          <div key={i}>
            <div className={styPhoneListContainer}>
              <div className={styIcButton}>
                <img src={ImgPhone} alt="img phone" />
              </div>
              <div>
                <div className={styLabelDetail}>Phone Number</div>
                <div key={i} className={styNumberDetail}>
                  {e.number
                    .replace(/[^0-9.+]+/, '')
                    .replace(/(.{4})/g, '$1 ')
                    .trim()}
                </div>
              </div>
            </div>
            <Gap height={20} />
          </div>
        ))}
      </div>
      <div className={styBtnDeleteWrapper}>
        {/* <Button onClick={onDelete}>Edit</Button> */}
        <Gap height={10} />
        <Button
          isDelete
          onClick={() => {
            setDeleteClicked(true)
          }}
        >
          Delete
        </Button>
      </div>
      <Modal
        show={deleteClicked}
        isDelete
        setCancel={() => {
          setDeleteClicked(false);
        }}
        setApprove={() => {
          onDelete();
          setDeleteClicked(false);
        }}
      />
    </div>
  );
};

export default ContactDetail;
