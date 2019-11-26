import React, { useSate, useEffect, useContext } from "react";
import MedProPatientcardList from "../MedProPatientCardList.js";
import { DrInfoContext } from "../../context/DrInfoContext";
import { MedInfoContext } from "../../context/MedInfoContext";
import styled from "styled-components";

const NewH1 = styled.h1`
  margin-bottom: 1rem;
`;

const Div = styled.div`
  margin-bottom: 2rem;
`;

const NewSpan = styled.span`
  padding-right: 40px;
`;

const MedHome = props => {
  const addDR = useContext(MedInfoContext);
  const patientInfo = useContext(DrInfoContext);

  console.log("Med hme patient info", patientInfo);
  return (
    <div>
      <NewH1>
        {addDR.drMessage} {patientInfo.patientData[0].medicFirstName}{" "}
        {patientInfo.patientData[0].medicLastName}{" "}
      </NewH1>
      <Div>
        <span className="titles">Email: </span>
        <NewSpan>{patientInfo.patientData[0].medicEmail} </NewSpan>{" "}
        <span className="titles">Company: </span>{" "}
        <NewSpan>{patientInfo.patientData[0].company}</NewSpan>
      </Div>
      <h4 className="id">Your Patients</h4>

      <MedProPatientcardList />
    </div>
  );
};

export default MedHome;
