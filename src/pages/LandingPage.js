import React from "react";

const LandingPage = ({ setLevel }) => {
  const handleStartGame = () => {};

  return (
    <div className="levels_container">
      <h1>Welcome!</h1>
      <h2>Select a Difficulty Level</h2>
      <label>
        <input
          type="radio"
          id="easy"
          name="level"
          onClick={() => setLevel("easy")}
        />
        Easy
      </label>
      <label>
        <input
          type="radio"
          id="normal"
          name="level"
          onClick={() => setLevel("medium")}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          id="hard"
          name="level"
          onClick={() => setLevel("hard")}
        />
        Hard
      </label>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default LandingPage;
