import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getMedToken from "./utils/medApi";
import MedProPatientCard from "./MedProPatientCard.js";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 1200px;
  margin: 0 auto;
`;

const MedProPatientCardList = () => {
  const [patientData, setPatientData] = useState();

  const getID = localStorage.id;

  useEffect(() => {
    getMedToken()
      .get(`perm/${getID}`)
      .then(res => {
        setPatientData(res.data);

        console.log("Grabbed:", res.data);
      })
      .catch(err => {
        console.log("errored:", err);
      });
  }, []);
  console.log("useState Data:", patientData);
  return (
    <Container>
      {patientData
        ? patientData.map(cv => {
            return <MedProPatientCard data={cv} key={cv.patientId} />;
          })
        : ""}
    </Container>
  );
};

export default MedProPatientCardList;
