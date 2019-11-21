import React from "react";
import { Link } from "react-router-dom";
import { Alert, Jumbotron, Container } from "reactstrap";
import { Button } from "../utils/styledComponents.js";
import HeaderImg from "../../images/image.jpg";
import { Card, CardText, CardBody } from "reactstrap";
import styled from "styled-components";

function LandingPage() {
  return (
    <Container fluid>
      <Jumbotron>
        <img src={HeaderImg} alt="Man with baby" />
      </Jumbotron>

      <Card>
        <CardBody>
          <CardText>
            <p>
              As a parent, it's hard to keep track of your child's immunization
              records! Especially if you move states, or switch doctors. It's a
              pain to call around and figure out which immunizations your child
              still needs, or to have them mail you proof for things like school
              registration.
            </p>
            <p>
              {" "}
              As an adult, it's even harder to access these records for travel
              that requires immunizations or booster shots. This app allows
              medical professionals to upload immunization records to your
              personal or family account.
            </p>
          </CardText>
          <h1>Choose your role.</h1>
          <Link to="/patient-login">
            <Button>Patient</Button>
          </Link>
          <Link to="/med-login">
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
