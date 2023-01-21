import React from "react";
import "../style/QuestionStyle.css";
export default function Question(props) {
  return (
    <div className="question-container">
      <h3 className="question-title">{props.title}</h3>
      <ul>
        <li>
          <input
            type="radio"
            name={props.id}
            id={props.answerOne}
            value={props.answerOne}
            checked={props.checked === props.answerOne}
            onChange={(event) => props.handleChange(event, props.id)}
          />
          <label htmlFor={props.answerOne} id={props.answerOne + props.id}>
            {props.answerOne}
          </label>
        </li>
        <li>
          <input
            type="radio"
            name={props.id}
            id={props.answerTwo}
            value={props.answerTwo}
            checked={props.checked === props.answerTwo}
            onChange={(event) => props.handleChange(event, props.id)}
          />
          <label htmlFor={props.answerTwo} id={props.answerTwo + props.id}>
            {props.answerTwo}
          </label>
        </li>
        <li>
          <input
            type="radio"
            name={props.id}
            id={props.answerThree}
            value={props.answerThree}
            checked={props.checked === props.answerThree}
            onChange={(event) => props.handleChange(event, props.id)}
          />
          <label htmlFor={props.answerThree} id={props.answerThree + props.id}>
            {props.answerThree}
          </label>
        </li>
        <li>
          <input
            type="radio"
            name={props.id}
            id={props.answerFour}
            value={props.answerFour}
            checked={props.checked === props.answerFour}
            onChange={(event) => props.handleChange(event, props.id)}
          />
          <label htmlFor={props.answerFour} id={props.answerFour + props.id}>
            {props.answerFour}
          </label>
        </li>
      </ul>
    </div>
  );
}
