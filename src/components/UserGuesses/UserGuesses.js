import React from "react";
import { range } from "../../utils";
import UserGuess from "../UserGuess/UserGuess";

function UserGuesses({ guesses = [] }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <UserGuess guess={guesses[num]} key={num} />
      ))}
    </div>
  );
}

export default UserGuesses;
