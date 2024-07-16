import { useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState<number>(0);

  const startTimer = () => {};

  const stopTimer = () => {};

  return (
    <div className="mb-1">
      <h2 className="mb-1 mt-1">Timer {timer}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
