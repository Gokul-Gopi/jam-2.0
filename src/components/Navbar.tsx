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
          "w-[18rem]",
          "overflow-y-auto",
          "h-layout",
          "p-4",
          "mr-8",
          style.expandedNav
        )}
      >
        <ul className="flex flex-col border-gray-100 pb-2">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex cursor-pointer items-center gap-4 border-b-2 px-3 py-4 hover:bg-slate-100"
            >
              <button className="text-3xl text-gray-600">{item.icon}</button>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="py-4">
          <p className="mb-6 text-center">People to follow</p>
          <div className="flex flex-col gap-5">
            {[1, 2, 3, 4].map((e) => (
              <UserCard
                key={e}
                name="Kanye west"
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                bio="This is my bio"
                followers={567}
                likes={1500}
              />
            ))}
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="mr-8 w-fit">
      <ul className="flex flex-col gap-7 px-4 pt-8">
        {navItems.map((item) => (
          <li key={item.name} className="flex items-center gap-5">
            <button className="text-3xl text-gray-600">{item.icon}</button>
          </li>
        ))}
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
