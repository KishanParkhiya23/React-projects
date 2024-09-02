import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  handleSelectAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let btnClasses = "";
        const isSelect = answer === selectedAnswer;

        if (isSelect && answerState === "answered") {
          btnClasses = "selected";
        }

        if (
          isSelect &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          btnClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => handleSelectAnswer(answer)}
              className={btnClasses}
              disabled={answerState ? "disabled" : ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
