import Image from "next/image";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

interface IUserCard {
  name: string;
  image: string;
  bio?: string;
  followers: number;
  likes: number;
}

const UserCard = ({ name, image, bio, followers, likes }: IUserCard) => {
  return (
    <div className="rounded-lg border-2 p-2 flex flex-col gap-3 items-center pt-4">
      <div>
        <Image
          className="rounded-full"
          src={image}
          alt="user"
          width={100}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">{name}</p>
        <p className="text-gray-400 truncate w-44 text-center">{bio}</p>
      </div>
      <div className="flex justify-between w-32 px-2">
        <div className="flex items-center gap-1">
          <BsPeopleFill className="text-blue-500" />
          <span>{followers}</span>
        </div>
        <div className="flex items-center gap-1">
          <AiFillHeart className="text-red-500" />
          <span>{likes}</span>
        </div>
      </div>
      <button className="bg-primary text-white w-full p-2 rounded-lg">
        Follow
      </button>
    </div>
  );
};

export default UserCard;
