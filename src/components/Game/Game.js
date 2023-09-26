import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import UserGuesses from "../UserGuesses/UserGuesses";
import ResultBanner from "../ResultBanner/ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(randomizeAnswer);
  const [gameStatus, setGameStatus] = React.useState("playing");
  const [guesses, setGuesses] = React.useState([]);

  function randomizeAnswer() {
    const newAnswer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer: newAnswer });
    return newAnswer;
  }

  function addGuesses(newGuess) {
    const guess = {
      id: crypto.randomUUID(),
      word: newGuess,
    };
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (newGuess.toUpperCase() === answer) {
      changeGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      changeGameStatus("lost");
    }
  }

  function changeGameStatus(status) {
    setGameStatus(status);
  }

  function restartGame() {
    changeGameStatus("playing");
    setGuesses([]);
    setAnswer(randomizeAnswer());
  }

  return (
    <>
      {gameStatus !== "playing" && (
        <button onClick={restartGame}>Restart</button>
      )}
      <UserGuesses guesses={guesses} answer={answer} />
      <GuessInput
        addGuesses={addGuesses}
        isGameOver={gameStatus !== "playing"}
      />
      {gameStatus === "won" && <WinBanner numberOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
