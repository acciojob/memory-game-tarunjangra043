import { configureStore } from "@reduxjs/toolkit";
import memoryGameReducer from "../features/memoryGameSlice";

export const store = configureStore({
  reducer: {
    memoryGame: memoryGameReducer,
  },
});
