import {
  BiBell,
  BiEditAlt,
  BiMessageRoundedDots,
  BiUserCircle,
} from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="w-fit">
      <ul className="flex flex-col gap-7 px-4">
        {navItems.map((item) => {
          return (
            <li key={item.name} className="flex flex-col items-center">
              <button className="text-3xl text-gray-600">{item.icon}</button>
              {/* <span className="text-[0.75rem]">{item.name}</span> */}
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
