import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "dep",
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
  },
})

export const { setStatus } = menuSlice.actions;
export default menuSlice.reducer;