import { useEffect } from 'react';

import { useGetUsersQuery } from '../store/localApi/users.api';
import useActions from './actions';

const useUsers = () => {
  const { isLoading,  data: { users } = { users: [] } } = useGetUsersQuery('');
  const { setUsers, setUsersObj } = useActions();

  useEffect(() => {
    setUsers(users);
    setUsersObj(users);
  }, [isLoading]);
};

export default useUsers;
