import { useEffect, useState } from "react";

export default function QuizTimer({ timeOut, onTimeOut, mode }) {
  const [remainTime, setRemainTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainTime}
      max={timeOut}
      className={mode}
    />
  );
}
