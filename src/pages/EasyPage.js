import React from "react";
import Game from "../components/Game";

const EasyPage = ({ onSolved }) => (
  <div className="cells_container">
    <Game gridSize={4} onSolved={onSolved} />
  </div>
);

export default EasyPage;
