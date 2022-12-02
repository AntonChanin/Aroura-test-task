type CommentModel = {
  id: string;
  author: string;
  avatar: string;
  comment: string;
  published: string;
};

type PostModel = {
  id: string;
  description: string;
  images: string[];
  published: string;
  comments: CommentModel[];
}

type ServerResponse<T> = {
  status: string;
  code: number;
  total: number;
  data: T[];
};

export type { CommentModel, PostModel, ServerResponse };
