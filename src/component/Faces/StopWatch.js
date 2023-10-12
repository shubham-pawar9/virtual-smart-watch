import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [stopWatchStatus, setStopWatchStatus] = useState("Start");
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  const handleStopWatch = () => {
    if (stopWatchStatus === "Start") {
      setStopWatchStatus("Stop");
      startTimer();
    } else {
      setStopWatchStatus("Start");
      stopTimer();
    }
  };

  const startTimer = () => {
    const startTime = Date.now() - elapsedTime;
    timerRef.current = setInterval(() => {
      const now = Date.now();
      setElapsedTime(now - startTime);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setStopWatchStatus("Start");
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const pad = (value) => (value < 10 ? `0${value}` : value);
    const milliseconds = pad(Math.floor((time % 1000) / 10));
    const seconds = pad(Math.floor((time / 1000) % 60));
    const minutes = pad(Math.floor((time / (1000 * 60)) % 60));
    const hours = pad(Math.floor(time / (1000 * 60 * 60)));
    return `${hours}:${minutes}:${seconds}`;
  };
  const miliSeconds = (time) => {
    const pad = (value) => (value < 10 ? `0${value}` : value);
    const milliseconds = pad(Math.floor((time % 1000) / 10));
    return `${milliseconds}`;
  };

  return (
    <>
      <div className="stopWatch">
        <h2 className="stopWatchHeading">Stop Watch</h2>
        <div className="numbers">
          <div className="secNum">
            <span className="milSeconds">{miliSeconds(elapsedTime)}</span>
          </div>
          <div className="mainNum">
            <span className="all-time">{formatTime(elapsedTime)}</span>
          </div>
        </div>
        <div className="btnDiv">
          <button className="start-stop" onClick={handleStopWatch}>
            {stopWatchStatus}
          </button>
          <button className="reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
