import React from "react";

export const Cell = ({ number, selected, onClick }) => {
  return (
    <div className={`cell ${selected ? "selected" : ""}`} onClick={onClick}>
      {selected ? number : "?"}
    </div>
  );
};
