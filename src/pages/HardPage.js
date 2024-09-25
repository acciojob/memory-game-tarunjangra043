import React from "react";
import Game from "../components/Game";

const HardPage = ({ onSolved }) => (
  <div className="cells_container">
    <Game gridSize={36} onSolved={onSolved} />
  </div>
);

export default HardPage;
