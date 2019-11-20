import React, { useEffect, useState } from "react";
import Axios from "axios";
import getMedToken from "../utils/medApi.js";

const SinglePatient = props => {
  useEffect(() => {
    getMedToken()
      .get(``)
      .then(res => {
        console.log("Grabbed:", res.data);
      })
      .catch(err => {
        console.log("errored:", err);
      });
  });
  return <div></div>;
};

export default SinglePatient;
