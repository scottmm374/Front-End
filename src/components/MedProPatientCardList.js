import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import getMedToken from "./utils/medApi";
import MedProPatientCard from "./MedProPatientCard.js";
import { DrInfoContext } from "../context/DrInfoContext";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 1200px;
  margin: 0 auto;
`;

const MedProPatientCardList = props => {
  // const [patientData, setPatientData] = useState();
  const patientInfo = useContext(DrInfoContext);

  const getID = localStorage.id;

  useEffect(() => {
    getMedToken()
      .get(`perm/${getID}`)
      .then(res => {
        patientInfo.setPatientData(res.data);

        console.log("Grabbed:", res.data);
      })
      .catch(err => {
        console.log("errored:", err);
      });
  }, []);
  console.log("useState Data:", patientInfo.patientData);
  return (
    <Container>
      {patientInfo.patientData
        ? patientInfo.patientData.map(cv => {
            return <MedProPatientCard data={cv} key={cv.patientId} />;
          })
        : ""}
    </Container>
  );
};

export default MedProPatientCardList;
