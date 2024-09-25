import { createSlice } from "@reduxjs/toolkit";

const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState: {
    level: "easy",
  },
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { setLevel } = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
