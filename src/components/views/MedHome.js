import React, { useSate, useEffect, useContext } from "react";
import MedProPatientcardList from "../MedProPatientCardList.js";
import { DrInfoContext } from "../../context/DrInfoContext";
import { MedInfoContext } from "../../context/MedInfoContext";

const MedHome = props => {
  const addDR = useContext(MedInfoContext);
  const patientInfo = useContext(DrInfoContext);

  console.log("Med hme patient info", patientInfo);
  return (
    <div>
      <h1>
        {addDR.drMessage} {patientInfo.patientData[0].medicFirstName}{" "}
        {patientInfo.patientData[0].medicLastName}{" "}
      </h1>
      <div>
        <span className="titles">Email: </span>
        <span>{patientInfo.patientData[0].medicEmail} </span>{" "}
        <span className="titles">Company: </span>{" "}
        <span>{patientInfo.patientData[0].company}</span>
      </div>
      <h4 className="id">Your Patients</h4>

      <MedProPatientcardList />
    </div>
  );
};

export default MedHome;
