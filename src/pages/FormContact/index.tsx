import React, { FormEvent, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Button,
  Gap,
  HeaderNavigation,
  Input,
  ProfilePict,
} from '../../components';
import {
  styContainer,
  styWrapper,
  styContainerPhone,
  styAddButton,
  styAddIcon,
  styBtnAdd,
  styTextBtn,
} from './style';
import { useMutation } from '@apollo/client';
import {
  ADD_PHONE_NUMBER,
  EDIT_CONTACT,
  EDIT_PHONE_NUMBER,
} from '../../Database';
import { ContactContextType, ContactProps } from '../../@types/contacts';
import { ContactContext } from '../../context/Contacts';
import { IoMdAddCircle } from 'react-icons/io';
import { colors } from '../../assets';

interface PhonesData {
  number: string;
  id?: string;
}

const FormContact = (props: { type: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [EditContactById] = useMutation(EDIT_CONTACT);
  const [EditPhoneNumber] = useMutation(EDIT_PHONE_NUMBER);
  const [AddNumberToContact] = useMutation(ADD_PHONE_NUMBER);

  const [phones, setPhones] = useState<{ number: string }[]>(
    state ? state.phones : [{ number: '' }]
  );
  const { setNewData }: ContactContextType = useContext(
    ContactContext
  ) as ContactContextType;

  const [contacts, setContacts] = useState<ContactProps>({
    id: state ? state.id : '',
    first_name: state ? state.first_name : '',
    last_name: state ? state.last_name : '',
  });
  const phoneBefore = state ? state.phones : [{ number: '' }];

  const onAddField = () => {
    setPhones((prevState: { number: string }[]): { number: string }[] => [
      ...prevState,
      { number: '' },
    ]);
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.type === 'edit') {
      try {
        await EditContactById({
          variables: { id: contacts.id, _set: { ...contacts } },
        });
      } catch (error) {
        alert(error);
      }

      let isError: boolean = false;
      phones.forEach(async (res: { number: string }, index: number) => {
        if (phoneBefore[index]) {
          if (res.number) {
            try {
              await EditPhoneNumber({
                variables: {
                  pk_columns: {
                    number: phoneBefore[index].number,
                    contact_id: contacts.id,
                  },
                  new_phone_number: res.number,
                },
              });
            } catch (error) {
              isError = true;
              alert(error);
            }
          }
        } else {
          if (res.number) {
            try {
              await AddNumberToContact({
                variables: {
                  contact_id: contacts.id,
                  phone_number: res.number,
                },
              });
            } catch (error) {
              isError = true;
              alert(error);
            }
          }
        }
        if (!isError) {
          navigate(`/`, { replace: true });
        }
      });
      console.log('edit');
    } else {
      try {
        await setNewData({
          first_name: contacts.first_name,
          last_name: contacts.last_name,
          phones,
        });
        navigate(`/`, { replace: true });
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form className={styContainerPhone} onSubmit={onHandleSubmit}>
      <div>
        <HeaderNavigation
          onClick={() => {
            navigate(-1);
          }}
          isEditBtn={false}
          label={props.type === 'add' ? 'Tambah Contact' : 'Edit Contact'}
        />
        <Gap height={10} />
        <ProfilePict firstName={contacts.first_name} />
        <Gap height={40} />
        <div className={styContainer}>
          <div>
            <Input
              label="First Name"
              onChange={(value: string) => {
                setContacts({
                  ...contacts,
                  first_name: value,
                });
              }}
              isCheck
              unique="firstName"
              value={contacts.first_name}
              placeHolder="First Name"
            />
            <Gap height={15} />
            <Input
              label="Last Name"
              onChange={(value: string) => {
                setContacts({
                  ...contacts,
                  last_name: value,
                });
              }}
              isCheck
              value={contacts.last_name}
              placeHolder="Last Name"
            />
            {phones.map((element: PhonesData, i: number) => {
              return (
                <React.Fragment key={i}>
                  <Gap height={15} />
                  <Input
                    label={i === 0 ? 'Phone Number' : ''}
                    placeHolder={`Phone Number`}
                    key={i}
                    value={element.number}
                    isDelete={true}
                    onClick={() => {
                      setPhones(
                        phones.filter((_: any, index: number) => index !== i)
                      );
                    }}
                    onChange={(value: string) => {
                      const newState = phones.map(
                        (obj: { number: string }, index: number) => {
                          if (index === i) {
                            return { ...obj, number: value };
                          }
                          return obj;
                        }
                      );
                      setPhones(newState);
                    }}
                  />
                </React.Fragment>
              );
            })}
          </div>

          <Gap height={15} />
          <button type="button" className={styAddButton} onClick={onAddField}>
            <IoMdAddCircle
              fontSize={40}
              color={colors.secondaryColor}
              className={styAddIcon}
            />
            <Gap width={15} />
            <div className={styBtnAdd}>
              <h2 className={styTextBtn}>Add Phone Number</h2>
            </div>
          </button>
        </div>
      </div>
      <div className={styWrapper}>
        <Button isPrimary type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
