import React from "react";
import styled from "styled-components";
import { LightCard } from "./utils/styledComponents.js";
import { Link } from "react-router-dom";

//Styles

const H2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333333;
  margin: 5px 0px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #777777;
  margin: 5px 0px;
`;

const MedProPatientCard = props => {
  return (
    <LightCard>
      <H2>{`${props.data.firstName} ${props.data.lastName}`}</H2>
      <P>{`${props.data.gender} | ${props.data.age}`}</P>
      {/* <Link to={`/med-account/${props.data.patientId}`}>View Details</Link>  */}
    </LightCard>
  );
};

export default MedProPatientCard;
