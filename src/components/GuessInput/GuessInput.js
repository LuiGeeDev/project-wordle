import React, { useState } from "react";

function GuessInput() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);
    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
        title="Must be 5 characters"
      />
    </form>
  );
}

export default GuessInput;
