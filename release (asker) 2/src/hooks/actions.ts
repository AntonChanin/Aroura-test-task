import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { postsActions } from '../store/localApi/post.slice';
import { usersActions } from '../store/localApi/users.slice';

const actions = {
  ...postsActions,
  ...usersActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
}

export default useActions;
