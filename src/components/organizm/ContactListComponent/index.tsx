import React from 'react';
import { ListContact } from '../../molecules';
import { useNavigate } from 'react-router-dom';
import { ContactsProps } from '../../../@types/contacts';
import { styListGroup } from './styles';

const ContactListComponent = (props: {
  data: ContactsProps[];
  isFav: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div className={styListGroup}>
      {props.data.map((contact: ContactsProps, index: number) => {
        return (
          <React.Fragment key={index}>
            <ListContact
              key={index}
              data={contact}
              onClick={() => {
                navigate('/contact/detail', { state: contact });
              }}
              onClickEdit={() => {
                navigate('/contact/edit', { state: contact });
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ContactListComponent;
