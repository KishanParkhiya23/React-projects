import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [remainTime, setRemainTime] = useState(targetTime * 1000);
  const isTimerActive = remainTime > 0 && remainTime < targetTime * 1000;

  if (remainTime <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handleReset() {
    setRemainTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainTime((previousRemainTime) => previousRemainTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainTime={remainTime}
        resetTimer={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : ""}>
          {isTimerActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
