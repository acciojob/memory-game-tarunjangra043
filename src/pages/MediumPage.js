import React from "react";
import Game from "../components/Game";

const MediumPage = ({ onSolved }) => (
  <div className="cells_container">
    <Game gridSize={16} onSolved={onSolved} />
  </div>
);

export default MediumPage;
