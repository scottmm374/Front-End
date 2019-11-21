import React, { useEffect, useState } from "react";
import getMedToken from "../utils/medApi.js";
import Records from "../ImmunizationRecords.js";

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
      <h2>Immunization History</h2>

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

// <div>
//   <h2>
//     Hello:
//     <span>{`${props.location.state.firstName} ${props.location.state.lastName}`}</span>
//   </h2>

//   <div>
//     {records
//       ? records.map(cv => {
//           return <Records data={cv} />;
//         })
//       : ""}
//   </div>
// </div>
