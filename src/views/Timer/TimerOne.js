import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './timer-styles.css';
import { useTimer } from 'react-timer-hook';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 
export function TimerOne ({ expiryTimestamp }) {

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
    setPercentage(-1 * (min / 25));
  }, [seconds])

  // let sprint = 4;

  // if (sprint && minutes == 0 && seconds == '00') {
  //   let t = new Date();
  //   t.setSeconds(t.getSeconds() + 300); // 5 minutes timer
  //   return <Route render={() => <TimerLongBreak expiryTimestamp={t} />} />
  // } else {

  return (
    <div className="clock">
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
        <Link to='/break-1'>
          <i className="fa fa-arrow-circle-o-right"></i>
        </Link>
      </div>
      
      <div className="sprints">
      <div className="sprint one">
          <CircularProgressbar
            value={percentage}
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: '#6487FF',
              trailColor: 'white',
            })}
        />
        </div>
        <div className="sprint two">
          <CircularProgressbar
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: 'white',
            })}
        />
        </div>
        <div className="sprint three">
          <CircularProgressbar
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: 'white'
            })}
        />
        </div>
        <div className="sprint four">
          <CircularProgressbar
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: 'white'
            })}
        />
        </div>
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
// }
 
export default function Display() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 1500); // 25 minutes timer
  return (
    <div>
      <TimerOne expiryTimestamp={t} />
    </div>
  );
}