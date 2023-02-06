import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

interface IPost {
  id?: string;
  username: string;
  likes: number;
  post?: any; //TODO: changes this to postType-- Image/Text
  image: string;
  comments: number;
}

const Post = ({ username, image, likes, comments }: IPost) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="post"
        width={500}
        height={50}
        loading="lazy"
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/500"
      />
      <div className="to-gray-50-500 absolute inset-0 flex cursor-pointer flex-col justify-between bg-gradient-to-tr from-[rgba(0,0,0,0.4)] p-4 text-white opacity-0 transition-all delay-100 hover:opacity-100">
        <span>{username}</span>

        <div className="flex items-center gap-4 text-[0.85rem]">
          <div className="flex items-center gap-1">
            <AiOutlineHeart size={20} />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiComment size={20} />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
