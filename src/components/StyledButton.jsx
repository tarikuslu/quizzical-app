import React from "react";
import "../style/StyledButtonStyle.css";
export default function StyledButton(props) {
  return (
    <button className="btn" onClick={(e) => props.handleClick(e)}>
      {props.title}
    </button>
  );
}
