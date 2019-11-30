// App.js

import React, { useState } from "react";
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
import { MedInfoContext } from "./context/MedInfoContext";
import { DrInfoContext } from "./context/DrInfoContext";
import PatientFormDivider from "./components/views/PatientFormDivider";
import MedFormDivider from "./components/views/MedFormDivider";
import ChildrenDivider from "./components/views/ChildrenDivider";
import { Container } from "reactstrap";
import "./App.css";

function App() {
  const [patientData, setPatientData] = useState([
    {
      age: 0,
      company: "",
      firstName: "",
      gender: "",
      height: "",
      id: 0,
      isChild: true,
      lastName: "",
      medicEmail: "",
      medicFirstName: "",
      medicLastName: "",
      medproId: 0,
      patientEmail: "",
      patientId: 0,
      patientPhone: "",
      permission: true,
      position: "",
      userId: 0,
      weight: ""
    }
  ]);

  const patientInfo = {
    patientData,
    setPatientData
  };

  console.log("patientData", patientData);
  const message = localStorage.getItem("message");
  const email = localStorage.getItem("patientEmail");

  const addPatient = {
    message,
    email
  };

  const drMessage = localStorage.getItem("message");
  const addDR = {
    drMessage
  };

  return (
    <Container>
      <div className="App">
        <Nav />
        <PatientInfoContext.Provider value={addPatient}>
          <MedInfoContext.Provider value={addDR}>
            <DrInfoContext.Provider value={patientInfo}>
              <MedProtectedRoute
                exact
                path="/med-account"
                component={MedHome}
              />

              <Route
                path="/patient"
                render={props => <PatientFormDivider {...props} />}
              />

              <Route exact path="/" component={LandingPage} />
              <PatientProtectedRoute
                path="/patient-home/"
                component={ChildrenDivider}
              />
              <Route
                path="/child-account/:id"
                render={props => <ChildHome {...props} />}
              />
              <MedProtectedRoute
                path="/med-account/:id"
                component={SinglePatient}
              />
            </DrInfoContext.Provider>
          </MedInfoContext.Provider>
        </PatientInfoContext.Provider>

        <Route path="/med" render={props => <MedFormDivider {...props} />} />
        <MedProtectedRoute exact path="/med-logout" component={MedLogout} />
        <Route
          path="/med-register"
          render={props => <MedRegistrationForm {...props} />}
        />

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
