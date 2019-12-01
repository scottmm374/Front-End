import React from "react";
import { Redirect } from "react-router-dom";

// Working correctly, removing token and redirecting to login

function PatientLogout(props) {
  localStorage.removeItem("token");
  localStorage.removeItem("patientEmail");
  localStorage.removeItem("id");
  localStorage.removeItem("message");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");

  return <Redirect to="/" />;
}

export default PatientLogout;
