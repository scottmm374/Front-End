import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    border: solid 2px #ffcfb4;
    box-shadow: 0px 8px 10px #ffcfb4;
  }
`;
const H2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #ff9d65;
  margin: 5px 0px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #ff9d65;
  margin: 5px 0px;
`;
const ChildCard = props => {
  //console.log(child, doctor);

  return (
    <LightCard>
      <Link
        to={{
          // pathname:`/child-account/${props.child.firstName}${props.child.lastName}`,
          pathname: `/child-account/${props.child.id}`,
          state: {
            child: props.child,
            shots: props.shots
          }
        }}
      >
        <H2>
          {props.child.firstName} {props.child.lastName}
          <p>Age- {props.child.age}</p>
        </H2>
      </Link>
    </LightCard>
  );
};

export default ChildCard;
