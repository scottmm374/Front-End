import React, { useSate, useEffect, useContext } from "react";
import MedProPatientcardList from "../MedProPatientCardList.js";
import { MedInfoContext } from "../../context/MedInfoContext";

const MedHome = () => {
  const addDR = useContext(MedInfoContext);
  return (
    <div>
      <h2>Med Home</h2>
      <p>{addDR.drMessage} </p>
      <MedProPatientcardList />
    </div>
  );
};

export default MedHome;
