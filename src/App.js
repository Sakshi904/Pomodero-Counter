import "./App.css";
import React, { useState } from "react";
function padTime(time) {
  return time.toString().padStart(2, "0");
}
export default function App() {
  const [timeleft, setTimeLeft] = useState(10);
  const [beginText, setText] = useState("Let's begin");
  const minutes = padTime(Math.floor(timeleft / 60));
  const seconds = padTime(Math.floor(timeleft - minutes * 60));
  function startTimer() {
    setInterval(() => {
      setTimeLeft((timeleft) => {
        if (timeleft >= 1) return timeleft - 1;
        else return 0;
      });
    }, 1000);
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
        <button onClick={startTimer}>Start </button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
