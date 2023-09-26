import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import UserGuesses from "../UserGuesses/UserGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuesses(newGuess) {
    const guess = {
      id: crypto.randomUUID(),
      word: newGuess,
    };
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  }

  return (
    <>
      <UserGuesses guesses={guesses} />
      <GuessInput addGuesses={addGuesses} />
    </>
  );
}

export default Game;
