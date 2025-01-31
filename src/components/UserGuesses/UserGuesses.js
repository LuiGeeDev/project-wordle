import React from "react";
import { range } from "../../utils";
import UserGuess from "../UserGuess/UserGuess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UserGuesses({ guesses = [], answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <UserGuess guess={guesses[num]} key={num} answer={answer} />
      ))}
    </div>
  );
}

export default UserGuesses;
