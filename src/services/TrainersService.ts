import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITrainer } from "../models/ITrainer";

export const trainersApi = createApi({
  reducerPath: "trainerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000", // https://www.zubrilka.space/api/trainers
  }),
  endpoints: (builder) => ({
    fetchAllTrainers: builder.query<ITrainer[], number>({
      query: () => ({
        url: "/trainers"
      })
    })
  })
});
