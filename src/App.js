import "./App.css";
import React, { useState, useRef } from "react";
function padTime(time) {
  return time.toString().padStart(2, "0");
}
export default function App() {
  const [timeleft, setTimeLeft] = useState(3);
  const [beginText, setText] = useState("Let the countdown begin!");
  const [isRunning, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const minutes = padTime(Math.floor(timeleft / 60));
  const seconds = padTime(Math.floor(timeleft - minutes * 60));
  function startTimer() {
    if (intervalRef.current != null) return;
    intervalRef.current = setInterval(() => {
      setText("You are doing great!");
      setRunning(true);
      setTimeLeft((timeleft) => {
        if (timeleft >= 1) {
          return timeleft - 1;
        } else {
          resetTimer();
          return 0;
        }
      });
    }, 1000);
  }
  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setText("Keep it up");
    setRunning(false);
  }
  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setText("Ready to go another round?");
    setTimeLeft(25 * 60);
    setRunning(false);
  }
  return (
    <div className="app">
      <h2>{beginText}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start </button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        {<button onClick={resetTimer}>Reset</button>}
      </div>
    </div>
  );
}
