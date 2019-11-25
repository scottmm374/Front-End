import React from "react";
import { Link } from "react-router-dom";
import { Alert, Jumbotron, Container } from "reactstrap";
import { Button } from "../utils/styledComponents.js";
import HeaderImg from "../../images/image.jpg";
import { Card, CardText, CardBody } from "reactstrap";
import styled from "styled-components";

function LandingPage() {
  return (
    <Container>
      <Jumbotron>
        <img src={HeaderImg} alt="Man with baby" />
      </Jumbotron>

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
