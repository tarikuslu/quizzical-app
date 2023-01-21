import React, { useState, useEffect } from "react";
import "../style/QuestionsStyle.css";
import Question from "../components/Question";
import { nanoid } from "nanoid";
import StyledButton from "../components/StyledButton";
export default function Questions() {
  const [formQuestions, setFormQuestions] = useState();
  const [testOverall, setTestOverall] = useState("");
  const [testFinished, setTestFinished] = useState(false);
  useEffect(() => {
    fetchRequest();
  }, []);

  function fetchRequest() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setFormQuestions((prev) => {
          const arr = data.results.map((que) => {
            let choices = [...que.incorrect_answers, que.correct_answer];
            choices = choices.sort(() => Math.random() - 0.5);
            return {
              question: que.question,
              choices: choices,
              correct_answer: que.correct_answer,
              checked: "",
              id: nanoid(),
            };
          });
          return arr;
        });
      });
  }

  const questionElements =
    formQuestions &&
    formQuestions.map((que) => {
      const questionText = que.question.replaceAll("&quot;", '"');
      return (
        <Question
          title={questionText}
          answerOne={que.choices[0]}
          answerTwo={que.choices[1]}
          answerThree={que.choices[2]}
          answerFour={que.choices[3]}
          checked={que.checked}
          id={que.id}
          handleChange={chooseAnswer}
        />
      );
    });

  function checkValid() {
    const validArr = formQuestions.filter(
      (question) => question.checked === ""
    );
    let returnValidity;
    validArr.length === 0 ? (returnValidity = true) : (returnValidity = false);

    return returnValidity;
  }

  function handleCheck(event) {
    event.preventDefault();
    let correctCounter = 0;
    let falseCounter = 0;

    const valid = checkValid();

    if (!valid) {
      alert("You need to answer all the questions!");
      return;
    }

    if (event.target.textContent === "Check Answers") {
      formQuestions.forEach((element) => {
        if (element.checked === element.correct_answer) {
          document
            .getElementById(element.checked + element.id)
            .classList.add("true");
          correctCounter++;
        } else {
          document
            .getElementById(element.checked + element.id)
            .classList.add("false");

          document
            .getElementById(element.correct_answer + element.id)
            .classList.add("true");
          falseCounter++;
        }
        setTestOverall((prev) => (
          <span className="overall">
            You scored {correctCounter} / {correctCounter + falseCounter}{" "}
            correct answers
          </span>
        ));

        setTestFinished((prev) => !prev);
      });
    } else {
      setTestOverall("");
      setTestFinished((prev) => !prev);
      fetchRequest();
      document.querySelectorAll("label").forEach((element) => {
        element.classList.remove("true");
        element.classList.remove("false");
      });
    }
  }

  function chooseAnswer(event, id) {
    setFormQuestions((prevForm) =>
      prevForm.map((prev) => {
        return prev.id === id ? { ...prev, checked: event.target.value } : prev;
      })
    );
  }

  return (
    <div className="container">
      <form>
        {formQuestions && questionElements}
        <div className="btn-container">
          {testFinished && testOverall}
          <StyledButton
            title={testFinished ? "Play Again" : "Check Answers"}
            handleClick={handleCheck}
          />
        </div>
      </form>
    </div>
  );
}
