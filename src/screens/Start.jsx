import React from "react";
import "../style/StartStyle.css";
import StyledButton from "../components/StyledButton";
export default function Start(props) {
  function start() {
    props.startGame();
  }

  return (
    <div className="start-container">
      <h1>Quizzical</h1>
      <p>Lets solve this quiz!</p>
      <div style={{ marginTop: "50px" }}>
        <StyledButton title="Start Quiz" handleClick={start} />
      </div>
    </div>
  );
}
