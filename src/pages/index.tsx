import Masonry from "react-masonry-css";
import style from "../styles/Home.module.css";
import AppLayout from "../layout/AppLayout";
import Post from "../pageComponents/Home/Post";
import clsx from "clsx";

export default function Home() {
  return (
    <AppLayout>
      <div className="columns-2 lg:columns-3">
        {post.map((post) => (
          <Post
            image={post.image}
            username="meetagain"
            likes={40}
            comments={11}
          />
        ))}
      </div>
    </AppLayout>
  );
}

const post = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1675609460331-a35b41381d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1675329363211-9bbf30434b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1670349148055-e11a0b3be242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1668383778587-3439a506fdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1668383778587-3439a506fdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1668383778587-3439a506fdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
