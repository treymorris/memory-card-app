import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1>Memory Game</h1>
      <div className="scoreDisplay">
        <h3>
          Score: <span>{props.score}</span>
        </h3>
        <h3>
          High Score: <span>{props.highScore}</span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
