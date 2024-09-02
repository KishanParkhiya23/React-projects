import endQuizImg from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";

export default function Summary({ selectedAnswers }) {
  const skippedAnswers = selectedAnswers.filter((answer) => answer === null);

  const correctAnswers = selectedAnswers.filter((answer, index) => {
    return answer === QUESTION[index].answers[0];
  });

  console.log("skip:", skippedAnswers, "correct:", correctAnswers);

  const skippedAnswerPer = Math.round((skippedAnswers.length / QUESTION.length) * 100);
  const correctAnswerPer = Math.round((correctAnswers.length / QUESTION.length) * 100);
  const wrongAnswerPer = 100 - correctAnswerPer - skippedAnswerPer;

  return (
    <div id="summary">
      <img src={endQuizImg} alt="Quiz end" />
      <h2>Quiz is end!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPer}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPer}%</span>
          <span className="text">Correct answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswerPer}%</span>
          <span className="text">Incorrect answers</span>
        </p>
      </div>

      <ol>
        {selectedAnswers.map((answer, index) => {
          let answerCss = "user-answer";

          if (answer === null) {
            answerCss += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            answerCss += " correct";
          } else {
            answerCss += " wrong";
          }

          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={answerCss}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
