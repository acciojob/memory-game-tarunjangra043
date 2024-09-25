import React, { useState } from "react";
import Levels from "./Levels";
import EasyPage from "../pages/EasyPage";
import MediumPage from "../pages/MediumPage";
import HardPage from "../pages/HardPage";
import GameSolvedPage from "../pages/GameSolvedPage";

function App() {
  const [level, setLevel] = useState(null);
  const [gameSolved, setGameSolved] = useState(false);

  return (
    <div>
      {gameSolved ? (
        <GameSolvedPage />
      ) : level === "easy" ? (
        <EasyPage onSolved={() => setGameSolved(true)} />
      ) : level === "medium" ? (
        <MediumPage onSolved={() => setGameSolved(true)} />
      ) : level === "hard" ? (
        <HardPage onSolved={() => setGameSolved(true)} />
      ) : (
        <Levels setLevel={setLevel} />
      )}
    </div>
  );
}

export default App;
