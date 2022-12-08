type ButtonModel = {
  value?: string;
  onClick?(event: MouseEvent): void;
}

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
  comments: MessageModel[];
}

type MessageModel = {
  id: number;
  replyTo: number;
  author: string;
  message: string;
  timestamp: number;
}

type GetMessagesAnswer = {
  messages: MessageModel[];
}

type GetUsersAnswer = {
  users: UserModel[];
}

type GetUserAnswer = {
  user: UserModel;
}

type ErrorModel = {
  code: number;
}

type ServerResponse<T> = {
  answer: T;
  error: Error;
};

export type {
  ButtonModel,
  GetMessagesAnswer,
  GetUsersAnswer,
  GetUserAnswer,
  ErrorModel,
  MessageModel,
  UserModel,
  PostModel,
  ServerResponse,
};
