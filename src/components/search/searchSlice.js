import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flight: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFlight: (state, action) => {
      state.flight = action.payload
    },
  },
})

export const { setFlight } = searchSlice.actions;
export default searchSlice.reducer;