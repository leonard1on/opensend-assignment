import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store/store";
import { LoginResponse } from "../types/responses/LoginResponse";
import { UserProfile } from "../types/responses/UserProfile";
import { StoreInfo } from "../types/responses/StoreInfoResponse";

type loginParams = {
  email: string;
  password: string;
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgapp-bwgkn3md.opensend.com",
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).user.accessToken;
      const clientToken = (getState() as RootState).user.clientToken;

      if (accessToken) {
        headers.set("Access-Token", `Bearer ${accessToken}`);
      }
      if (clientToken) {
        headers.set("Client-Token", clientToken);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, loginParams>({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    getUserProfile: build.query<UserProfile, void>({
      query: () => ({
        url: "/self/profile",
        method: "GET",
      }),
    }),
    getStoreInfo: build.query<StoreInfo, number>({
      query: (id) => ({
        url: `/store/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLazyGetStoreInfoQuery,
  useLazyGetUserProfileQuery,
} = api;
