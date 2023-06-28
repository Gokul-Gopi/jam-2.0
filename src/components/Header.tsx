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
    <div className="flex justify-between px-4 py-6">
      <div className="flex">
        {/* <button
          onClick={() => expandNavbar((preState) => !preState)}
          className="mr-2 text-4xl text-gray-600 hover:text-gray-500"
        >
          <BiMenuAltRight />
        </button> */}
        <span className="text-3xl font-semibold text-primary">JAM!</span>
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
        <Button className="border-red-400 px-2 text-lg text-red-400 hover:bg-red-400 hover:text-white">
          <BiLogOutCircle />
        </Button>
      </div>
    </div>
  );
};

export default Header;
