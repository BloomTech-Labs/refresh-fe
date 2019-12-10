import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Clock = styled.div`
  display: flex;
  flex-direction: column;
`

const Timer = styled.div`
  margin: 20px auto;
  
  @media screen and (max-width:500px) {
    margin-bottom: 0;
    margin-top: 20px;
  }

  @media screen and (min-width:800px) {
    width: 20vw;
    height: 20vh;
    margin-bottom: 150px;
  }
`

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const Sprints = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -30px;
`

const Sprint = styled.div`
  width: 20%;

  @media screen and (min-width:800px) {
    width: 10%;
  }
`

const FirstSecondIcon = styled.i`
  display: inline-block;
  color: #6487FF;
  font-size: 50px;
  margin-bottom: 60px;
  margin-right: 40px;
`

const ThirdIcon = styled.i`
  display: inline-block;
  color: #6487FF;
  font-size: 50px;
  margin-bottom: 60px;
`

const Instructions = styled.div`
  color: white;
  font-size: 16px;
  font-family: Catamaran;
  text-align: center;
  margin: 60px 20px;
`

const Text = styled.p`
  line-height: 1.5;
`

const Bold = styled.span`
  font-weight: 600;
`
 
export function TimerTwo ({ expiryTimestamp}) {
  
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
        <Link to="break-2">
          <ThirdIcon className="far fa-arrow-alt-circle-right"></ThirdIcon>  
        </Link>     
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
        <Text>3. Next, take a <Bold>5 minute</Bold> break. Get up, take a <Bold>walk</Bold>, refill your <Bold>water</Bold>, <Bold>stretch</Bold>>, and take <Bold>5 deep breaths</Bold> in and out.</Text>
      </Instructions>
    </Clock>
  );
}
 
export default function Display() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 1500); // 25 minutes timer
  return (
    <div>
      <TimerTwo expiryTimestamp={t} />
    </div>
  );
}