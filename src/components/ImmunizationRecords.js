import React, { useState } from "react";

const Records = props => {
  return (
    <div className="master_container">
      <div className="immunizations">
        <p>Immunizations</p>
        <h2>{props.data.vaccineName}</h2>
      </div>
      <div className="date">
        <p>Date Administered</p>
        <h2>{props.data.vaccineDate}</h2>
      </div>
      <div className="location">
        <p>Location</p>
        <h2>{props.data.vaccineLocation}</h2>
      </div>
    </div>
  );
};

export default Records;
