import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getMedToken from "./utils/medApi";
import MedProPatientCard from "./MedProPatientCard.js";

const MedProPatientCardList = () => {
  const [patientData, setPatientData] = useState();

  useEffect(() => {
    getMedToken()
      .get("perm/2")
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
    <div>
      {patientData
        ? patientData.map(cv => {
            return <MedProPatientCard data={cv} key={cv.patientId} />;
          })
        : ""}

      {/* {patientData.map(cv => {
        <MedProPatientCard data={cv} key={cv.id} />;
      })} */}
    </div>
  );
};

export default MedProPatientCardList;
