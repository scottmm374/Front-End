import React from "react";
import { Redirect } from "react-router-dom";

function PatientLogout(props) {
  // Nothing has to happen on the server to log out,
  // just delete the token
  localStorage.removeItem("token");

  return <Redirect to="/patient-signin" />;
}

export default PatientLogout;
