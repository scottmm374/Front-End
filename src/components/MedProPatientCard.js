import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Styles

const LightCard = styled.div`
  background: #ffffff;
  border: solid 2px #bdbdbd;
  border-radius: 6px;
  margin: 20px;
  padding: 20px;
  min-width: 250px;
  transition: all 0.5s;
  box-shadow: 0px 5px 10px lightgrey;
  &:hover {
    border: solid 2px #32ddaa;
    box-shadow: 0px 5px 10px #32ddaa;
  }
`;

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

const NSpan = styled.span`
  color: #777777;
  &:hover {
    color: #32ddaa;
  }
`;

const MedProPatientCard = props => {
  return (
    <LightCard>
      <H2>{`${props.data.firstName} ${props.data.lastName}`}</H2>
      <P>{`${props.data.gender} | ${props.data.age}`}</P>
      <Link
        to={{
          pathname: `/med-account/${props.data.patientId}`,
          state: {
            patientId: props.data.patientId, //props.location.state.keyName
            firstName: props.data.firstName,
            lastName: props.data.lastName,
            gender: props.data.gender,
            age: props.data.age
          }
        }}
      >
        <NSpan> Click This Link</NSpan>
      </Link>
    </LightCard>
  );
};

export default MedProPatientCard;
