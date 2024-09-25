import React from "react";

const Levels = ({ setLevel }) => {
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className="levels_container">
      <h1>Select a Difficulty Level</h1>
      <form>
        <label>
          <input
            type="radio"
            id="easy"
            name="level"
            value="easy"
            onChange={handleLevelChange}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            id="normal"
            name="level"
            value="medium"
            onChange={handleLevelChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            id="hard"
            name="level"
            value="hard"
            onChange={handleLevelChange}
          />
          Hard
        </label>
      </form>
      <button onClick={() => setLevel(null)}>Start Game</button>
    </div>
  );
};

export default Levels;
