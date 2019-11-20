import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "./utils/api.js";
import MedProPatientCard from "./MedProPatientCard.js";

const MedProPatientCardList = () => {
  const [patientData, setPatientData] = useState();

  useEffect(() => {
    api()
      .get("/user/patient/1")
      .then(res => {
        setPatientData(res.data);

        console.log("Grabbed:", res.data);
      })
      .catch(err => {
        console.log("errored:", err);
      });
  }, []);
  return (
    <div>
      {/* {patientData.map(cv => {
        <MedProPatientCard data={cv} key={cv.id} />;
      })} */}
    </div>
  );
};

export default MedProPatientCardList;
