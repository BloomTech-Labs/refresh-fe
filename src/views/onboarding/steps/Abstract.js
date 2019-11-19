import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
import InfoIntro from "./InfoIntro"
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";

const Abstract = props => {
    console.log(props)
    const [form, setForm] = useState();
    useEffect(() => {
      axiosWithAuth()
        .get("/questiongroups/1")
        //  .then(res => console.log(res.data))
        .then(res => {
          setForm(res.data.questions);
        })
        .catch(err => console.log(err));
    }, []);
    const [answer, setAnswer] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleSubmit = e => {
        const value = e.target.dataset["answer"]
        const questionId = e.target.dataset.question
        console.log(value, questionId)
        setAnswer([...answer, {answer: value, questionId: questionId}])
        if (form && currentStep === form.length) {
          console.log(answer);
          props.history.push("/dashboard");
        }
        setCurrentStep(currentStep + 1);
      };

    }