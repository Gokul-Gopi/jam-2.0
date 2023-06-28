import { posts } from '@/utils/dummyData';
import Post from '@/pageComponents/Home/Post';
import AppLayout from '@/layout/AppLayout';

const Feed = () => {
  return (
    <AppLayout>
      <div className="columns-2 lg:columns-3">
        {posts.map(post => (
          <Post key={post.id} image={post.image} username="meetagain" likes={40} comments={11} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Feed;
