import clsx from "clsx";
import {
  BiBell,
  BiEditAlt,
  BiMessageRoundedDots,
  BiUserCircle,
} from "react-icons/bi";
import style from "../styles/Home.module.css";
import UserCard from "./UserCard";

interface INavbar {
  isExpand: boolean;
}

const Navbar = ({ isExpand }: INavbar) => {
  if (isExpand) {
    return (
      <nav
        className={clsx(
          "w-60",
          "overflow-y-auto",
          "h-layout",
          "p-4",
          style.expandedNav
        )}
      >
        <ul className="flex border-gray-100 flex-col pb-2">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className="flex px-3 py-4 gap-4 items-center cursor-pointer border-b-2 hover:bg-slate-100"
              >
                <button className="text-3xl text-gray-600">{item.icon}</button>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="py-4">
          <p className="text-center mb-6">People to follow</p>
          <div className="flex flex-col gap-5">
            {[1, 2, 3, 4].map((e) => {
              return (
                <UserCard
                  key={e}
                  name="Kanye west"
                  image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                  bio="This is my bio"
                  followers={567}
                  likes={1500}
                />
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className={clsx("w-fit")}>
      <ul className="flex flex-col gap-7 px-4 pt-4">
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
