import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  war: false,
}

export const noSlice = createSlice({
  name: 'no',
  initialState,
  reducers: {
    setWar: (state, action) => {
      state.war = action.payload
    },
  },
})

export const { setWar } = noSlice.actions;
export default noSlice.reducer;