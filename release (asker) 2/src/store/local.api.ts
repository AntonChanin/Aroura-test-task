import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, CommentModel } from '../models/model';

export const localApi = createApi({
  reducerPath: 'local/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<CommentModel[], string>({
      query: () => ({
        url: '/api/json/messages',
        params: {},
      }),
      transformResponse: (response: ServerResponse<CommentModel>) => response.data,
    }),
  }),
});

export const { useSearchUsersQuery, useLazySearchUsersQuery } = localApi;