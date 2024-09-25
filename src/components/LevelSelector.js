import React from "react";

const LevelSelector = () => {
  return (
    <div className="levels_container">
      <label>
        <input type="radio" id="easy" name="level" /> Easy
      </label>
      <label>
        <input type="radio" id="normal" name="level" /> Medium
      </label>
      <label>
        <input type="radio" id="hard" name="level" /> Hard
      </label>
    </div>
  );
};

export default LevelSelector;
