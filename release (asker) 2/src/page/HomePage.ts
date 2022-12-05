import { createElement, Fragment, useEffect } from 'react';
import PostCard from '../components/PostCard';
import useActions from '../hooks/actions';
import useAppSelector from '../hooks/redux';
import { useGetMessegesQuery } from '../store/localApi/message.api';
import getLoremIpsum from '../utils/getLoremIpsum';
import uuid from '../utils/uuid';

const HomePage = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const { addMessage } = useActions();
  const { isLoading, isError, data } = useGetMessegesQuery('', {
    refetchOnFocus: true,
  });
  localStorage.clear();
  useEffect(() => {
    const postEmpties = new Array(Math.round(Math.random() * 15) ?? 5).fill(0);
    postEmpties.forEach((_) => {
      addMessage({
        id: `${Math.random()}`,
        description: getLoremIpsum(Math.round(Math.random() * 500)),
        images: [],
        published: new Date().toLocaleDateString(),
        comments: data?.messages ?? [],
      });
    });
  }, [isLoading]);

  return createElement(
    Fragment,
    null,
    posts?.map(
      (model, index) => createElement(PostCard, { ...uuid({ name: 'postCard', seed: index }), model })
    )
  );
};

export default HomePage;
