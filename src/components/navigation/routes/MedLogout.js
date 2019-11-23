import React from "react";
import { Redirect } from "react-router-dom";

function MedLogout(props) {
  localStorage.removeItem("medtoken");
  localStorage.removeItem("id");
  localStorage.removeItem("message");

  return <Redirect to="/med-login" />;
}

export default MedLogout;
