import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../features/memoryGameSlice";

export const LevelSelector = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector((state) => state.memoryGame.level);

  return (
    <div className="levels_container">
      <label>
        <input
          type="radio"
          id="easy"
          checked={currentLevel === "easy"}
          onChange={() => dispatch(setLevel("easy"))}
        />
        Easy
      </label>
      <label>
        <input
          type="radio"
          id="normal"
          checked={currentLevel === "medium"}
          onChange={() => dispatch(setLevel("medium"))}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          id="hard"
          checked={currentLevel === "hard"}
          onChange={() => dispatch(setLevel("hard"))}
        />
        Hard
      </label>
    </div>
  );
};
