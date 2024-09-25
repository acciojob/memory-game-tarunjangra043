import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome!</h1>
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
    </div>
  );
};

export default LandingPage;
