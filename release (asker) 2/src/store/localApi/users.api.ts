import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, GetMessagesAnswer, GetUserAnswer } from '../../models/model';

export const usersApi = createApi({
  reducerPath: 'users/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getMe: build.query<GetUserAnswer, string>({
      query: () => {
        return {
          url: `api/json/me`,
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods':'GET',
          },
        };
      },
      transformResponse: (response: ServerResponse<GetUserAnswer>) => response.answer,
    }),
    getUsers: build.query<GetUserAnswer, string>({
      query: () => ({
        url: `api/json/users`,
        mode: 'cors',
        headers: {
          'type': 'application/json',
          'Origin': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':'GET',
        },
      }),
      transformResponse: (response: ServerResponse<GetUserAnswer>) => response.answer,
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi;