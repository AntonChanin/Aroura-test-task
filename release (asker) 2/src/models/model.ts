type UserModel = {
  id: string;
  image?: string;
  name: string;
  surname: string
}

type PostModel = {
  id: string;
  description: string;
  images: string[];
  published: string;
  comments: Message[];
}

type Message = {
  id: number;
  replyTo: number;
  author: string;
  message: string;
  timestamp: number;
}

type NestedMessage = Message & {
  childrens?: NestedMessage[]
}

type GetMessagesAnswer = {
  messages: Message[];
}

type GetUsersAnswer = {
  users: UserModel[];
}

type GetUserAnswer = {
  user: UserModel;
}

type Error = {
  code: number;
}

type ServerResponse<T> = {
  answer: T;
  error: Error;
};

export type {
  GetMessagesAnswer,
  GetUsersAnswer,
  GetUserAnswer,
  Error,
  NestedMessage,
  Message,
  UserModel,
  PostModel,
  ServerResponse,
};
