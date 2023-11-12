import React, { useContext, useState } from 'react';
import {
  styBtnFav,
  styContainer,
  styName,
  styPhoneNumber,
  styContainerDetailContact,
  styIconWrapper,
  styIconDelete,
  styIconEdit,
  styWrapper,
} from './style';
import { colors } from '../../../assets';
import { ContactContextType, ContactsProps } from '../../../@types/contacts';
import { ContactContext } from '../../../context/Contacts';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';
import { Modal } from '../../atoms';

interface ListContactProps {
  data: ContactsProps;
  onClick: () => void;
  onClickEdit: () => void;
}

const ListContact = (props: ListContactProps) => {
  const { setFav, removeData }: ContactContextType | any = useContext(
    ContactContext
  ) as ContactContextType;
  const { onClickEdit, data, onClick } = props;
  const [deleteClicked, setDeleteClicked] = useState(false);

  return (
    <div>
      <div className={styContainer}>
        <div className={styWrapper}>
          <div
            className={styBtnFav}
            onClick={() => {
              setFav(data);
            }}
          >
            {data.isFav ? (
              <AiFillStar fontSize={22} color={colors.favorite} />
            ) : (
              <AiOutlineStar fontSize={22} />
            )}
          </div>
          <div className={styContainerDetailContact} onClick={onClick}>
            <div>
              <div className={styName}>
                {data.first_name} {data.last_name}
              </div>
              {data.phones[0] ? (
                <div className={styPhoneNumber}>
                  {data.phones[0].number
                    .replace(/[^0-9.+]+/, '')
                    .replace(/(.{4})/g, '$1 ')
                    .trim()}
                </div>
              ) : (
                <div className={styPhoneNumber}></div>
              )}
            </div>
          </div>
        </div>

        <div className={styIconWrapper(deleteClicked)}>
          <div className={styIconEdit} onClick={onClickEdit}>
            <FiEdit2 fontSize={22} color={colors.primaryWhite} />
          </div>
          <div
            className={styIconDelete}
            onClick={() => {
              setDeleteClicked(!deleteClicked);
            }}
          >
            <BiTrashAlt fontSize={22} color={colors.primaryWhite} />
          </div>
        </div>
      </div>
      <Modal
        show={deleteClicked}
        isDelete
        setCancel={() => {
          setDeleteClicked(false);
        }}
        setApprove={() => {
          removeData(data?.id);
          setDeleteClicked(false);
        }}
      />
    </div>
  );
};

export default ListContact;
