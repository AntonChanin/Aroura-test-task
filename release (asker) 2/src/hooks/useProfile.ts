import { useEffect } from 'react';

import { useGetMeQuery } from '../store/localApi/users.api';
import useActions from './actions';

const useProfile = () => {
  const { isError: isErrorUser, isLoading, data: { user } = {} } = useGetMeQuery('');
  const {  setMe } = useActions();

  useEffect(() => {
    if (!isErrorUser && user) {
      setMe(user);
    };
  }, [isLoading]);
};

export default useProfile;
