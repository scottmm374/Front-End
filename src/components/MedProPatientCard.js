import React from "react";
import styled from "styled-components";
import { LightCard } from "./utils/styledComponents.js";

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

const Link = styled.button`
  background: none;
  color: #32ddaa;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0px;
`;

const MedProPatientCard = props => {
  return (
    <LightCard>
      <H2>{`${props.firstName} ${props.lastName}`}</H2>
      <P>{`${props.gender} | ${props.age}`}</P>
      <Link>View Patient</Link>
    </LightCard>
  );
};

export default MedProPatientCard;
