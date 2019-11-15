import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './timer-styles.css';
import { useTimer } from 'react-timer-hook';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TimerFour } from './TimerFour';
 
export function TimerShortBreakThree ({ expiryTimestamp }) {

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

  let [percentage, setPercentage] = useState();
  let [min, setMinutes] = useState(minutes);

  useEffect(() => {
    setMinutes(min - 1);
    console.log(min);
    setPercentage(-1 * (min / 5));
    console.log(percentage);
  }, [seconds])

  let rest = 3;

  if (rest && minutes == 0 && seconds == '00') {
    let t = new Date();
    t.setSeconds(t.getSeconds() + 1500); // 25 minutes timer
    return <Route render={() => <TimerFour expiryTimestamp={t} />} />
  } else {

  return (
    <div className="clock">
      <h1>Pomodoro Clock</h1>
      <div className="timer">
      <>
      <CircularProgressbar value={percentage} strokeWidth={2} text={`${minutes}:${seconds}`}
        styles={buildStyles({
          pathColor: `#6487FF, ${percentage}`,
          trailColor: 'white',
          textColor: 'white',
          textSize: '16px',
          pathTransitionDuration: 0.5,
        })}
      > 
        <div className="time">
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </CircularProgressbar>
      </>
      </div>

      <div className="buttons">
        <i className="far fa-play-circle" onClick={resume}></i>
        <i className="far fa-pause-circle" onClick={pause}></i>
      </div>
     
      <div className="instructions">
        <p>Take a short break.</p>
      </div>
    </div>
  );
}
}
 
export default function Display() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 300); // 5 minutes timer
  return (
    <div>
      <TimerShortBreakThree expiryTimestamp={t} />
    </div>
  );
}