import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./components/search/searchSlice.js";
import dayReducer from "./components/day/daySlice.js";
import menuReducer from "./components/menu/menuSlice.js";
import noReducer from "./components/no/noSlice.js";


export const store = configureStore({
  reducer: {
    search: searchReducer,
    day: dayReducer,
    menu: menuReducer,
    no: noReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;