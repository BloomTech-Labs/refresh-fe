import React from 'react';
import { useTimer } from 'react-timer-hook';
 
function Timer ({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    pause,
    resume,
    restart
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
 
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Pomodoro Clock</h1>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
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