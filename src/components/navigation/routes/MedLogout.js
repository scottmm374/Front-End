import React from "react";
import { Redirect } from "react-router-dom";

function MedLogout(props) {
  // Token is not being removed, not sure why. Redirect to login is working.
  localStorage.removeItem("medtoken");

  return <Redirect to="/med-login" />;
}

export default MedLogout;
