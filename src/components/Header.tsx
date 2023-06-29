import { Input, Button } from '@mantine/core';
import { BiLogOutCircle, BiSearchAlt } from 'react-icons/bi';
import clsx from 'clsx';
import style from '../styles/Home.module.css';

const Header = () => {
  return (
    <div className="col-span-2 flex justify-between p-6">
      <div className="flex">
        <span className="text-3xl font-semibold text-primary">JAM!</span>
      </div>
      <div className="w-1/2">
        <Input radius="md" icon={<BiSearchAlt />} placeholder="Search.." />
      </div>
      <div className="flex gap-2">
        <Button className={clsx(style['rainbow-effect-animation'])}>What on your mind?</Button>
        <Button className="border-red-400 bg-white px-2 text-lg text-red-400 hover:bg-red-400 hover:text-white">
          <BiLogOutCircle />
        </Button>
      </div>
    </div>
  );
};

export default Header;
