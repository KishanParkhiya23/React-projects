import quizImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizImg} alt="Logo image" />
      <h1>REACT Quiz</h1>
    </header>
  );
}
