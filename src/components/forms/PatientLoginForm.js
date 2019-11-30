import React, { useState } from "react";

import history from "../../history";
import { Link } from "react-router-dom";
import api from "../utils/api";
import styled from "styled-components";
import {
  // LightCard,
  NewLable
  // FormContainer,
  // FlexWarp
} from "../utils/styledComponents.js";

export const Button = styled.button`
  background: #ff9d65;
  color: #ffffff;
  &:hover {
    background: #ffb286;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  border-radius: 4px;
  border: none;
  margin: auto 15px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
`;

function PatientLoginForm(props) {
  const [patientLogin, setPatientLogin] = useState({
    userEmail: "",
    userPassword: ""
  });

  const handleChange = e => {
    setPatientLogin({
      ...patientLogin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/auth/user-login", patientLogin)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("message", res.data.message);
        localStorage.setItem("patientEmail", patientLogin.userEmail);
        history.push(`/patient-home/`);
      })

      .catch(err => {
        console.log("Patient login error", err);
      });
  };

  // console.log("message", message);
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        {/* <FlexWarp> */}
        {/* <FormContainer> */}
        {/* <NewLable>Email</NewLable> */}
        <input
          id="imForm"
          type="text"
          name="userEmail"
          value={patientLogin.userEmail}
          placeholder="Email"
          onChange={handleChange}
        />
        {/* <NewLable>Password</NewLable> */}
        <input
          id="imForm"
          type="password"
          name="userPassword"
          placeholder="Password"
          value={patientLogin.userPassword}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
        {/* <h3>New Patient?</h3> <Link to="patient-register">Register</Link> */}
        {/* </FormContainer> */}
        {/* </FlexWarp> */}
      </form>
    </div>
  );
}

export default PatientLoginForm;
