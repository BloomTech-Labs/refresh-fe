import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";

const SurveyForm = () => {
  const [form, setForm] = useState({
      
  });

  const postData = axios.post(
    "https://apidevnow.com/questiongroups",
    form
  );

  const handleChange = e => {
    setForm({
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    postData();
  };

  return (
        <>
        <StyledWrapper>
      
        <StyledForm onSubmit={handleSubmit}>
          <label>SURVEY NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Create a name for this mission"
            onChange={handleChange}
          />
          <label>SURVEY DESCRIPTION</label>
          <input
            type="text"
            name="description"
            placeholder="Add a description for your mission..."
          />
          <label>QUESTION 1</label>
          <input
            type="text"
            name="question"
            placeholder="What question would you like to ask?"
          />
          <label>QUESTION TYPE</label>
          <select id="question_type">
            <option value="multiple choice">Multiple Choice</option>
            <option value="slider">Slider</option>
            <option value="text reply">Text Reply</option>
          </select>
          <button type="submit">Submit</button>
        </StyledForm>
      </StyledWrapper>
      </>
    //styled comp
  )};

 const StyledForm = styled.form`
 display: flex;
 margin: 0 auto;
 flex-direction: column;
  `
const StyledWrapper = styled.div`
margin: 0 auto;
max-width: 500px;`

export default SurveyForm;
