import { useEffect } from 'react';

import { useGetMessegesQuery } from '../store/localApi/message.api';
import getLoremIpsum from '../utils/getLoremIpsum';
import useActions from './actions';

const useMessages = () => {
  const { isLoading, isError, data } = useGetMessegesQuery('', {
    refetchOnFocus: true,
  });
  const { addPost } = useActions();

  localStorage.setItem('rfk_posts', '[]');

  useEffect(() => {
    const postEmpties = new Array(Math.round(Math.random() * 15) ?? 5).fill(0);
    postEmpties.forEach((_) => {
      if (!isError) {
        addPost({
          id: `${Math.random()}`,
          description: getLoremIpsum(Math.round(Math.random() * 500)),
          images: [],
          published: new Date().toLocaleDateString(),
          comments: data?.messages ?? [],
        });
      }
    });
  }, [isLoading]);
};

export default useMessages;
