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

type GetUserAnswer = {
  users: any[];
}

type Error = {
  code: number;
}

type ServerResponse<T> = {
  answer: T;
  error: Error;
};

export type { GetMessagesAnswer, GetUserAnswer, Error, NestedMessage, Message, PostModel, ServerResponse };
