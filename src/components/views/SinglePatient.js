import React, { useEffect, useState } from "react";
import getMedToken from "../utils/medApi.js";
import HistoryCard from "../ChildCardList.js";
import AddImmunization from "../forms/AddImmunization.js";

const SinglePatient = props => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    getMedToken()
      .get(`/record/${props.location.state.patientId}`)
      .then(res => {
        console.log("API:", res.data);
        setRecords(res.data);
      })
      .catch(err => {
        console.log("errored:", err);
      });
  }, []);
  console.log("records:", records);

  if (!records) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h2>{`${props.location.state.firstName} ${props.location.state.lastName}'s`}</h2>
      <h3>Immunization Records</h3>

      <AddImmunization patientId={props.location.state.patientId} />

      <table>
        {records.length === 0 ? (
          <h3>No Record</h3>
        ) : (
          <thead>
            <tr>
              <th>Vaccine</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
        )}
        {records.length === 0 ? (
          <></>
        ) : (
          records.map(cv => {
            return (
              <thead key={cv.id}>
                <tr>
                  <th>{cv.vaccineName}</th>
                  <th>{cv.vaccineDate}</th>
                  <th>{cv.vaccineLocation}</th>
                </tr>
              </thead>
            );
          })
        )}
      </table>
    </>
  );
};

export default SinglePatient;
