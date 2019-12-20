import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";

const SurveyForm = () => {
  const [form, setForm] = useState({
  
  });
  const [enabledBtn, setEnabledBtn] = useState(false);
  console.log(form);
  //   const [questions, setQuestions] = useState([]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const handleQuestions = () => {
  //       setQuestions([...questions, e.])
  //   }
  let errors = {};
  useEffect(() => {
    errors.surveyName = !form.name && "Please enter a name for your survey";
    errors.surveyDesc =
      !form.description && "Please enter a description for your survey";
    errors.surveyQType =
      !form.questionType &&
      "Please select which type of answers this survey is looking for";
    !errors.surveyName &&
      !errors.surveyDesc &&
      !errors.surveyQType &&
      setEnabledBtn(true);
  }, [form]);

  
  const handleSubmit = e => {
    e.preventDefault();
    if (!enabledBtn) {
      alert(errors.surveyName || errors.surveyDesc || errors.surveyQType);
    } else {
     
      Object.keys(form).map(key => {
        if (key.includes("question_")) {
          console.table(form)
          // console.log("question value", form.question_.value )
           console.log("form{key}", form[key]);
          form.question_ids = [form[key]];
        }
      });
      console.log("form", form);
      e.preventDefault();
      axiosWithAuth()
        .post("https://apidevnow.com/questiongroups", form)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      count = 1;
    }
  };
  let count = 1;
  const questionCount = count++;

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <h3>SURVEY NAME</h3>
        <input
          type="text"
          name="name"
          placeholder="Create a name for this mission"
          onChange={handleChange}
        />
        <h3>SURVEY DESCRIPTION</h3>
        <input
          type="text"
          name="description"
          placeholder="Add a description for your mission..."
          onChange={handleChange}
        />
        <h3>QUESTION {questionCount}</h3>{" "}
        <input
          type="text"
          name={`question_` + questionCount}
          placeholder="What question would you like to ask?"
          onChange={handleChange}
        />
        <h3>QUESTION TYPE</h3>
        <select name="questionType" onChange={handleChange}>
          <option value="">Please Select One</option>
          <option value="multiple choice">Multiple Choice</option>
          <option value="slider">Slider</option>
          <option value="text reply">Text Reply</option>
        </select>
        <button type="submit">Submit</button>
      </StyledForm>
    </StyledWrapper>
    //styled comp
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25%;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 500px;
`;

export default SurveyForm;
