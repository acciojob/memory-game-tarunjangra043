import React from "react";

const LandingPage = ({ setLevel }) => (
  <div className="levels_container">
    <h1>Select a Difficulty Level</h1>
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
  </div>
);

export default LandingPage;
