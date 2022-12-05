import { createElement, Fragment } from 'react';
import PostCard from '../components/PostCard';
import { PostModel } from '../models/model';
import { useGetMessegesQuery } from '../store/localApi/local.api';

const HomePage = () => {
  const posts: PostModel[] = [];
  const { isLoading, isError, error, data: messages } = useGetMessegesQuery('', {
    refetchOnFocus: true,
  });

  console.log('messages', messages, 'isLoading', isLoading, 'isError', isError);

  return createElement(
    Fragment,
    null,
    posts.map(
      (model) => createElement(PostCard, { model })
    )
  );
};

export default HomePage;
