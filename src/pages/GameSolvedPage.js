import React from "react";

const GameSolvedPage = () => (
  <div>
    <h1>Congratulations! You solved the game!</h1>
    <button onClick={() => window.location.reload()}>Play Again</button>
  </div>
);

export default GameSolvedPage;
