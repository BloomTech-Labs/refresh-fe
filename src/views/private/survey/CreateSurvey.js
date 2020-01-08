import React, { useEffect, useState, Fragment } from "react"; // eslint-disable-line no-unused-vars
import { Route, Link } from "react-router-dom"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import axios from "axios"; // eslint-disable-line no-unused-vars

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
  const [newQuestion, setNewQuestion] = useState(false);

  const [enabledBtn, setEnabledBtn] = useState(false);
  console.log("fresh q", questions);
  const questionHandleChange = (e, i) => {
    questions[i] = {
      ...questions[i],
      [e.target.name]: e.target.value
    };
    questions[i].question &&
      questions[i].question.length > 2 &&
      questions[i].questionType &&
      questions[i].questionType.length > 2 &&
      setNewQuestion(true);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  let errors = {};
  useEffect(() => {
    errors.surveyName = !form.name && "Please enter a name for your survey";
    errors.surveyDesc =
      !form.description && "Please enter a description for your survey";

    //TODO -- figure out why this wasn't reading correctly
    // errors.surveyQType =
    //   !form.questionType &&
    //   "Please select which type of answers this survey is looking for";
    !errors.surveyName && !errors.surveyDesc && setEnabledBtn(true);
  }, [form]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", questionType: "" }]);
    setNewQuestion(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!enabledBtn) {
      alert(errors.surveyName || errors.surveyDesc || errors.surveyQType);
    } else {
      const data = { ...form, question_ids: questions };
      axiosWithAuth()
        .post("/questiongroups", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  console.log("questions state", questions);

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
            return (
              <StyledQuestions>
                <h3>QUESTION {i + 1}</h3>
                <input
                  type="text"
                  name="question"
                  placeholder="What question would you like to ask?"
                  onChange={e => questionHandleChange(e, i)}
                />
                <h3>QUESTION TYPE</h3>
                <select
                  name="questionType"
                  onChange={e => questionHandleChange(e, i)}
                >
                  <option defaultValue="">Please Select One</option>
                  <option value="multiple choice">Multiple Choice</option>
                  <option value="slider">Slider</option>
                  <option value="text reply">Text Reply</option>
                </select>
              </StyledQuestions>
            );
          })}
        </>

        {newQuestion && (
          <div
            onClick={() => {
              addQuestion();
            }}
          >
            Add Question
          </div>
        )}
        <StyledButton type="submit">Submit your survey</StyledButton>
      </StyledForm>
    </StyledWrapper>
    //styled comp
  );
};

const StyledForm = styled.form`
  display: flex;
  margin: 0 auto;
  padding-top: 10rem;
  width: 100%
  flex-direction: column;
    input {
       font-family: Catamaran;
       font-size: 1.3rem;
      padding: 1.0rem;
      border: none;
    width: 100%;
    color: rgba(204, 201, 255, 0.4);
    background: #3D3B91;
  }
  select {
    font-size: 1.3rem;
    padding: 1.0rem;
    font-family: Catamaran;
    border: none;
    width: 100%;
    color: rgba(204, 201, 255, 0.4);
    background: #3D3B91;
  }
  h3 {
    font-family: Catamaran;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2.6rem;
    letter-spacing: 0.035em;
    color:  #B8B7E1;
  }

`;
const StyledWrapper = styled.div`
  font-family: Catamaran;
  margin: 0 auto;
  max-width: 80vw;
`;

const StyledButton = styled.button`
  padding: 1rem;
  width: 251px;
  text-align: center;
  margin: 0 auto;
  color: #e6e6e6;
  background-color: #e05cb3;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`;

const StyledQuestions = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
`;

export default SurveyForm;
