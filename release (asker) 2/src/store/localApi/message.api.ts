import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, GetMessagesAnswer } from '../../models/model';

export const messageApi = createApi({
  reducerPath: 'message/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getMesseges: build.query<GetMessagesAnswer, string>({
      query: () => ({
        url: `api/json/messages`,
        mode: 'cors',
        headers: {
          'type': 'application/json',
          'Origin': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':'GET',
        },
      }),
      transformResponse: (response: ServerResponse<GetMessagesAnswer>) => response.answer,
    }),
    postMessage: build.query<GetMessagesAnswer, string>({
      query: (args: string) => {
        const props = args.split('&');
        const author = props[0];
        const message = props[1];
        const replayTo = props[2];
        return {
          url: `api/json/message`,
          mode: 'cors',
          method: 'POST',
          headers: {
            'type': 'application/json',
            'Origin': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          },
          params: {
            author,
            message,
            replayTo,
          }
        };
      },
      transformResponse: (response: ServerResponse<GetMessagesAnswer>) => response.answer,
    })
  }),
});

export const { useGetMessegesQuery, useLazyGetMessegesQuery, useLazyPostMessageQuery, usePostMessageQuery } = messageApi;