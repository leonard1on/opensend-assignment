import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type loginParams = {
  email: string;
  password: string;
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgapp-bwgkn3md.opensend.com",
  }),
  endpoints: (build) => ({
    login: build.mutation<unknown, loginParams>({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = api;
