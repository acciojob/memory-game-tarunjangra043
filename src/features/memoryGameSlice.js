import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  level: "easy",
  cells: [],
  selectedCells: [],
  matchedPairs: 0,
  tries: 0,
  gameStatus: "idle",
};

const generateCells = (level) => {
  const cellCount = level === "easy" ? 8 : level === "medium" ? 12 : 16;
  const numbers = [...Array(cellCount).keys()].map((n) => Math.floor(n / 2));
  return numbers.sort(() => Math.random() - 0.5);
};

export const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
      state.cells = generateCells(state.level);
      state.selectedCells = [];
      state.matchedPairs = 0;
      state.tries = 0;
      state.gameStatus = "playing";
    },
    selectCell: (state, action) => {
      const { index } = action.payload;
      if (
        state.selectedCells.length < 2 &&
        !state.selectedCells.includes(index)
      ) {
        state.selectedCells.push(index);
      }

      if (state.selectedCells.length === 2) {
        state.tries += 1;
        const [firstIdx, secondIdx] = state.selectedCells;
        if (state.cells[firstIdx] === state.cells[secondIdx]) {
          state.matchedPairs += 1;
          if (state.matchedPairs === state.cells.length / 2) {
            state.gameStatus = "won";
          }
        }
        state.selectedCells = [];
      }
    },
  },
});

export const { setLevel, selectCell } = memoryGameSlice.actions;
export default memoryGameSlice.reducer;
