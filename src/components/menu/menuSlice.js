import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status:
    sessionStorage.getItem("status") === null
      ? "dep"
      : sessionStorage.getItem("status"),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
      sessionStorage.setItem("status", action.payload);
    },
  },
});

export const { setStatus } = menuSlice.actions;
export default menuSlice.reducer;
