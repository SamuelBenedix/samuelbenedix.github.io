import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  ContactListComponent,
  Pagination,
  SearchButton,
} from '../../components';
import {
  styContainer,
  styTitle,
  styWrapperBtn,
  styWrapperHeader,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { ContactContext } from '../../context/Contacts';
import { ContactContextType, ContactsProps } from '../../@types/contacts';

const ContactList = () => {
  const navigate = useNavigate();
  const [newData, setNewData] = useState<ContactsProps[]>([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState<string>('');
  const { data }: ContactContextType = useContext(
    ContactContext
  ) as ContactContextType;

  useEffect(() => {
    let re = new RegExp(`${searchInput}`, 'i');

    if (searchInput.length > 0) {
      setNewData(
        data
          .sort(function (x: ContactsProps, y: ContactsProps) {
            return x.isFav === y.isFav ? 0 : x.isFav ? -1 : 1;
          })
          .filter(
            (o: ContactsProps) =>
              o.first_name.search(re) !== -1 || o.last_name.search(re) !== -1
          )
          .slice((page - 1) * 10, page * 10)
      );
    } else {
      setNewData(
        data
          .sort(function (x, y) {
            return x.isFav === y.isFav ? 0 : x.isFav ? -1 : 1;
          })
          .slice((page - 1) * 10, page * 10)
      );
    }
  }, [data, page, searchInput]);

  return (
    <div>
      <div className={styWrapperHeader}>
        <h1 className={styTitle}>Phone Book</h1>

        <div className={styWrapperBtn}>
          <SearchButton searchInput={setSearchInput} />
          <Button
            icon
            onClick={() => {
              navigate('/contact/add');
            }}
          >
            <IoMdAdd fontSize={25} />
          </Button>
        </div>
      </div>

      <div className={styContainer}>
        <ContactListComponent data={newData} isFav={false} />
      </div>

      <Pagination
        page={page}
        length={data.length}
        onClickLeft={() => {
          if (page > 0) {
            setPage(page - 1);
          }
        }}
        onClickRight={() => {
          setPage(page + 1);
        }}
      />
    </div>
  );
};

export default ContactList;
