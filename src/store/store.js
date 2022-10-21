import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice.js";
import dayReducer from "./daySlice.js";
import menuReducer from "./menuSlice.js";
import noReducer from "./noSlice.js";
import { flightsApi } from "./flights.api.js";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [flightsApi.reducerPath]: flightsApi.reducer,
    search: searchReducer,
    day: dayReducer,
    menu: menuReducer,
    no: noReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
