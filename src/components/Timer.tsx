import { useRef, useState } from "react";

type timerProp = ReturnType<typeof setTimeout>;

export default function Timer() {
  const [timer, setTimer] = useState<number>(0);
  const timerRef = useRef<timerProp>();

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((tm) => tm + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div className="mb-1">
      <h2 className="mb-1 mt-1">Timer {timer}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
