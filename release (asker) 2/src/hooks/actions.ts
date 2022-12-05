import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { postsActions } from '../store/localApi/post.slice';

const actions = {
  ...postsActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
}

export default useActions;
