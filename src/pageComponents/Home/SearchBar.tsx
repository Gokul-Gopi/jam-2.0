import { TextInput } from '@mantine/core';
import clsx from 'clsx';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

interface SearchBarProps {
  asAccordion?: boolean;
  toggleSearch?: boolean;
  setToggleSearch?: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({ asAccordion = false, toggleSearch, setToggleSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (asAccordion && toggleSearch) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [asAccordion, toggleSearch]);

  return (
    <div className={clsx(asAccordion ? 'mt-3 w-full md:hidden' : 'hidden w-1/2 md:inline-block')}>
      <TextInput
        id="search-bar"
        onBlur={() => setToggleSearch && setToggleSearch(state => !state)}
        ref={inputRef}
        radius="md"
        classNames={{ wrapper: 'z-20' }}
        icon={<BiSearchAlt />}
        placeholder="Search.."
      />
    </div>
  );
};

export default SearchBar;
