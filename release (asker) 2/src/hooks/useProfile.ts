import { useEffect } from 'react';

import { useGetMeQuery } from '../store/localApi/users.api';
import useActions from './actions';

const useProfile = () => {
  const { isError: isErrorUser, isLoading, data } = useGetMeQuery('');
  const { setMe } = useActions();

  useEffect(() => {
    setMe(data?.user ?? { id: 'F1EA4C45-EC2D-4C94-8F99-3714A0A8DE1F', name: 'unknow', surname: 'incognito' });
  }, [isLoading]);
};

export default useProfile;
