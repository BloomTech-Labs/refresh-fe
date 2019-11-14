// IMPORTS
// react
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";

// components
import StepOne from "./StepOne";

let profilequestions = [
  {
    question: "What do you currently weigh?",
    currentStep: 1
  },
  {
    question: "How tall are you?",
    currentStep: 2
  },
  {
    question: "How often do you feel overwhelmed?",
    currentStep: 3
  },
  {
    question: "How many times did you sleep over 6 hours this week?",
    currentStep: 4
  },
  {
    question:
      "How many times this past week did you take proper Zoom meeting breaks as a team?",
    currentStep: 5
  },
  {
    question:
      "How many times did you exercise for at least 30 minutes this past week?",
    currentStep: 6
  },
  {
    question:
      "How many times did you drink at least 8 glasses of water in a day this past week?",
    currentStep: 7
  },
  {
    question:
      "How many times did you incorporate a fruit or vegetable into your day this past week?",
    currentStep: 8
  },
  {
    question: "How many times this past week did you do desk stretches?",
    currentStep: 9
  },
  {
    question:
      "How many times have you met with your teammates this past week to play a game or chat?",
    currentStep: 10
  }
];

const StepStart = props => {
  const [form, setForm] = useState(profilequestions);
  const [user, setUser] = useState({
    sleepStats: 3,
    overWhelmedStats:"",
    breakStats: 3,
    exerciseStats: 3,
    hydrationStats:3,
    healthFoodStats:3,
    stretchStats: 3,
    teamBuildStats: 3
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleChanges = e => {
    console.log(user);
    setUser({...user, [e.target.name]: e.target.value });
  };

  const handleSleepChange = value =>  setUser({sleepStats:value})
  const handleBreakChange = value =>  setUser({breakStats:value})
  const handleExerChange = value =>  setUser({exerciseStats:value})
  const handleHydraChange = value =>  setUser({hydrationStats:value})
  const handleHealthChange = value =>  setUser({healthFoodStats:value})
  const handleStretchCange = value =>  setUser({stretchStats:value})
  const handleTeamChange = value =>  setUser({teamBuildStats:value})



 useEffect(()=> {
   axios.get("/questions")
   .then(res => console.log(res))
  //  .then(res => {
  //    setForm(res.data);
  //  })
   .catch(err => console.log(err))
 })

  // const handleSubmit = form => {
  //   if (currentStep >= 10) {
  //     console.log(user, form);
  //     // axios.post("/userinfo", form)
  //     // .then(res => {
  //     //   console.log(res)
  //     //   history.pushState("/dashboard");
  //     // })
  //     // .catch(err =>{
  //     //   console.log(err);
  //     // })
  //   }
  //   // setForm(form);
  //   setCurrentStep(currentStep + 1);
  // };

  const handleSubmit = form => {
if(currentStep >= 10){
  props.history.push("/dashboard");
}
setCurrentStep(currentStep + 1);
  }
  return (
    <>
      <UserContext.Provider
        value={{ form, user, setUser, handleChanges, handleSleepChange, handleBreakChange, handleExerChange, handleHydraChange, handleHealthChange, handleStretchCange, handleTeamChange, handleSubmit, currentStep }}
      >
        <StepOne />
      </UserContext.Provider>
    </>
  );
};

export default StepStart;
