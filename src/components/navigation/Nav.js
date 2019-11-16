import React from "react";
import { Route, withRouter, NavLink, Link } from "react-router-dom";
import { getMedToken } from "../utils/medApi";
import { getToken } from "../utils/api";
import PatientLoginForm from "../forms/PatientLoginForm";
import MedicLoginForm from "../forms/MedicLoginForm";
import PatientRegistrationForm from "../forms/PatientRegistrationForm";
import MedRegistrationForm from "../forms/MedRegistrationForm";
import MedProtectedRoute from "./routes/MedProtectedRoute";
import PatientProtectedRoute from "./routes/PatientProtectedRoute";

const Nav = () => {
  const MedSignedIn = getMedToken();
  const PatientSignedIn = getToken();
  return (
    <div>
      <nav>
        <Link to="med-signin">Med Sign In</Link>
        <Link to="patient-signin">Patient Sign In</Link>
        <Link to="med-register">Med Register</Link>
        <Link to="patient-register">Patient Register</Link>
        <Link to="patient-account">My Account</Link>
        <Link to="med-account">My Account</Link>
        <Link to="med-logout">Logout</Link>
        <Link to="patient-logout">Logout</Link>
      </nav>

      <Route exact path="/med-signin" />
      <Route exact path="/patient-signin" />
      <Route exact path="/med-register" />
      <Route exact path="/patient-register" />
      <Route exact path="/med-account" />
      <Route exact path="/patient-account" />
    </div>
  );
};

export default withRouter(Nav);
