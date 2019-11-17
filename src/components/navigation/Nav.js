import React from "react";
import { Route, withRouter, NavLink } from "react-router-dom";
import { getMedToken } from "../utils/medApi";
import { getToken } from "../utils/api";
import PatientLoginForm from "../forms/PatientLoginForm";
import MedicLoginForm from "../forms/MedicLoginForm";
import PatientRegistrationForm from "../forms/PatientRegistrationForm";
import MedRegistrationForm from "../forms/MedRegistrationForm";
import MedProtectedRoute from "./routes/MedProtectedRoute";
import PatientProtectedRoute from "./routes/PatientProtectedRoute";
import MedLogout from "./routes/MedLogout";
import PatientLogout from "./routes/PatientLogout";

const Nav = () => {
  const MedSignedIn = getMedToken();
  const PatientSignedIn = getToken();
  return (
    <div>
      <nav>
        {/* Med nav for testing, sign in and register remove once everything is in place */}
        {/* <NavLink to="med-register">Med Register</NavLink> */}
        {/* Conditionally show links on nav if logged in or not */}
        {/* {!MedSignedIn && <NavLink to="med-login">Med Sign In</NavLink>} */}
        {MedSignedIn && <NavLink to="med-account">Med Account</NavLink>}
        {MedSignedIn && <NavLink to="med-logout">Med Logout</NavLink>}

        {/* Patient for testing, remove sign in and register once done */}
        {/* <NavLink to="patient-register">Patient Register</NavLink> */}

        {/* Conditionally show links on nav if logged in or not */}
        {/* {!PatientSignedIn && (
          <NavLink to="patient-login">Patient Sign In</NavLink>
        )} */}
        {PatientSignedIn && (
          <NavLink to="patient-account">Patient Account</NavLink>
        )}
        {PatientSignedIn && (
          <NavLink to="patient-logout">Patient Logout</NavLink>
        )}
      </nav>

      {/*  Routes  if protected route, requires token to be set. */}
      {/* Med routes */}
      <Route exact path="/med-login" component={MedicLoginForm} />
      <MedProtectedRoute exact path="med-logout" component={MedLogout} />
      <Route exact path="/med-register" component={MedRegistrationForm} />
      {/* <MedProtectedRoute exact path="/med-account" component={} />

      {/* Patient routes */}
      <Route exact path="/patient-login" component={PatientLoginForm} />
      <Route
        exact
        path="/patient-register"
        component={PatientRegistrationForm}
      />
      <PatientProtectedRoute
        exact
        path="/patient-logout"
        component={PatientLogout}
      />
      {/* <PatientProtectedRoute exact path="/patient-account" component={} />  */}
    </div>
  );
};

export default withRouter(Nav);
