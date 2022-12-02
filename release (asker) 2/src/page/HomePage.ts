import { createElement } from 'react';
import PostCard from '../components/PostCard';
import { PostModel } from '../models/model';

const HomePage = () => {
  const posts: PostModel[] = [];

  return createElement(
    'div',
    { id: 'homePage_1' },
    posts.map(
      (model) => createElement(PostCard, { model })
    )
  );
};

export default HomePage;
