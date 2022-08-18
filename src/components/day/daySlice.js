import { createSlice } from "@reduxjs/toolkit";
import { getFormattedFilter } from "../../utils/dateUtils.js";

const initialState = {
  flyDay:
    sessionStorage.getItem("day") === null
      ? getFormattedFilter(new Date())[0]
      : sessionStorage.getItem("day"),
};

export const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setFlyDay: (state, action) => {
      state.flyDay = action.payload;
      sessionStorage.setItem("day", action.payload);
    },
  },
});

export const { setFlyDay } = daySlice.actions;
export default daySlice.reducer;
