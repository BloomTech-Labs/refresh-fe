import React, { useState } from 'react';
import './timer-styles.css';
import { useTimer } from 'react-timer-hook';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 
function Timer ({ expiryTimestamp }) {
  let {
    seconds,
    minutes,
    pause,
    resume,
    restart
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  if (seconds === 9) seconds = '09';
  if (seconds === 8) seconds = '08';
  if (seconds === 7) seconds = '07';
  if (seconds === 6) seconds = '06';
  if (seconds === 5) seconds = '05';
  if (seconds === 4) seconds = '04';
  if (seconds === 3) seconds = '03';
  if (seconds === 2) seconds = '02';
  if (seconds === 1) seconds = '01';
  if (seconds === 0) seconds = '00';

  if (seconds === '00') {
    // state logic to set sprints 1-4 goes here
  }

  const percentage = 0;

 
  return (
    <div className="clock">
      <h1>Pomodoro Clock</h1>
      <div className="time">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className="buttons">
        <button onClick={() => {
          // Restarts to 25 minutes timer
          var t = new Date();
          t.setSeconds(t.getSeconds() + 1500);
          restart(t)
        }}>Start Sprint</button>
        <button onClick={() => {
          // Restarts to 5 minutes timer
          var t = new Date();
          t.setSeconds(t.getSeconds() + 300);
          restart(t)
        }}>Start Break</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        {/* Last button needs a mobile rule but not sure what -- looks wrong when I inspect in small screen format */}
      </div>
      <div className="instructions">
        <p>1. Evidence shows people are more productive when they work in <span className="bold">short bursts</span> with <span className="bold">frequent breaks</span>.</p>
        <br></br>
        <p>2. The <span className="bold">Pomodoro Technique</span> is a strategy that utilizes this theory. First, work in a sprint of <span className="bold">25 minutes</span>.</p>
        <br></br>
        <p>3. Next, take a <span className="bold">5 minute</span> break. Get up, take a <span classname="bold">walk</span>, refill your <span className="bold">water</span>, <span className="bold">stretch</span>, and take <span className="bold">5 deep breaths</span> in and out.</p>
      </div>
    </div>
  );
}
 
export default function Display() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 1500); // 25 minutes timer
  return (
    <div>
      <Timer expiryTimestamp={t} />
    </div>
  );
}