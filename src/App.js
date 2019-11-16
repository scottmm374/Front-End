import React from "react";
import logo from "./logo.svg";
import "./App.css";

//component Imports
import AddImmunization from "./components/forms/AddImmunization.js";
import MedicLoginForm from "./components/forms/MedicLoginForm.js";

function App() {
  return (
    <div className="App">
      <h2>Medical Log In</h2>
      <MedicLoginForm />
      <h4>Add Immunization Record</h4>
      <AddImmunization />
    </div>
  );
}

export default App;
