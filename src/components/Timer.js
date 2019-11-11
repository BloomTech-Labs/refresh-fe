import React from 'react';
import './timer-styles.css';
import { useTimer } from 'react-timer-hook';
 
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