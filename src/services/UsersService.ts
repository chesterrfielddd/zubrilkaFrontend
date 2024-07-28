import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users",  //https://www.zubrilka.space/api/users
  }),
  endpoints: (builder) => ({
    checkAuth: builder.query({
      query: () => ({
        url: "/me/",
      }),
    }),
  }),
});
