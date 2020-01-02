import React, { useState } from "react";
import axiosWithAuth from "../../helpers/axiosWithAuth";
import styled from "styled-components";

const CreateSurveyTest = () => {
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

  console.log("test form", form);

  const handleSubmit = e => {
    e.preventDefault();
    const data = { ...form, questions };
    console.log("form", data);
  };

  return (
    <>
      <StyledContainer onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <input
          type="text"
          value={form.description}
          name="description"
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        {questions.map((group, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                name="question"
                onChange={e => {
                  questions[i] = {
                    ...questions[i],
                    [e.target.name]: e.target.value
                  };
                }}
              />
              <select
                name="questionType"
                onChange={e => {
                  questions[i] = {
                    ...questions[i],
                    [e.target.name]: e.target.value
                  };
                }}
              >
                <option value="">Please Select One</option>
                <option value="multiple choice">Multiple Choice</option>
                <option value="slider">Slider</option>
                <option value="text reply">Text Reply</option>
              </select>
            </div>
          );
        })}

        <button
          onClick={e => {
            e.preventDefault();
            setQuestions([...questions, { question: "", questionType: "" }]);
          }}
        >
          Add
        </button>
        <button type="submit">Submit</button>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.form`
  display: flex;
  width: 500px;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;
export default CreateSurveyTest;
