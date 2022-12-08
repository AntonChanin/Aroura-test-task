import { useEffect, useState } from 'react';

import { MessageModel } from '../models/model';
import getCommentsById from '../utils/getCommentsById';

const useComments = (comments: MessageModel[], root?: number) => {
  const [rootComments, setRootComments] = useState<MessageModel[]>([]);

  useEffect(() => {
    comments.length && setRootComments(getCommentsById(comments, root));
  }, [comments, root]);

  return rootComments;
}

export default useComments;
