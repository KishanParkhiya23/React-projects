import { useState, useCallback, useRef } from "react";
import QUESTION from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const activeAnswerIndex = selectedAnswers.length;
  const isQuizEnd = activeAnswerIndex === QUESTION.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      return [...prevSelectedAnswers, selectedAnswer];
    });
  }, []);

  const handleNullSelected = useCallback(() => handleSelectAnswer(null), []);

  if (isQuizEnd) {
    return <Summary selectedAnswers={selectedAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeAnswerIndex}
        index={activeAnswerIndex}
        onSelect={handleSelectAnswer}
        handleNullSelected={handleNullSelected}
      />
    </div>
  );
}
