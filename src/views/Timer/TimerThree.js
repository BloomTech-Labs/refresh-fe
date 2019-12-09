import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 
export function TimerThree ({ expiryTimestamp }) {

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

  return (
    <Clock>
      <Timer>
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
      </Timer>

      <Buttons>
        <FirstSecondIcon className="far fa-play-circle" onClick={resume}></FirstSecondIcon>
        <FirstSecondIcon className="far fa-pause-circle" onClick={pause}></FirstSecondIcon>
        <ThirdIcon className="far fa-arrow-alt-circle-right"></ThirdIcon> 
      </Buttons>
      
      <Sprints>
        <Sprint>
          <CircularProgressbar
            value='100%'
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: '#6487FF',
              trailColor: 'white',
            })}
        />
        </Sprint>
        <Sprint>
          <CircularProgressbar
            value='100%'
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: '#6487FF',
              trailColor: 'white',
            })}
        />
        </Sprint>
        <Sprint>
          <CircularProgressbar
            value={percentage}
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: '#6487FF',
              trailColor: 'white',
            })}
        />
        </Sprint>
        <Sprint>
          <CircularProgressbar
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: 'white'
            })}
        />
        </Sprint>
      </Sprints>
      <Instructions>
        <Text>1. Evidence shows people are more productive when they work in <Bold>short bursts</Bold> with <Bold>frequent breaks</Bold>.</Text>
        <br></br>
        <Text>2. The <Bold>Pomodoro Technique</Bold> is a strategy that utilizes this theory. First, work in a sprint of <Bold>25 minutes</Bold>.</Text>
        <br></br>
        <Text>3. Next, take a <Bold>5 minute</Bold> break. Get up, take a <Bold>walk</Bold>, refill your <Bold>water</Bold>, <Bold>stretch</Bold>, and take <Bold>5 deep breaths</Bold> in and out.</Text>
      </Instructions>
    </Clock>
  );
}
// }
 
export default function Display() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 1500); // 25 minutes timer
  return (
    <div>
      <TimerThree expiryTimestamp={t} />
    </div>
  );
}