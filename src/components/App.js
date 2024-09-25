import React from "react";
import { LevelSelector } from "../components/LevelSelector";
import { GameBoard } from "../components/GameBoard";
import { GameStatus } from "../components/GameStatus";

function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <LevelSelector />
      <GameStatus />
      <GameBoard />
    </div>
  );
}

export default App;
