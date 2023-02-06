import Masonry from "react-masonry-css";
import style from "../styles/Home.module.css";
import BasicLayout from "../layout/BasicLayout";
import Post from "../pageComponents/Home/Post";

export default function Home() {
  return (
    <BasicLayout>
      <Masonry
        breakpointCols={3}
        className={style["my-masonry-grid"]}
        columnClassName={style["my-masonry-grid_column"]}
      >
        {post.map((post) => (
          <Post
            image={post.image}
            username="meetagain"
            likes={40}
            comments={11}
          />
        ))}
      </Masonry>
    </BasicLayout>
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
