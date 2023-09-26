import React from "react";
import { range } from "../../utils";

function UserGuess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((letterNum) => (
        <span key={letterNum} className="cell">
          {guess?.word[letterNum]}
        </span>
      ))}
    </p>
  );
}

export default UserGuess;
