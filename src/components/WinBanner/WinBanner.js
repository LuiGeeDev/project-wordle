import React from "react";
import ResultBanner from "../ResultBanner/ResultBanner";

function WinBanner({ numberOfGuesses }) {
  return (
    <ResultBanner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </ResultBanner>
  );
}

export default WinBanner;
