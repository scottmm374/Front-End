import React from "react";
import { Redirect } from "react-router-dom";

// Working correctly, removing token and redirecting to login

function PatientLogout(props) {
  localStorage.removeItem("token");
  console.log(localStorage);

  return <Redirect to="/patient-login" />;
}

export default PatientLogout;
