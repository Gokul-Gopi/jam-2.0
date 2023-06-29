import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiBell, BiHome, BiMessageSquareDetail, BiUserCircle } from 'react-icons/bi';
import { ActionIcon } from '@mantine/core';

const navItems = [
  {
    icon: <BiHome />,
    path: '/',
    name: 'Feed',
  },
  {
    icon: <BiMessageSquareDetail />,
    path: '/message',
    name: 'Messages',
  },
  {
    icon: <BiBell />,
    path: '/notification',
    name: 'Notifications',
  },
  {
    icon: <BiUserCircle />,
    path: '/my-profile',
    name: 'profile',
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="row-start-3 border-t bg-white md:row-start-auto md:border-t-0">
      <ul className="flex justify-between gap-6 px-6 pt-4 pb-4 md:flex-col md:justify-start md:pt-8">
        {navItems.map(item => (
          <li key={item.name} className="flex justify-center">
            <ActionIcon
              className={clsx(
                'rounded-md p-2 text-3xl md:text-2xl',
                router.pathname === item.path
                  ? 'bg-primary text-white'
                  : 'text-gray-500 hover:bg-blue-50',
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

export default Navbar;
