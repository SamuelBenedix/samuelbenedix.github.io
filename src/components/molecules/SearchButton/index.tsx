import React, { ChangeEvent, useRef } from 'react';
import { styButtonSearch, styContainer, styWrapper } from './styles';
import { FiSearch } from 'react-icons/fi';

interface searchComponent {
  searchInput: (value: string) => void;
}

const SearchButton = (props: searchComponent) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styWrapper}>
      <button
        className={styButtonSearch}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        <FiSearch fontSize={20} />
      </button>
      <input
        ref={inputRef}
        className={styContainer}
        placeholder="Search"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.searchInput(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchButton;
