import { useState } from 'react';
import { Button, ActionIcon, Collapse } from '@mantine/core';
import { BiLogOutCircle, BiSearchAlt } from 'react-icons/bi';
import clsx from 'clsx';
import SearchBar from '@/pageComponents/Home/SearchBar';
import style from '../styles/Home.module.css';

const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div className="col-span-2 px-6 pt-6">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold text-primary">JAM!</h2>
        <SearchBar />

        <div className="flex items-center gap-2">
          <Button className={clsx(style['rainbow-effect-animation'], 'hidden md:inline-block')}>
            What on your mind?
          </Button>

          <ActionIcon
            onClick={() => setToggleSearch(true)}
            size="lg"
            variant="filled"
            color="primary"
            className="text-lg hover:bg-primary hover:text-white md:hidden"
          >
            <BiSearchAlt />
          </ActionIcon>

          <ActionIcon
            size="lg"
            className="border border-red-400 text-lg text-red-400 hover:bg-red-400 hover:text-white"
          >
            <BiLogOutCircle />
          </ActionIcon>
        </div>
      </div>

      <Collapse in={toggleSearch}>
        <SearchBar asAccordion toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      </Collapse>
    </div>
  );
};

export default Header;
