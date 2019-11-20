import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../utils/styledComponents.js";

function LandingPage() {
  return (
    <div>
      <h1>Choose your role.</h1>
      <Link to="/patient-login">
        <Button>Patient</Button>
      </Link>

      <Link to="/med-login">
        <Button>Provider</Button>
      </Link>
    </div>
  );
}

export default LandingPage;
