import { createElement, Fragment } from 'react';
import PostCard from '../components/PostCard';
import useAppSelector from '../hooks/redux';
import usePosts from '../hooks/usePosts';
import useProfile from '../hooks/useProfile';
import useUsers from '../hooks/useUsers';
import uuid from '../utils/uuid';

const HomePage = () => {
  const { posts } = useAppSelector((state) => state.posts);
  useProfile();
  useUsers();
  usePosts();

  return createElement(
    Fragment,
    null,
    posts?.map(
      (model, index) => createElement(PostCard, { ...uuid({ name: 'postCard', seed: index }), model })
    )
  );
};

export default HomePage;
