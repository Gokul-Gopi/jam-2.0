import { ActionIcon } from '@mantine/core';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';

interface IPost {
  // eslint-disable-next-line react/no-unused-prop-types
  id?: string;
  username: string;
  likes: number;
  // eslint-disable-next-line react/no-unused-prop-types
  post?: unknown; // TODO: changes this to postType-- Image/Text
  image: string;
  comments: number;
}

const Post = ({ username, image, likes, comments }: IPost) => {
  return (
    <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg">
      <Image
        src={image}
        alt="post"
        width={500}
        height={50}
        loading="lazy"
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/500"
        className="scale-100 rounded-lg duration-300 ease-out group-hover:scale-[1.03]"
      />
      <div className="to-gray-50-500 absolute inset-0 flex cursor-pointer flex-col justify-between bg-gradient-to-tr from-[rgba(0,0,0,0.4)] p-4 text-white opacity-0 transition-all delay-100 hover:opacity-100">
        <span>{username}</span>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <ActionIcon color="red" className="hover:bg-transparent">
              <AiOutlineHeart size={20} />
            </ActionIcon>

            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <ActionIcon color="blue" className="hover:bg-transparent">
              <BiComment size={20} />
            </ActionIcon>

            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
