import React from "react";
import { Link } from "react-router-dom";
import { Alert, Jumbotron, Container } from "reactstrap";
import { Button } from "../utils/styledComponents.js";
import HeaderImg from "../../images/image.jpg";
import { Card, CardText, CardBody } from "reactstrap";
import styled from "styled-components";

export const ButtonPatient = styled.button`
  background: #ff9d65;
  color: #ffffff;
  &:hover {
    background: #ffb286;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  border-radius: 4px;
  border: none;
  margin: auto 15px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
`;

function LandingPage() {
  return (
    <Container>
      {/* <Jumbotron>
        <img src={HeaderImg} alt="Man with baby" />
      </Jumbotron> */}

      <Card>
        <CardBody>
          <CardText>
            <p>
              As a parent, it's hard to keep track of your child's immunization
              records! Especially if you move states, or switch doctors. This
              app allows medical professionals to upload immunization records to
              your personal or family account.
            </p>
            <p>
              Sign up now, and have your childs immunization records available
              to you at all times.
            </p>
          </CardText>
          <h1>Choose your role.</h1>
          <Link to="/patient">
            <ButtonPatient>Patient</ButtonPatient>
          </Link>
          <Link to="/med">
            <Button>Provider</Button>
          </Link>
        </CardBody>
      </Card>

      <Alert color="danger">
        **Important: Do not use any data about real people in this app as it
        could be a violation of HIPAA regulations**
      </Alert>
    </Container>
  );
}

export default LandingPage;

// Photo by Wayne Evans from Pexels
