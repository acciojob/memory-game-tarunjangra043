import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCell } from "../features/memoryGameSlice";
import { Cell } from "./Cell";

export const GameBoard = () => {
  const cells = useSelector((state) => state.memoryGame.cells);
  const selectedCells = useSelector((state) => state.memoryGame.selectedCells);
  const dispatch = useDispatch();

  return (
    <div className="cells_container">
      {cells.map((number, index) => (
        <Cell
          key={index}
          number={number}
          index={index}
          selected={selectedCells.includes(index)}
          onClick={() => dispatch(selectCell({ index }))}
        />
      ))}
    </div>
  );
};
