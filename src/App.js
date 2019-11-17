import React from "react";
import logo from "./logo.svg";
import "./App.css";

//component Imports
import AddImmunization from "./components/forms/AddImmunization.js";
import MedicLoginForm from "./components/forms/MedicLoginForm.js";
import { Master } from "./components/utils/styledComponents.js";

function App() {
  return (
    <Master>
      <h2>Medical Log In</h2>
      <MedicLoginForm />
      <h4>Add Immunization Record</h4>
      <AddImmunization />
    </Master>
  );
}

export default App;
