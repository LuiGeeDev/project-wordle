import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function UserGuess({ guess, answer }) {
  const checkedGuess = checkGuess(guess?.word, answer);

  return (
    <p className="guess">
      {range(5).map((letterNum) => (
        <Cell
          key={letterNum}
          status={checkedGuess ? checkedGuess[letterNum].status : undefined}
          letter={checkedGuess ? checkedGuess[letterNum].letter : undefined}
        />
      ))}
    </p>
  );
}

export default UserGuess;
