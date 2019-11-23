import React from "react";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./components/views/LandingPage";
import MedicLoginForm from "./components/forms/MedicLoginForm";
import MedRegistrationForm from "./components/forms/MedRegistrationForm";
import PatientLoginForm from "./components/forms/PatientLoginForm";
import PatientRegistrationForm from "./components/forms/PatientRegistrationForm";
import PatientLogout from "./components/navigation/routes/PatientLogout";
import MedLogout from "./components/navigation/routes/MedLogout";
import MedProtectedRoute from "./components/navigation/routes/MedProtectedRoute";
import PatientProtectedRoute from "./components/navigation/routes/PatientProtectedRoute";
import Nav from "./components/navigation/Nav";
import ParentHome from "./components/views/ParentHome";
import ChildHome from "./components/views/ChildHome";
import MedHome from "./components/views/MedHome.js";
import SinglePatient from "./components/views/SinglePatient.js";
import { PatientInfoContext } from "./context/PatientInfoContext";
import { Container } from "reactstrap";
import "./App.css";

function App() {
  const message = localStorage.getItem("message");
  const email = localStorage.getItem("patientEmail");
  console.log("message", message);
  const addPatient = {
    message,
    email
  };

  return (
    <Container>
      <div className="App">
        <Nav />
        {/* <Route exact path="/" component={LandingPage} /> */}
        {/*  Routes  if protected route, requires token to be set. */}
        {/* Med routes */}
        <Route
          path="/med-login"
          render={props => <MedicLoginForm {...props} />}
        />
        <MedProtectedRoute exact path="/med-logout" component={MedLogout} />
        <Route
          path="/med-register"
          render={props => <MedRegistrationForm {...props} />}
        />
        <MedProtectedRoute exact path="/med-account" component={MedHome} />

        <MedProtectedRoute path="/med-account/:id" component={SinglePatient} />

        {/* Patient routes */}

        <PatientInfoContext.Provider value={addPatient}>
          <Route
            path="/patient-login"
            render={props => <PatientLoginForm {...props} />}
          />

          <Route exact path="/" component={LandingPage} />
          <PatientProtectedRoute path="/patient-home/" component={ParentHome} />
          <Route
            path="/child-account/:id"
            render={props => <ChildHome {...props} />}
          />
        </PatientInfoContext.Provider>

        <Route
          path="/patient-register"
          render={props => <PatientRegistrationForm {...props} />}
        />

        <PatientProtectedRoute
          path="/patient-logout"
          component={PatientLogout}
        />
      </div>
    </Container>
  );
}

export default withRouter(App);
