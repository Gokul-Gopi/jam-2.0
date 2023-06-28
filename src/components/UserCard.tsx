import Image from 'next/image';
import { BsPeopleFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { Button } from '@mantine/core';

interface IUserCard {
  name: string;
  image: string;
  bio?: string;
  followers: number;
  likes: number;
}

const UserCard = ({ name, image, bio, followers, likes }: IUserCard) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border-2 p-2 pt-4">
      <div>
        <Image className="rounded-full" src={image} alt="user" width={100} height={200} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">{name}</p>
        <p className="w-44 truncate text-center text-gray-400">{bio}</p>
      </div>
      <div className="flex w-32 justify-between px-2">
        <div className="flex items-center gap-1">
          <BsPeopleFill className="text-blue-500" />
          <span>{followers}</span>
        </div>
        <div className="flex items-center gap-1">
          <AiFillHeart className="text-red-500" />
          <span>{likes}</span>
        </div>
      </div>
      <Button className="w-full rounded-lg bg-primary p-2 text-white">Follow</Button>
    </div>
  );
};

export default UserCard;
