import React, { useState } from "react";

function GuessInput({ addGuesses, isGameOver }) {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addGuesses(userInput);
    setUserInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={isGameOver}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.toUpperCase())}
        title="Must be 5 characters"
      />
    </form>
  );
}

export default GuessInput;
