import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Choose your role.</h1>
      <Link to="/patient-login">
        <button>Patient</button>
      </Link>

      <Link to="/med-login">
        <button>Provider</button>
      </Link>
    </div>
  );
}

export default LandingPage;
