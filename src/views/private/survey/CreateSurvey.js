import React, { useEffect, useState, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";

const SurveyForm = () => {
  const [questions, setQuestions] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [enabledBtn, setEnabledBtn] = useState(false);

  console.log(formValues);

  const questionHandleChange = (idx, e) => {
    const values = [...questions];
    if (e.target.name.includes("question_")) {
      values[idx].question = e.target.value;
    } else {
      values[idx].questionType = e.target.value;
    }
    setQuestions(values);
  };

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  //   const handleQuestions = () => {
  //       setQuestions([...questions, e.])
  //   }
  let errors = {};
  useEffect(() => {
    errors.surveyName =
      !formValues.name && "Please enter a name for your survey";
    errors.surveyDesc =
      !formValues.description && "Please enter a description for your survey";
    errors.surveyQType =
      !formValues.questionType &&
      "Please select which type of answers this survey is looking for";
    !errors.surveyName &&
      !errors.surveyDesc &&
      !errors.surveyQType &&
      setEnabledBtn(true);
  }, [formValues]);

  const addQuestion = () => {
    console.log("added question");
    const values = [...questions];
    values.push({ question: "", questionType: "" });
    setQuestions(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!enabledBtn) {
      alert(errors.surveyName || errors.surveyDesc || errors.surveyQType);
    } else {
      Object.keys(formValues).map(key => {
        if (key.includes("question_")) {
          console.table(formValues);
          // console.log("question value", form.question_.value )
          console.log("form{key}", formValues[key]);
          formValues.question_ids = [formValues[key]];
        }
      });
      console.log("form", formValues);
      e.preventDefault();
      axiosWithAuth()
        .post("https://apidevnow.com/questiongroups", formValues)
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
        {formValues.map((value, index) => (
          <Fragment key={`${value}~${index}`}>
            <>
              <h3>SURVEY NAME</h3>
              <input
                type="text"
                name="name"
                value={value.name}
                placeholder="Create a name for this mission"
                onChange={handleChange}
              />
              <h3>SURVEY DESCRIPTION</h3>
              <input
                type="text"
                name="description"
                value={value.description}
                placeholder="Add a description for your mission..."
                onChange={handleChange}
              />
              <h3>QUESTION {questionCount}</h3>
              <input
                type="text"
                name={`question_` + questionCount}
                placeholder="What question would you like to ask?"
                onChange={questionHandleChange}
              />
              <h3>QUESTION TYPE</h3>
              <select name="questionType" onChange={questionHandleChange}>
                <option value="">Please Select One</option>
                <option value="multiple choice">Multiple Choice</option>
                <option value="slider">Slider</option>
                <option value="text reply">Text Reply</option>
              </select>
              <div onClick={addQuestion}>Add Question</div>
            </>
          </Fragment>
        ))}

        <button type="submit">Submit</button>
      </StyledForm>
    </StyledWrapper>
    //styled comp
  );
};

const StyledButton = styled.button``;

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
