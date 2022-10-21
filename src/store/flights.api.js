import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flightsApi = createApi({
  reducerPath: "flights/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.iev.aero/api/flights/",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getFlights: builder.query({
      query: (flyDay) => `${flyDay}`,
    }),
  }),
});

export const { useGetFlightsQuery } = flightsApi;
