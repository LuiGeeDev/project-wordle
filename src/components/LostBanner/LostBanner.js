import React from "react";
import ResultBanner from "../ResultBanner/ResultBanner";

function LostBanner({ answer }) {
  return (
    <ResultBanner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </ResultBanner>
  );
}

export default LostBanner;
