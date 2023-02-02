import clsx from "clsx";
import {
  BiBell,
  BiEditAlt,
  BiMessageRoundedDots,
  BiUserCircle,
} from "react-icons/bi";
import style from "../styles/Home.module.css";

interface INavbar {
  isExpand: boolean;
}

const Navbar = ({ isExpand }: INavbar) => {
  if (isExpand) {
    return (
      <nav className={clsx("w-60", "border-2", style.expandedNav)}>
        <ul className="flex border-b-2 border-gray-100 flex-col gap-7 px-4 pb-4">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className="flex gap-4 items-center cursor-pointerr"
              >
                <button className="text-3xl text-gray-600">{item.icon}</button>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="py-4">
          <p className="text-center">People to follow</p>
        </div>
      </nav>
    );
  }
  return (
    <nav className={clsx("w-fit")}>
      <ul className="flex flex-col gap-7 px-4">
        {navItems.map((item) => {
          return (
            <li key={item.name} className="flex gap-5 items-center">
              <button className="text-3xl text-gray-600">{item.icon}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const navItems = [
  {
    icon: <BiEditAlt />,
    link: "/",
    name: "Post",
  },
  {
    icon: <BiMessageRoundedDots />,
    link: "/",
    name: "Messages",
  },
  {
    icon: <BiBell />,
    link: "/",
    name: "Notifications",
  },
  {
    icon: <BiUserCircle />,
    link: "/",
    name: "Profile",
  },
];

export default Navbar;
