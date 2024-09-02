import QuizTimer from "./QuizTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTION from "../questions.js";

export default function Question({ index, onSelect, handleNullSelected }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 500;
  }
  if (answer.isCorrect !== null) {
    timer = 601;
  }

  function handleSelectAnswer(passedAnswer) {
    setAnswer({
      selectedAnswer: passedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: passedAnswer,
        isCorrect: QUESTION[index].answers[0] === passedAnswer,
      });

      setTimeout(() => {
        onSelect(passedAnswer);
      }, 601);
    }, 500);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <b className="question-number">{index + 1}</b>
      <QuizTimer
        key={timer}
        timeOut={timer}
        onTimeOut={answer.selectedAnswer === "" ? handleNullSelected : null}
        mode={answerState}
      />
      <h2>{QUESTION[index].text}</h2>

      <Answers
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
