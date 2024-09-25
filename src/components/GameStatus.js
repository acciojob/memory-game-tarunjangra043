import React from "react";
import { useSelector } from "react-redux";

export const GameStatus = () => {
  const { tries, matchedPairs, gameStatus } = useSelector(
    (state) => state.memoryGame
  );

  return (
    <div className="game-status">
      <p>Tries: {tries}</p>
      <p>Matched Pairs: {matchedPairs}</p>
      {gameStatus === "won" && <p>Congratulations! You've won the game.</p>}
    </div>
  );
};
