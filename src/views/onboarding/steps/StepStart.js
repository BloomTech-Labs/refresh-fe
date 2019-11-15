// IMPORTS
// react
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";

// components
import Steps from "./Steps";

const StepStart = props => {
  const [form, setForm] = useState();
  useEffect(()=> {
    axios.get("https://apidevnow.com/questiongroups/1")
   //  .then(res => console.log(res.data))
    .then(res => {
      setForm(res.data.questions);
    })
    .catch(err => console.log(err))
  }, []);

  const [answer, setAnswer] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleChanges = (value) => {
    setAnswer({...answer, value});
  };



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

  const handleSubmit = values => { 
console.log(form)
if(form && form[currentStep].id === form.length){
  props.history.push("/dashboard")
}
setCurrentStep(currentStep + 1);
}

  return (
    <>
      <UserContext.Provider
        value={{ form, answer, setAnswer, handleChanges, handleSubmit, currentStep }}
      >
        <Steps />
      </UserContext.Provider>
    </>
  );
};

export default StepStart;
