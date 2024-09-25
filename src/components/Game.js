import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { generateCells } from "../data";

const Game = ({ gridSize, onSolved }) => {
  const [cells, setCells] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    setCells(generateCells(gridSize));
  }, [gridSize]);

  const handleCellClick = (index) => {
    if (selected.length === 1 && selected[0] === index) return;
    setSelected((prev) => [...prev, index]);
    if (selected.length === 1) {
      if (cells[selected[0]] === cells[index]) {
        setMatches((prev) => prev + 1);
        setSelected([]);
        if (matches + 1 === gridSize / 2) onSolved();
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  return (
    <div className="cells_container">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          value={selected.includes(index) ? cell : "?"}
          onClick={() => handleCellClick(index)}
        />
      ))}
    </div>
  );
};

export default Game;
