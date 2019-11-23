import React, { useState } from "react";
import history from "../../history";
import { Link } from "react-router-dom";
import api from "../utils/api";
import {
  Button,
  LightCard,
  NewLable,
  FormContainer,
  FlexWarp
} from "../utils/styledComponents.js";

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
    <LightCard>
      <form onSubmit={handleSubmit}>
        <FlexWarp>
          <FormContainer>
            <NewLable>Email</NewLable>
            <input
              id="imForm"
              type="text"
              name="userEmail"
              value={patientLogin.userEmail}
              placeholder="Email"
              onChange={handleChange}
            />
            <NewLable>Password</NewLable>
            <input
              id="imForm"
              type="password"
              name="userPassword"
              placeholder="Password"
              value={patientLogin.userPassword}
              onChange={handleChange}
            />
            <Button type="submit">Login</Button>
            <h3>New Patient?</h3> <Link to="patient-register">Register</Link>
          </FormContainer>
        </FlexWarp>
      </form>
    </LightCard>
  );
}

export default PatientLoginForm;
