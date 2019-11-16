import React from "react";
import { Redirect } from "react-router-dom";

function MedLogout(props) {
  // Nothing has to happen on the server to log out,
  // just delete the token
  localStorage.removeItem("medtoken");

  return <Redirect to="/med-signin" />;
}

export default MedLogout;
