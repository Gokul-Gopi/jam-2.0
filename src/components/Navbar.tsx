import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  BiBell,
  BiHome,
  BiMessageRoundedDots,
  BiMessageSquareDetail,
  BiUserCircle,
} from "react-icons/bi";
import style from "../styles/Home.module.css";
import UserCard from "./UserCard";
import { ActionIcon, Button } from "@mantine/core";

interface INavbar {
  isExpand: boolean;
}

const Navbar = ({ isExpand }: INavbar) => {
  const router = useRouter();
  if (isExpand) {
    return (
      <nav
        className={clsx(
          "w-[18rem]",
          "overflow-y-auto",
          "h-layout",
          "p-4",
          style.expandedNav
        )}
      >
        <ul className="flex flex-col border-gray-100 pb-2">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex cursor-pointer items-center gap-4 border-b px-3 py-4 last:border-none hover:bg-slate-100"
            >
              <button className="text-3xl text-gray-600">{item.icon}</button>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        {/* <div className="py-4">
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
        </div> */}
      </nav>
    );
  }
  return (
    <nav className="">
      <ul className="flex flex-col gap-6 px-6 pt-8">
        {navItems.map((item) => (
          <li key={item.name} className="flex justify-center">
            <ActionIcon
              className={clsx(
                "rounded-md p-2 text-2xl",
                router.pathname === item.path
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-blue-50"
              )}
              unstyled
              component={Link}
              href={item.path}
            >
              {item.icon}
            </ActionIcon>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navItems = [
  {
    icon: <BiHome />,
    path: "/",
    name: "Feed",
  },
  {
    icon: <BiMessageSquareDetail />,
    path: "/message",
    name: "Messages",
  },
  {
    icon: <BiBell />,
    path: "/notification",
    name: "Notifications",
  },
  {
    icon: <BiUserCircle />,
    path: "/my-profile",
    name: "profile",
  },
];

export default Navbar;
