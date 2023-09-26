import React from "react";

function ResultBanner({ status, children }) {
  const bannerClassName = `${status} banner`;
  return (
    <div className={bannerClassName}>
      {children}
      <button>Restart</button>
    </div>
  );
}

export default ResultBanner;
