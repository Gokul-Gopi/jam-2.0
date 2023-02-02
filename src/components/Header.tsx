import { Input } from "@mantine/core";
import { BiLogOutCircle, BiMenuAltRight, BiSearchAlt } from "react-icons/bi";
import { Button } from "@mantine/core";
import style from "../styles/Home.module.css";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
// shadow-[0_3px_18px_-5px_rgba(0,0,0,0.1)]

interface IHeader {
  expandNavbar: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ expandNavbar }: IHeader) => {
  return (
    <div className="px-4 py-6 flex justify-between">
      <div className="flex">
        <button
          onClick={() => expandNavbar((preState) => !preState)}
          className="text-4xl mr-2 text-gray-600 hover:text-gray-500"
        >
          <BiMenuAltRight />
        </button>
        <span className="text-primary text-3xl font-semibold">JAM!</span>
      </div>
      <div className="w-1/2">
        <Input
          radius="md"
          icon={<BiSearchAlt />}
          placeholder="Search users.."
        />
      </div>
      <div className="flex gap-2">
        <Button
          className={clsx("bg-primary", style["rainbow-effect-animation"])}
        >
          What on your mind?
        </Button>
        <Button className="px-2 border-red-400 text-red-400 text-lg hover:bg-red-400 hover:text-white">
          <BiLogOutCircle />
        </Button>
      </div>
    </div>
  );
};

export default Header;
