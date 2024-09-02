import { useState, useEffect } from "react";

export default function ProgressBar({ defaultTime }) {
  const [remainTime, setRemainTime] = useState(defaultTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prevRemainTime) => prevRemainTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainTime} max={defaultTime} />;
}
