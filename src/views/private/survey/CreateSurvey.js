import React, { useEffect, useState, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import axios from "axios";

const SurveyForm = () => {
  const [questions, setQuestions] = useState([
    {
      question: "",
      questionType: ""
    }
  ]);
  const [form, setForm] = useState({
    name: "",
    description: ""
  });
  
  const [enabledBtn, setEnabledBtn] = useState(false);

  const questionHandleChange = (e, i) => {
    console.log("name", e.target.name);
    questions[i] = {
      ...questions[i],
      [e.target.name]: e.target.value
    };
    console.log("questions[i]", questions[i])
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  let errors = {};
  useEffect(() => {
    errors.surveyName = !form.name && "Please enter a name for your survey";
    errors.surveyDesc =
      !form.description && "Please enter a description for your survey";
    // errors.surveyQType =
    //   !form.questionType &&
    //   "Please select which type of answers this survey is looking for";
    !errors.surveyName &&
      !errors.surveyDesc &&
      setEnabledBtn(true);
  }, [form]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", questionType: "" }]);
    
    
  };

  const handleSubmit = e => {
  
    e.preventDefault();
    if (!enabledBtn) {
      alert(errors.surveyName || errors.surveyDesc || errors.surveyQType);
    } else {
      const data = { ...form, question_ids:questions };
      console.log("data", data)

      axiosWithAuth()
        .post("/questiongroups", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };



  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <>
          <h3>SURVEY NAME</h3>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Create a name for this mission"
            onChange={handleChange}
          />
          <h3>SURVEY DESCRIPTION</h3>
          <input
            type="text"
            name="description"
            value={form.description}
            placeholder="Add a description for your mission..."
            onChange={handleChange}
          />

          {questions.map((group, i) => {
            console.log(i);
            return (
              <div>
                <h3>QUESTION {i+1}</h3>
                <input
                  type="text"
                  name="question"
                  placeholder="What question would you like to ask?"
                  onChange={e => questionHandleChange(e, i)}
                />
                <h3>QUESTION TYPE</h3>
                <select name="questionType" onChange={e => questionHandleChange(e,i)}>
                  <option selected value="">Please Select One</option>
                  <option value="multiple choice">Multiple Choice</option>
                  <option value="slider">Slider</option>
                  <option value="text reply">Text Reply</option>
                </select>
              </div>
            );
          })}
          <div onClick={() => {addQuestion()}}>Add Question</div>
        </>

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
