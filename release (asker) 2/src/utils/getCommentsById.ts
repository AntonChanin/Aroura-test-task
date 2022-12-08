import { MessageModel } from '../models/model';

const getCommentsById = (comments: MessageModel[], root?: number) => {
    const isRootValid = root !== undefined;
    return comments.filter(
      ({ id, replyTo }) => (
        (
          (isRootValid ? root : id) === replyTo
        ) && (
          isRootValid ? id !== replyTo : true
        )
      ),
    );
};

export default getCommentsById;
